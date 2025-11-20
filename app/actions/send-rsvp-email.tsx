"use server"

import { Resend } from "resend"

export async function sendRSVPEmail(formData: {
  name: string
  phone: string
  numberOfPeople: string
  attending: string
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return {
        success: false,
        error: "Configuração de email não encontrada. Adicione RESEND_API_KEY nas variáveis de ambiente.",
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { name, phone, numberOfPeople, attending } = formData

    const { data, error } = await resend.emails.send({
      from: "Casamento Thiago & Ana <onboarding@resend.dev>",
      to: "thiago.lanzarin28@gmail.com",
      subject: `RSVP Casamento: ${name} - ${attending === "sim" ? "Confirmado" : "Não comparecerá"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1E2A38; border-bottom: 2px solid #1E2A38; padding-bottom: 10px;">
            Nova Confirmação de Presença
          </h2>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #F8F7F3; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Telefone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Quantidade de Pessoas:</strong> ${numberOfPeople}</p>
            <p style="margin: 10px 0;">
              <strong>Comparecimento:</strong> 
              <span style="color: ${attending === "sim" ? "#22c55e" : "#ef4444"}; font-weight: bold;">
                ${attending === "sim" ? "✅ Confirmado" : "❌ Não poderá comparecer"}
              </span>
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Enviado automaticamente pelo site do casamento
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return {
        success: false,
        error: "Erro ao enviar email. Tente novamente.",
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("[v0] Error sending RSVP email:", error)
    return {
      success: false,
      error: "Erro ao processar confirmação. Tente novamente.",
    }
  }
}
