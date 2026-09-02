export interface EmailPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface EmailResult {
  success: boolean
  message?: string
}

const ACCESS_KEY = "776453b9-0628-4908-aa1a-cda96b3a7f62"
const WEB3FORMS_URL = "https://api.web3forms.com/submit"

export async function sendEmail(
  payload: EmailPayload,
  t: (key: string) => string,
): Promise<EmailResult> {
  const formData = new FormData()
  formData.append("access_key", ACCESS_KEY)
  formData.append("name", payload.name)
  formData.append("email", payload.email)
  formData.append("subject", payload.subject)
  formData.append("message", payload.message)
  formData.append("botcheck", "")

  let response: Response
  try {
    response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      body: formData,
    })
  } catch {
    return { success: false, message: t("pages.contatos.erroConexao") }
  }

  const data = await response.json().catch(() => null)
  return {
    success: Boolean(data?.success),
    message: data?.message,
  }
}
