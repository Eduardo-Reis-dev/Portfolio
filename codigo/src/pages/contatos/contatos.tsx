import React from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { BackButton } from "@/components/back-button";
import {
  Code2,
  User,
  Mail,
  MessageCircleMore
} from "lucide-react";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <div className="relative mb-2">
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white via-grey to-white opacity-60 blur-lg animate-glow" />
        <img
          src="telefone.png"
          alt="minha-foto"
          className="relative size-80"
        />
      </div>
      <h1 className="text-2xl md:text-6xl font-extrabold leading-tight tracking-tight font-geist drop-shadow-lg">
        {t("pages.contatos.heroTitle")}
      </h1>
      <p className="text-xl md:text-xl text-zinc-300 max-w-2xl mx-auto font-inter font-normal">
        {t("pages.contatos.heroDesc")}
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

const SocialsBlock: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks: SocialLink[] = [
    {
      href: 'https://www.linkedin.com/in/joaquim-antonio/',
      label: t("pages.contatos.linkedin"),
      icon: <User size={28} />,
      bg: 'bg-blue-500',
      text: 'text-white',
    },
    {
      href: 'https://github.com/joaquim-antonio',
      label: t("pages.contatos.github"),
      icon: <Code2 size={28} />,
      bg: 'bg-zinc-800',
      text: 'text-white',
    },
    {
      href: 'https://wa.me/5533998640504',
      label: t("pages.contatos.whatsapp"),
      icon: <MessageCircleMore size={28} />,
      bg: 'bg-zinc-800',
      text: 'text-white',
    },
    {
      href: '#',
      label: t("pages.contatos.email"),
      icon: <Mail size={28} />,
      bg: 'bg-zinc-50',
      text: 'text-zinc-900',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full font-inter">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className={twMerge(
            'flex items-center gap-2 rounded-full border border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-white focus:outline-none focus:ring-2 focus:ring-white bg-opacity-80',
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
};

export const Contatos = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 px-4 py-16 text-zinc-50 font-inter relative overflow-hidden">
      <BackButton />
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
