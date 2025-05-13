"use client";

import { AlertTriangle, MoreHorizontal, Phone, Plus, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteRider } from "@/lib/actions/rider";
import { type Rider } from "@/lib/generated/prisma";
import { RiderForm } from "./forms/rider-form";
import { DataTable } from "./ui/data-table";
import toast from "react-hot-toast";

interface RidersListProps {
  initialRiders: Rider[];
}

export function RidersList({ initialRiders }: RidersListProps) {
  const router = useRouter();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedRider, setSelectedRider] = useState<Rider | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (!selectedRider) return;

    setIsLoading(true);
    try {
      const result = await deleteRider(selectedRider.id);

      if (result.success) {
        toast.success("Rider deleted successfully");
        setIsDeleteDialogOpen(false);
      } else {
        toast.error((result.error as string) || "Failed to delete rider");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    {
      accessorKey: "riderId",
      header: "ID",
      cell: ({ row }: { row: any }) => (
        <div className="font-medium">{row.original.riderId}</div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span>{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{row.original.phone}</span>
        </div>
      ),
    },
    {
      accessorKey: "hasHadIncident",
      header: "Incident History",
      cell: ({ row }: { row: any }) => (
        <div>
          {row.original.hasHadIncident ? (
            <Badge variant="destructive" className="flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              <span>Had Incident</span>
            </Badge>
          ) : (
            <Badge variant="outline" className="text-muted-foreground">
              None
            </Badge>
          )}
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }: { row: any }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                setSelectedRider(row.original);
                setIsViewDialogOpen(true);
              }}
            >
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelectedRider(row.original);
                setIsEditDialogOpen(true);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelectedRider(row.original);
                setIsDeleteDialogOpen(true);
              }}
              className="text-destructive focus:text-destructive"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-4">
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Rider
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={initialRiders}
        searchPlaceholder="Search riders..."
        searchColumn="name"
      />

      {/* Add Rider Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Rider</DialogTitle>
            <DialogDescription>
              Add a new rider to the motorcycle safety system.
            </DialogDescription>
          </DialogHeader>
          <RiderForm
            onSuccess={() => {
              router.refresh();
              setIsAddDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Rider Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Rider</DialogTitle>
            <DialogDescription>Update rider information.</DialogDescription>
          </DialogHeader>
          {selectedRider && (
            <RiderForm
              initialData={{
                id: selectedRider.id,
                riderId: selectedRider.riderId,
                name: selectedRider.name,
                email: selectedRider.email,
                phone: selectedRider.phone,
                address: selectedRider.address || "",
                hasHadIncident: selectedRider.hasHadIncident,
              }}
              onSuccess={() => {
                router.refresh();
                setIsEditDialogOpen(false);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* View Rider Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Rider Details</DialogTitle>
          </DialogHeader>
          {selectedRider && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Rider ID
                  </h4>
                  <p className="text-base">{selectedRider.riderId}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Name
                  </h4>
                  <p className="text-base">{selectedRider.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Email
                  </h4>
                  <p className="text-base">{selectedRider.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Phone
                  </h4>
                  <p className="text-base">{selectedRider.phone}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Address
                  </h4>
                  <p className="text-base">
                    {selectedRider.address || "Not provided"}
                  </p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Incident History
                  </h4>
                  <div className="mt-1">
                    {selectedRider.hasHadIncident ? (
                      <Badge
                        variant="destructive"
                        className="flex items-center gap-1 w-fit"
                      >
                        <AlertTriangle className="h-3 w-3" />
                        <span>Has had incidents</span>
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-muted-foreground w-fit"
                      >
                        No incidents
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Created At
                  </h4>
                  <p className="text-base">
                    {new Date(selectedRider.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsViewDialogOpen(false)}
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setIsViewDialogOpen(false);
                    setIsEditDialogOpen(true);
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this rider? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
