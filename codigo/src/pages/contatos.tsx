import { useTranslation } from "react-i18next"

export function Contatos() {
  const { t } = useTranslation()

  return (
    <div className="flex h-dvh w-full items-center justify-center bg-zinc-900">
      <h1 className="text-4xl text-zinc-100">{t("pages.contatos.titulo")}</h1>
    </div>
  )
}
