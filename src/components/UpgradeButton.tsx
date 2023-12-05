"use client";

import { trpc } from "@/app/_trpc/client";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function UpgradeButton() {
  const { mutate: createStripeSession } = trpc.createStripeSession.useMutation({
    onSuccess: ({ url }) => {
      window.location.href = url ?? "/dashboard/billing";
    },
  });

  return (
    <Button onClick={() => createStripeSession()} className="w-full">
      Upgrade now <ArrowRight className="h-5 w-5 ml-1.5" />
    </Button>
  );
}

export default UpgradeButton;
