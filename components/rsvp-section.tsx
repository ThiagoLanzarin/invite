"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2 } from "lucide-react"
import { sendRSVPEmail } from "@/app/actions/send-rsvp-email"

type RsvpStatus = "pending" | "confirmed" | "declined"

export function RsvpSection() {
  const [status, setStatus] = useState<RsvpStatus>("pending")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      numberOfPeople: formData.get("numberOfPeople") as string,
      attending: formData.get("attending") as string,
    }

    try {
      const result = await sendRSVPEmail(data)

      if (result.success) {
        setStatus(data.attending === "sim" ? "confirmed" : "declined")
      } else {
        setError(result.error || "Erro ao enviar confirmação")
      }
    } catch (err) {
      console.error("[v0] Error submitting RSVP:", err)
      setError("Erro ao enviar confirmação. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="rsvp" className="bg-primary text-primary-foreground py-20 px-4 relative overflow-hidden">
      {/* Flores decorativas - Canto Inferior Esquerdo (Brotando para cima) */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none w-32 md:w-48">
         <svg viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M75 180 Q 75 140, 65 100 Q 60 80, 55 60 Q 50 40, 48 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
            <path
              d="M48 20 Q 30 25, 25 45 Q 22 65, 40 75 Q 55 82, 65 70 Q 70 60, 65 45 Q 62 30, 48 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
             <path
              d="M95 190 Q 95 150, 92 110 Q 90 90, 88 70"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
            <path
              d="M88 70 Q 75 65, 75 50 Q 75 35, 88 30 M88 70 Q 95 65, 100 50 Q 102 35, 95 30 M88 70 Q 88 55, 95 45"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
          </svg>
      </div>

      {/* Flores decorativas - Canto Inferior Direito (Brotando para cima) */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-32 md:w-48">
         <svg viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M75 180 Q 75 140, 85 100 Q 90 80, 95 60 Q 100 40, 102 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
            <path
              d="M102 20 Q 120 25, 125 45 Q 128 65, 110 75 Q 95 82, 85 70 Q 80 60, 85 45 Q 88 30, 102 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
             <path
              d="M55 190 Q 55 150, 58 110 Q 60 90, 62 70"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
            <path
              d="M62 70 Q 75 65, 75 50 Q 75 35, 62 30 M62 70 Q 55 65, 50 50 Q 48 35, 55 30 M62 70 Q 62 55, 55 45"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-foreground"
              fill="none"
            />
          </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {status === "pending" ? (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-balance">
              Você vai estar com a gente nesse momento especial?
            </h2>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 text-left pt-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary-foreground text-base">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="bg-primary-foreground text-primary border-primary-foreground/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary-foreground text-base">
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="bg-primary-foreground text-primary border-primary-foreground/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="numberOfPeople" className="text-primary-foreground text-base">
                  Quantidade de Pessoas *
                </Label>
                <Input
                  id="numberOfPeople"
                  name="numberOfPeople"
                  type="number"
                  min="1"
                  required
                  placeholder="1"
                  className="bg-primary-foreground text-primary border-primary-foreground/20"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-primary-foreground text-base">Confirmação de Comparecimento *</Label>
                <RadioGroup name="attending" required className="space-y-3">
                  <div className="flex items-center space-x-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <RadioGroupItem 
                      value="sim" 
                      id="sim" 
                      className="border-primary-foreground text-primary-foreground [&_svg]:fill-current" 
                    />
                    <Label htmlFor="sim" className="text-primary-foreground cursor-pointer flex-1">
                      Sim, confirmo presença!
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <RadioGroupItem 
                      value="nao" 
                      id="nao" 
                      className="border-primary-foreground text-primary-foreground [&_svg]:fill-current" 
                    />
                    <Label htmlFor="nao" className="text-primary-foreground cursor-pointer flex-1">
                      Não vou poder ir
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-primary-foreground p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 text-lg rounded-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Confirmação"
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {status === "confirmed" ? (
              <>
                <div className="text-6xl mb-4">❤️</div>
                <h2 className="text-4xl md:text-5xl font-serif">Que bom!</h2>
                <p className="text-2xl text-primary-foreground/90">Ficamos muito felizes em ter você conosco!</p>
                <p className="text-lg text-primary-foreground/80">Sua confirmação foi enviada com sucesso!</p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">😢</div>
                <h2 className="text-4xl md:text-5xl font-serif">Poxa...</h2>
                <p className="text-2xl text-primary-foreground/90">Vamos sentir sua falta!</p>
                <p className="text-lg text-primary-foreground/80">Sua resposta foi enviada com sucesso.</p>
              </>
            )}

            <Button
              onClick={() => setStatus("pending")}
              variant="outline"
              className="mt-8 border-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-primary-foreground"
            >
              Alterar resposta
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}