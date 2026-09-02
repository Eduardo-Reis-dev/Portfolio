import * as React from "react"
import { cn } from "@/lib/utils"

interface Profile {
  id: string
  label: string
  icon: string | React.ReactNode
}

interface ProfileIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

interface ProfileSelectorProps {
  profiles: Profile[]
  onProfileSelect: (id: string) => void
  className?: string
}

export function ProfileIcon({ className, children, ...props }: ProfileIconProps) {
  return (
    <div
      className={cn(
        "flex h-20 w-20 items-center justify-center overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function ProfileSelector({ profiles, onProfileSelect, className }: ProfileSelectorProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6", className)}>
      {profiles.map((profile) => (
        <button
          key={profile.id}
          type="button"
          onClick={() => onProfileSelect(profile.id)}
          className="group flex w-40 flex-col items-center gap-4 rounded-2xl border border-zinc-700 bg-zinc-900/80 p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          {typeof profile.icon === "string" ? (
            <ProfileIcon className="ring-1 ring-zinc-700 transition-transform group-hover:scale-105">
              <img
                src={profile.icon}
                alt={profile.label}
                className="h-full w-full object-cover"
              />
            </ProfileIcon>
          ) : (
            profile.icon
          )}
          <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
            {profile.label}
          </span>
        </button>
      ))}
    </div>
  )
}