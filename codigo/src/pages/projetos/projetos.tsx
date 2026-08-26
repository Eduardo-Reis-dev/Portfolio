import {   
  HeroCarousel,
  type HeroCarouselItem,
  } from "./carrosel";

const ART = (name: string) =>
  `https://pub-45c4a3d9611041d08fe82d52599b72b0.r2.dev/primary-showcase-assets/${name}.jpg`

const LOOKS: HeroCarouselItem[] = [
  {
    title: "Red\nRibbon",
    image: ART("red-ribbon-typography"),
    credit: "BY CASA SOLARA.",
    meta: ["FRI NOV 21", "6-9 PM", "LISBON"],
    accent: "#e5231b",
  },
  {
    title: "Celestial\nLight",
    image: ART("celestial-light-figure"),
    credit: "BY AURELIA STUDIO.",
    meta: ["SAT NOV 22", "5-10 PM", "MIAMI"],
    accent: "#2f7bff",
  },
  {
    title: "Neon\nUplight",
    image: ART("neon-portrait-uplight"),
    credit: "BY ATELIER SUD.",
    meta: ["SUN NOV 23", "4-8 PM", "MARRAKECH"],
    accent: "#ff2f9c",
  },
]

export function Projetos() {
  return (
    <HeroCarousel
      items={LOOKS}
      defaultIndex={4}
      brand="MONTRA"
      onBack={() => {}}
      onMenu={() => {}}
    />
  )
}
