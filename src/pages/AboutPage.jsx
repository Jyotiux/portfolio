import React from "react";
import { Award, GraduationCap, Layers3 } from "lucide-react";
import { achievements, profile, skillGroups } from "../data/portfolio.js";

export default function AboutPage() {
  return (
    <section
      className="bg-slate-50 px-4 py-20 text-slate-950 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">
            About
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
            Engineering useful products from clean APIs to responsive UI.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {profile.summary[0]} {profile.summary[1]}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <GraduationCap className="h-9 w-9 text-teal-700" />
            <h3 className="mt-5 text-xl font-black">Education</h3>
            <p className="mt-3 font-semibold">{profile.education.institute}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {profile.education.degree}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              {profile.education.graduation}
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
            <Layers3 className="h-9 w-9 text-teal-700" />
            <h3 className="mt-5 text-xl font-black">Technical Focus</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {skillGroups.slice(0, 6).map((group) => (
                <div
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  key={group.title}
                >
                  <p className="font-bold text-slate-950">{group.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-5 rounded-3xl border border-teal-200 bg-teal-50 p-6">
          <div className="flex items-center gap-3">
            <Award className="h-7 w-7 text-teal-700" />
            <h3 className="text-xl font-black">Credibility Notes</h3>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {achievements.slice(0, 4).map((item) => (
              <p
                className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-700"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
