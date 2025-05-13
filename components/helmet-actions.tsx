"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { HelmetDialog } from "@/components/helmet-dialog";
import { deleteHelmet } from "@/lib/actions/helmet";
import type { Helmet, Rider } from "@/lib/generated/prisma";

interface HelmetActionsProps {
  helmet: Helmet;
  riders: Rider[];
}

export function HelmetActions({ helmet, riders }: HelmetActionsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const result = await deleteHelmet(helmet.id);

      if (result.success) {
        toast.success("Helmet deleted successfully");
        setIsDeleteDialogOpen(false);
        router.refresh();
      } else {
        toast.error((result.error as string) || "Failed to delete helmet");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex space-x-2 mt-3">
        <HelmetDialog
          helmet={helmet}
          riders={riders}
          title="Edit Helmet"
          description="Update the helmet ID or assign to a different rider. Other data will be updated from ThingSpeak API."
          trigger={
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          }
        />
        <Button
          variant="outline"
          size="sm"
          className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
          onClick={() => setIsDeleteDialogOpen(true)}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Helmet</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete helmet {helmet.helmetId}? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2 pt-4">
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
              {isLoading ? "Deleting..." : "Delete Helmet"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
