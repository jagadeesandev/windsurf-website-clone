import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const FinalCta = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.4em] text-foreground">
          [LET'S SURF]
        </p>

        <Button
          variant="destructive"
          size="lg"
          className="mb-6 h-auto px-8 py-4 text-base font-medium"
        >
          Download for Linux
        </Button>

        <p className="text-sm text-muted-foreground">
          Not using Linux?{" "}
          <Link
            href="/download"
            className="underline transition-colors hover:text-foreground"
          >
            View all download options
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FinalCta;