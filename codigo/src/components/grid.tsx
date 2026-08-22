"use client"

import { useState, useEffect, useRef } from "react"

interface Frame {
  id: number
  video: string
  corner?: string
  edgeHorizontal?: string
  edgeVertical?: string
  mediaSize?: number
  borderThickness?: number
  borderSize?: number
}

interface FrameComponentProps {
  video: string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  showFrame: boolean
  isActive: boolean
  autoplayVisible: boolean
}

function FrameComponent({
  video,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isActive,
  autoplayVisible,
}: FrameComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)
  const [everVisible, setEverVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) setEverVisible(true)
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (inView && (isActive || autoplayVisible)) {
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  }, [inView, isActive, autoplayVisible])

  return (
    <div ref={containerRef} className={`relative h-full w-full ${className}`}>
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="h-full w-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="h-full w-full object-cover"
              src={video}
              loop
              muted
              playsInline
              preload={autoplayVisible && !everVisible ? "none" : "metadata"}
              ref={videoRef}
            />
          </div>
        </div>

        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute top-0 left-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute right-0 bottom-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            <div
              className="absolute top-0 right-16 left-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute right-16 bottom-0 left-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute top-16 bottom-16 left-0 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute top-16 right-0 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

interface DynamicFrameLayoutProps {
  frames: Frame[]
  className?: string
  showFrames?: boolean
  hoverSize?: number
  gapSize?: number
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches,
  )

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return isMobile
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return reduced
}

export function DynamicFrameLayout({
  frames,
  className,
  showFrames = false,
  hoverSize = 7,
  gapSize = 4,
}: DynamicFrameLayoutProps) {
  const isMobile = useIsMobile()
  const reduceMotion = usePrefersReducedMotion()
  const [hoverState, setHoverState] = useState<{ mode: boolean; index: number } | null>(null)
  const hovered = hoverState !== null && hoverState.mode === isMobile ? hoverState.index : null

  const trackSizes = (active: number | null) => {
    if (active === null) return "1fr 1fr"
    return [0, 1]
      .map((i) => (i === active ? `${hoverSize}fr` : `${12 - hoverSize}fr`))
      .join(" ")
  }

  return (
    <div
      className={`relative ${className ?? ""}`}
      style={
        isMobile
          ? {
              display: "grid",
              gridTemplateColumns: "1fr",
              gridAutoRows: "auto",
              gap: `${gapSize}px`,
            }
          : {
              display: "grid",
              gridTemplateRows: trackSizes(hovered === null ? null : Math.floor(hovered / 2)),
              gridTemplateColumns: trackSizes(hovered === null ? null : hovered % 2),
              gap: `${gapSize}px`,
              transition:
                reduceMotion
                  ? "none"
                  : "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
            }
      }
    >
      {frames.map((frame, index) => (
        <div
          key={frame.id}
          className={isMobile ? "relative aspect-square" : "relative"}
          onMouseEnter={() => {
            if (!isMobile) setHoverState({ mode: false, index })
          }}
          onMouseLeave={() => {
            if (!isMobile) setHoverState(null)
          }}
        >
          <FrameComponent
            video={frame.video}
            className="absolute inset-0"
            corner={frame.corner ?? ""}
            edgeHorizontal={frame.edgeHorizontal ?? ""}
            edgeVertical={frame.edgeVertical ?? ""}
            mediaSize={frame.mediaSize ?? 1}
            borderThickness={frame.borderThickness ?? 0}
            borderSize={frame.borderSize ?? 100}
            showFrame={showFrames}
            isActive={!isMobile && hovered === index}
            autoplayVisible={isMobile}
          />
        </div>
      ))}
    </div>
  )
}
