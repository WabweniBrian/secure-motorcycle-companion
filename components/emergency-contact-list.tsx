"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, User, Plus, MoreHorizontal, UserCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
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
import { ContactForm } from "@/components/forms/contact-form";
import { deleteContact } from "@/lib/actions/contact";
import type { Contact, Rider } from "@/lib/generated/prisma";
import toast from "react-hot-toast";

interface EmergencyContactListProps {
  initialContacts: Contact[];
  initialRiders: Rider[];
}

export function EmergencyContactList({
  initialContacts,
  initialRiders,
}: EmergencyContactListProps) {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (!selectedContact) return;

    setIsLoading(true);
    try {
      const result = await deleteContact(selectedContact.id);

      if (result.success) {
        setContacts(
          contacts.filter((contact) => contact.id !== selectedContact.id)
        );
        toast.success("Contact deleted successfully");
        setIsDeleteDialogOpen(false);
      } else {
        toast.error((result.error as string) || "Failed to delete contact");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const getRiderName = (riderId: string) => {
    const rider = initialRiders.find((r) => r.id === riderId);
    return rider ? rider.name : "Unknown Rider";
  };

  const columns = [
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
      accessorKey: "relation",
      header: "Relation",
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
      accessorKey: "riderId",
      header: "Rider",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <UserCircle2 className="h-4 w-4 text-muted-foreground" />
          <span>{getRiderName(row.original.riderId)}</span>
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
                setSelectedContact(row.original);
                setIsViewDialogOpen(true);
              }}
            >
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelectedContact(row.original);
                setIsEditDialogOpen(true);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelectedContact(row.original);
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
          Add Emergency Contact
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={contacts}
        searchPlaceholder="Search contacts..."
        searchColumn="name"
      />

      {/* Add Contact Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Emergency Contact</DialogTitle>
            <DialogDescription>
              Add a new emergency contact for a rider.
            </DialogDescription>
          </DialogHeader>
          <ContactForm
            riders={initialRiders.map((rider) => ({
              id: rider.id,
              name: rider.name,
              riderId: rider.riderId,
            }))}
            onSuccess={() => {
              router.refresh();
              setIsAddDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Contact Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Emergency Contact</DialogTitle>
            <DialogDescription>
              Update emergency contact information.
            </DialogDescription>
          </DialogHeader>
          {selectedContact && (
            <ContactForm
              initialData={{
                id: selectedContact.id,
                riderId: selectedContact.riderId,
                name: selectedContact.name,
                relation: selectedContact.relation,
                phone: selectedContact.phone,
                address: selectedContact.address || "",
              }}
              riders={initialRiders.map((rider) => ({
                id: rider.id,
                name: rider.name,
                riderId: rider.riderId,
              }))}
              onSuccess={() => {
                router.refresh();
                setIsEditDialogOpen(false);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* View Contact Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Emergency Contact Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Name
                  </h4>
                  <p className="text-base">{selectedContact.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Relation
                  </h4>
                  <p className="text-base">{selectedContact.relation}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Phone
                  </h4>
                  <p className="text-base">{selectedContact.phone}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Rider
                  </h4>
                  <p className="text-base">
                    {getRiderName(selectedContact.riderId)}
                  </p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Address
                  </h4>
                  <p className="text-base">
                    {selectedContact.address || "Not provided"}
                  </p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Created At
                  </h4>
                  <p className="text-base">
                    {new Date(selectedContact.createdAt).toLocaleString()}
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
              Are you sure you want to delete this emergency contact? This
              action cannot be undone.
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
