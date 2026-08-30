import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BackButton } from "@/components/back-button"
import { CoverflowCarousel, type CoverflowSlide } from "./carrosel"
import { PROJECTS } from "./data"

const SLIDES: CoverflowSlide[] = PROJECTS.map((p) => ({
  src: p.logo,
  alt: p.title.replace("\n", " "),
  title: p.title,
  subtitle: p.credit,
  meta: p.meta?.map((m) => ({ label: "", value: m })),
}))

export function Projetos() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)
  const active = SLIDES[activeIndex]

  return (
    <div className="relative min-h-screen w-full flex items-center bg-zinc-950 overflow-hidden">
      <BackButton />
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-8">
        {active && (
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-zinc-50 whitespace-pre-line">
              {active.title}
            </h1>
            {active.subtitle && (
              <p className="text-sm text-zinc-400 font-mono uppercase tracking-widest">
                {active.subtitle}
              </p>
            )}
          </div>
        )}
        <CoverflowCarousel
          slides={SLIDES}
          showCaption
          showNavigation
          onActiveChange={setActiveIndex}
          onSlideClick={(i) => navigate(`/projetos/${PROJECTS[i].id}`)}
        />
      </div>
    </div>
  )
}
