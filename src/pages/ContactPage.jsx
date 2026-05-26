import React from "react";
import { Code2, Globe, Mail, Phone } from "lucide-react";
import { externalLinks } from "../data/links.js";
import { profile } from "../data/portfolio.js";

export default function ContactPage() {
  return (
    <section
      className="bg-[linear-gradient(135deg,#020617_0%,#0f172a_55%,#134e4a_100%)] px-4 py-20 text-white sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
            Let&apos;s build clean, scalable developer experiences.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Open to full-stack, backend, and software engineering opportunities
            where React, Spring Boot, Node.js, Python, APIs, and DSA depth matter.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-100"
              href={externalLinks.email}
            >
              <Mail className="h-5 w-5" />
              Email Jyoti
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-teal-200/60"
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
            >
              <Phone className="h-5 w-5" />
              {profile.phone}
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-teal-200/60"
              href={externalLinks.github}
            >
              <Code2 className="h-5 w-5" />
              GitHub
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-teal-200/60"
              href={externalLinks.linkedin}
            >
              <Globe className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-300">
            Email: {profile.email}
          </p>
        </div>
      </div>
    </section>
  );
}
