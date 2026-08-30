import { useParams, Navigate } from "react-router-dom"
import { ExternalLink } from "lucide-react"
import { BackButton } from "@/components/back-button"
import { getProjectById } from "./data"

export function ProjetoDetalhe() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return <Navigate to={"*"} replace/>
  }

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50 font-inter">

      <BackButton />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 flex flex-col gap-10">
        <header className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={project.logo}
            alt={`${project.title.replace("\n", " ")} logo`}
            className="w-20 h-20 rounded-2xl object-cover border border-zinc-800"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight whitespace-pre-line">
              {project.title}
            </h1>
            {project.credit && (
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
                {project.credit}
              </p>
            )}
          </div>
        </header>

        <img
          src={project.image}
          alt={project.title.replace("\n", " ")}
          className="w-full rounded-2xl object-contain border border-zinc-800 aspect-video"
        />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-[0.14em] text-zinc-500">
            Sobre
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-[0.14em] text-zinc-500">
            Como contribui para o projeto
          </h2>
          <ul className="flex flex-col gap-2">
            {project.contributions.map((c) => (
              <li key={c} className="flex items-start gap-2 text-zinc-300">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-zi nc-50" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-[0.14em] text-zinc-500">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 bg-zinc-800/60 px-4 py-1.5 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-mono uppercase tracking-[0.14em] text-zinc-500">
            Links
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-5 py-2 text-sm font-semibold text-zinc-200 transition-all hover:border-pink-400 hover:text-white"
              >
                <ExternalLink size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {project.gallery.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className="text-sm font-mono uppercase tracking-[0.14em] text-zinc-500">
              Galeria
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title.replace("\n", " ")} ${i + 1}`}
                  className="w-full rounded-xl object-cover border border-zinc-800 aspect-video"
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        .font-inter { font-family: 'Inter', 'Geist', system-ui, sans-serif; }
      `}</style>
    </div>
  )
}
