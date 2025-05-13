"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Helmet, Rider } from "@/lib/generated/prisma";
import { HelmetForm } from "./forms/helmet-form";

interface HelmetDialogProps {
  helmet?: Helmet;
  riders: Rider[];
  trigger?: React.ReactNode;
  title: string;
  description: string;
}

export function HelmetDialog({
  helmet,
  riders,
  trigger,
  title,
  description,
}: HelmetDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
            Add New Helmet
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <HelmetForm
          helmet={helmet}
          riders={riders}
          onSuccess={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
