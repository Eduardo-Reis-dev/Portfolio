"use client"

import { DynamicFrameLayout } from "../components/grid"

const demoFrames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
  },
]

export function DemoPage() {
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
