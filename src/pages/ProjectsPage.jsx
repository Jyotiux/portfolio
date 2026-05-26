import React from "react";
import { ArrowUpRight, Boxes, Code2 } from "lucide-react";
import { projects } from "../data/portfolio.js";

export default function ProjectsPage() {
  return (
    <section
      className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
              Developer work across full-stack systems, APIs, AI/ML, and IoT.
            </h2>
          </div>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            href="#contact"
          >
            Discuss Work
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:bg-white hover:shadow-xl"
              key={project.name}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-teal-800">
                  <Boxes className="h-4 w-4" />
                  {project.category}
                </span>
                <Code2 className="h-5 w-5 text-slate-400 transition group-hover:text-teal-700" />
              </div>

              <h3 className="mt-6 text-2xl font-black tracking-normal text-slate-950">
                {project.name}
              </h3>
              <p className="mt-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-700">
                {project.stack}
              </p>

              <ul className="mt-5 space-y-3">
                {project.details.map((detail) => (
                  <li
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                    key={detail}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
