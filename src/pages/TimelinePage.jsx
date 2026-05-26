import React from "react";
import { CalendarDays } from "lucide-react";
import { timelineItems } from "../data/portfolio.js";

export default function TimelinePage() {
  return (
    <section
      className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
      id="timeline"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300">
            Timeline
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
            A profile shaped by projects, practice, and applied engineering.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {timelineItems.map((item) => (
            <article
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-200/50 hover:bg-white/[0.09]"
              key={`${item.year}-${item.text}`}
            >
              <CalendarDays className="h-6 w-6 text-amber-200" />
              <h3 className="mt-5 text-2xl font-black text-white">
                {item.year}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
