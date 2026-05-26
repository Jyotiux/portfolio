import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  Brain,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Mail,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { externalLinks } from "../data/links.js";
import { profile } from "../data/portfolio.js";

const skills = [
  "React",
  "Spring Boot",
  "Node.js",
  "Python",
  "DSA",
  "REST APIs",
  "UI/UX",
];
const skillStrip = [...skills, ...skills];

const heroPhotos = [
  { src: "/profile.png", alt: `${profile.name} profile portrait` },
  { src: "/profile-2.png", alt: `${profile.name} developer portrait` },
  { src: "/profile-3.png", alt: `${profile.name} software engineer portrait` },
];

const highlights = [
  { label: "Full-stack", icon: Code2 },
  { label: "Backend APIs", icon: ServerCog },
  { label: "Data + AI", icon: Database },
  { label: "Strong DSA", icon: Brain },
];

export default function HeroPage() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % heroPhotos.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.25),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(251,191,36,0.16),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#155e75_100%)] px-4 py-14 sm:px-5 lg:px-6 2xl:px-8"
      id="home"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-[92rem] items-center gap-10 pt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(30rem,0.95fr)] xl:gap-12">
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100 shadow-glow">
            <Sparkles className="h-4 w-4" />
            Developer portfolio / engineer profile
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-200 via-cyan-100 to-amber-200 bg-clip-text text-transparent">
              Jyoti Singh
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-xl font-semibold text-slate-100 sm:text-2xl">
            AI & Data Science graduate from IIITDM Kurnool
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Full-stack developer skilled in React, Spring Boot, Node.js, Python,
            and DSA with practical backend API design experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-teal-400/20 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-100"
              href="#projects"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-teal-200/60 hover:bg-white/15"
              href="#contact"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-200/60 hover:text-white"
              href={externalLinks.github}
              aria-label="GitHub"
            >
              <Code2 className="h-5 w-5" />
            </a>
            <a
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-200/60 hover:text-white"
              href={externalLinks.linkedin}
              aria-label="LinkedIn"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-200/60 hover:text-white"
              href={externalLinks.email}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-200/60 hover:text-white"
              href={externalLinks.resume}
              aria-label="Resume"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-full border border-white/10 bg-white/10 py-3 backdrop-blur">
            <div className="flex w-max animate-marquee items-center gap-3">
              {skillStrip.map((skill, index) => (
                <span
                  className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-bold text-slate-100"
                  key={`${skill}-${index}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[34rem] lg:order-2 lg:ml-auto lg:mr-0 lg:max-w-[39rem]">
          <div className="relative px-2 sm:px-6 lg:px-0">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-300/30 via-cyan-300/10 to-amber-300/25 blur-2xl" />
            <div className="absolute -right-3 top-10 hidden h-28 w-28 rounded-full border border-white/15 bg-white/10 backdrop-blur sm:block" />
            <div className="absolute -bottom-4 -left-2 hidden h-20 w-20 rounded-3xl border border-teal-200/25 bg-teal-300/10 backdrop-blur sm:block" />

            <div className="relative rounded-[2.25rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="relative h-[420px] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 sm:h-[540px] lg:h-[610px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(94,234,212,0.22),transparent_35%)]" />

                {heroPhotos.map((photo, index) => (
                  <img
                    className={`absolute inset-0 h-full w-full p-2 object-contain object-center transition-all duration-700 ease-out sm:p-3 ${
                      activePhoto === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    src={photo.src}
                    alt={photo.alt}
                    key={photo.src}
                  />
                ))}

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-3 py-2 text-xs font-bold text-teal-100 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Full-stack Engineer
                </div>

                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className="flex items-center gap-2 rounded-2xl border border-white/15 bg-slate-950/70 px-3 py-2 text-xs font-bold text-white backdrop-blur"
                      key={item.label}
                    >
                      <Icon className="h-4 w-4 text-teal-200" />
                      {item.label}
                    </div>
                  );
                })}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 px-2 pb-1">
                <div>
                  <p className="text-sm font-black text-white">Jyoti Singh</p>
                  <p className="mt-1 text-xs font-semibold text-slate-300">
                    IIITDM Kurnool / AI & Data Science
                  </p>
                </div>
                <div className="flex items-center gap-2" aria-label="Hero photos">
                  {heroPhotos.map((photo, index) => (
                    <button
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activePhoto === index
                          ? "w-8 bg-teal-200"
                          : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                      type="button"
                      aria-label={`Show photo ${index + 1}`}
                      onClick={() => setActivePhoto(index)}
                      key={photo.src}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
