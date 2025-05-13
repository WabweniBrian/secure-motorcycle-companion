import { EmergencyContactList } from "@/components/emergency-contact-list";
import { RidersList } from "@/components/riders-list";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { getContacts } from "@/lib/actions/contact";
import { getRiders } from "@/lib/actions/rider";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage riders and emergency contacts",
};

export default async function SettingsPage() {
  const riders = await getRiders();
  const contacts = await getContacts();

  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage riders and emergency contacts for the motorcycle safety system.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Riders</h3>
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <RidersList initialRiders={riders} />
          </Suspense>
        </section>
        <Separator />
        <section>
          <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
          <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
            <EmergencyContactList
              initialContacts={contacts}
              initialRiders={riders}
            />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
