"use client"

import { useTranslation } from "react-i18next"
import { DynamicFrameLayout } from "../components/grid"

export function DemoPage() {
  const { t } = useTranslation()

  const demoFrames = [
    {
      id: 1,
      video:
        "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
      to: "/sobre-mim",
      label: t("grid.sobreMim"),
    },
    {
      id: 2,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
      to: "/experiencia",
      label: t("grid.experiencia"),
    },
    {
      id: 3,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
      to: "/projetos",
      label: t("grid.projetos"),
    },
    {
      id: 4,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
      to: "/contatos",
      label: t("grid.contatos"),
    },
  ]

  return (
    <div className="min-h-dvh w-full bg-zinc-900">
      <DynamicFrameLayout
        frames={demoFrames}
        className="w-full md:h-dvh"
        gapSize={4}
      />
    </div>
  )
}
