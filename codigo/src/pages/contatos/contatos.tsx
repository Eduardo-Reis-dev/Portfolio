import { useTranslation } from "react-i18next"
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Code2,
  Play,
  Video,
} from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-geist drop-shadow-lg">
        Me liga hein!
      </h1>
      <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-inter font-normal">
        Gostou do portfolio e quem entrar em contato? Acessa algumas das minhas redes ou me mande um email diretamente desta página
      </p>
    </section>
  );
};

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    href: '#',
    label: 'YouTube',
    icon: <Play size={28} />,
    bg: 'bg-red-500',
    text: 'text-white',
  },
  {
    href: '#',
    label: 'GitHub',
    icon: <Code2 size={28} />,
    bg: 'bg-zinc-800',
    text: 'text-white',
  },
  {
    href: '#',
    label: 'Self Intro',
    icon: <Video size={28} />,
    bg: 'bg-zinc-50',
    text: 'text-zinc-900',
  },
];

const SocialsBlock: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-4 w-full font-inter">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        aria-label={link.label}
        className={twMerge(
          'flex items-center gap-2 rounded-full border border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-opacity-80',
          link.bg,
          link.text,
        )}
        style={{ minWidth: 140, minHeight: 56 }}
        tabIndex={0}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ))}
  </div>
);

export const Contatos = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-4 py-16 text-zinc-50 font-inter relative overflow-hidden">
      {/* Animated background blob */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-red-500 to-orange-400 opacity-20 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="w-full flex flex-col items-center gap-12 z-10">
        <HeroSection />
        <SocialsBlock />
      </div>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
      .font-inter { font-family: 'Inter', 'Geist', system-ui, sans-serif; }
      .font-geist { font-family: 'Geist', 'Inter', system-ui, sans-serif; }
    `}</style>
    </div>
  );
};
