import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WindsurfTabIntro() {
  return (
    <section className="bg-primary-navy py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="mb-6">Tab Tab Tab...Ship</h2>
          <p className="text-body-large max-w-3xl mx-auto">
            A single keystroke, limitless power, complete flow. The full power of
            Windsurf Tab is exclusive to the Windsurf Editor. Our IDE plugins
            include only the autocomplete action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start max-w-5xl mx-auto">
          <div>
            <h3>Windsurf Tab: Many Actions, One Effortless Flow</h3>
          </div>
          <div className="md:pt-1">
            <p className="text-lg mb-6">
              Tab to move your cursor. Tab to import your dependencies. Tab to
              glory.
            </p>
            <Link
              href="/tab"
              className="inline-flex items-center text-accent-purple tracking-wide text-sm uppercase font-medium group"
            >
              Tab Features
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}