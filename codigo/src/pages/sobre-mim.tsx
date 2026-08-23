import { useTranslation } from "react-i18next"

export function SobreMim() {
  const { t } = useTranslation()

  return (
    <div className="flex h-dvh w-full items-center justify-center bg-zinc-900">
      <h1 className="text-4xl text-zinc-100">{t("pages.sobreMim.titulo")}</h1>
    </div>
  )
}
