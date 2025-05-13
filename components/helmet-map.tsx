"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useHelmetData } from "@/components/helmet-data-provider";
import type { Helmet, Rider } from "@/lib/generated/prisma";
import L, { type Map, type Marker, LatLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";

interface HelmetMapProps {
  helmets: Helmet[];
  riders: Rider[];
}

export function HelmetMap({ helmets, riders }: HelmetMapProps) {
  const [selectedHelmet, setSelectedHelmet] = useState<Helmet | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<Map | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const mapInitializedRef = useRef(false);

  // Get real-time data from context
  const { helmetsData, locationNames } = useHelmetData();

  const getRiderName = useCallback(
    (riderId: string) => {
      const rider = riders.find((r) => r.id === riderId);
      return rider ? rider.name : "Unknown Rider";
    },
    [riders]
  );

  const getStatusColor = useCallback((status: string) => {
    return status === "active" ? "#22c55e" : "#ef4444";
  }, []);

  // Initialize map
  const initializeMap = useCallback(() => {
    if (!mapRef.current || mapInitializedRef.current) return;

    try {
      // Default center (Kampala, Uganda)
      const center: [number, number] = [0.347596, 32.58252];

      // Initialize Leaflet map
      leafletMapRef.current = L.map(mapRef.current, {
        center,
        zoom: 12,
        zoomControl: true,
      });

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(leafletMapRef.current);

      mapInitializedRef.current = true;
    } catch (error) {
      console.error("Error initializing Leaflet map:", error);
    }
  }, []);

  // Initialize map on component mount
  useEffect(() => {
    initializeMap();

    return () => {
      // Clean up markers
      Object.values(markersRef.current).forEach((marker) => marker.remove());
      markersRef.current = {};

      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }

      mapInitializedRef.current = false;
    };
  }, [initializeMap]);

  // Update markers when helmet data changes
  useEffect(() => {
    if (!leafletMapRef.current || !mapInitializedRef.current) return;

    const map = leafletMapRef.current;

    // Process each helmet
    helmets.forEach((helmet) => {
      const thingSpeakData = helmetsData[helmet.id];

      // Skip if no ThingSpeak data is available yet
      if (!thingSpeakData) return;

      const lat = Number.parseFloat(thingSpeakData.latitude);
      const lng = Number.parseFloat(thingSpeakData.longitude);

      // Skip if coordinates are invalid
      if (isNaN(lat) || isNaN(lng)) return;

      const position: [number, number] = [lat, lng];
      const markerColor = getStatusColor(thingSpeakData.status);
      const locationName = locationNames[helmet.id] || "Unknown Location";

      // Create marker SVG
      const markerSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="${markerColor}" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3" fill="#ffffff"></circle>
        </svg>
      `;

      // Create popup content
      const popupContent = `
        <div class="p-2">
          <h3 class="font-bold">${helmet.helmetId}</h3>
          <p>Rider: ${getRiderName(helmet.riderId)}</p>
          <p>Location: ${locationName}</p>
          <p>Battery: ${thingSpeakData.battery}</p>
          <p>Status: ${thingSpeakData.status}</p>
        </div>
      `;

      // Create or update marker
      if (markersRef.current[helmet.id]) {
        // Update existing marker
        const marker = markersRef.current[helmet.id];
        marker.setLatLng(position);
        marker.setIcon(
          L.icon({
            iconUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markerSvg)}`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          })
        );

        // Update popup content
        marker.unbindPopup(); // Unbind any existing popup
        marker.bindPopup(popupContent); // Rebind with updated content
      } else {
        // Create new marker
        const marker = L.marker(position, {
          icon: L.icon({
            iconUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markerSvg)}`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          }),
          title: helmet.helmetId,
        }).addTo(map);

        // Bind popup directly to marker
        marker.bindPopup(popupContent);

        // Add click listener
        marker.on("click", () => {
          setSelectedHelmet(helmet);
        });

        markersRef.current[helmet.id] = marker;
      }
    });

    // Remove markers for helmets that no longer exist
    Object.keys(markersRef.current).forEach((helmetId) => {
      if (!helmets.some((h) => h.id === helmetId)) {
        markersRef.current[helmetId].remove();
        delete markersRef.current[helmetId];
      }
    });

    // Adjust map bounds to fit all markers if we have markers
    if (Object.keys(markersRef.current).length > 0) {
      const bounds = new LatLngBounds(
        Object.values(markersRef.current).map((marker) => marker.getLatLng())
      );
      map.fitBounds(bounds);

      // Don't zoom in too far
      const zoom = map.getZoom();
      if (zoom && zoom > 15) {
        map.setZoom(15);
      }
    }
  }, [helmets, helmetsData, getRiderName, getStatusColor, locationNames]);

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
      <div ref={mapRef} className="h-full w-full z-20" />

      {/* Fallback if map fails to load */}
      {helmets.length > 0 && !leafletMapRef.current && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">
            Loading map... If the map doesn't load, please check your network
            connection.
          </p>
        </div>
      )}

      {selectedHelmet && !leafletMapRef.current && (
        <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
          <h3 className="font-bold">{selectedHelmet.helmetId}</h3>
          <p className="text-sm text-gray-600">
            Rider: {getRiderName(selectedHelmet.riderId)}
          </p>
          <p className="text-sm text-gray-600">
            Location: {locationNames[selectedHelmet.id] || "Unknown Location"}
          </p>
          <p className="text-sm">
            <span
              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                helmetsData[selectedHelmet.id]?.status === "active"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            ></span>
            {helmetsData[selectedHelmet.id]?.status === "active"
              ? "Active"
              : "Inactive"}
          </p>
        </div>
      )}
    </div>
  );
}
