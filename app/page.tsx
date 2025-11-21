"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PhotoGallery } from "@/components/photo-gallery"
import { RsvpSection } from "@/components/rsvp-section"
import { OurStory } from "@/components/our-story"
import { ChevronDown, MapPin, Clock, Heart } from "lucide-react"

export default function WeddingInvitation() {
  const [guestName, setGuestName] = useState<string>("")

  // Get guest name from URL parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const nome = params.get("nome")
    if (nome) {
      setGuestName(nome)
    }
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("our-story")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Invitation */}
      <section className="min-h-screen bg-secondary flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Decorative floral elements - top left */}
        <div className="absolute top-8 left-8 opacity-20 pointer-events-none">
          <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Calla lily 1 */}
            <path
              d="M75 180 Q 75 140, 65 100 Q 60 80, 55 60 Q 50 40, 48 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M48 20 Q 30 25, 25 45 Q 22 65, 40 75 Q 55 82, 65 70 Q 70 60, 65 45 Q 62 30, 48 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            {/* Tulip */}
            <path
              d="M95 190 Q 95 150, 92 110 Q 90 90, 88 70"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M88 70 Q 75 65, 75 50 Q 75 35, 88 30 M88 70 Q 95 65, 100 50 Q 102 35, 95 30 M88 70 Q 88 55, 95 45"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
          </svg>
        </div>

        {/* Decorative floral elements - top right */}
        <div className="absolute top-8 right-8 opacity-20 pointer-events-none">
          <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Calla lily 2 */}
            <path
              d="M75 180 Q 75 140, 85 100 Q 90 80, 95 60 Q 100 40, 102 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M102 20 Q 120 25, 125 45 Q 128 65, 110 75 Q 95 82, 85 70 Q 80 60, 85 45 Q 88 30, 102 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            {/* Tulip */}
            <path
              d="M55 190 Q 55 150, 58 110 Q 60 90, 62 70"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M62 70 Q 75 65, 75 50 Q 75 35, 62 30 M62 70 Q 55 65, 50 50 Q 48 35, 55 30 M62 70 Q 62 55, 55 45"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
          </svg>
        </div>

        {/* Decorative floral elements - bottom left */}
        <div className="absolute bottom-8 left-8 opacity-20 pointer-events-none hidden md:block">
          <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Small calla lily */}
            <path
              d="M60 140 Q 60 110, 55 80 Q 52 65, 50 50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M50 50 Q 35 53, 32 65 Q 30 77, 43 83 Q 53 87, 60 78 Q 63 70, 60 60 Q 58 52, 50 50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
          </svg>
        </div>

        {/* Decorative floral elements - bottom right */}
        <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none hidden md:block">
          <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Small calla lily */}
            <path
              d="M60 140 Q 60 110, 65 80 Q 68 65, 70 50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M70 50 Q 85 53, 88 65 Q 90 77, 77 83 Q 67 87, 60 78 Q 57 70, 60 60 Q 62 52, 70 50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
          {/* Personalized greeting */}
          {guestName && (
            <p className="text-2xl md:text-3xl text-foreground font-serif animate-fade-in-up">Olá, {guestName} 💕</p>
          )}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight text-balance">
            Ana &amp; Thiago
          </h1>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-pretty max-w-2xl mx-auto">
              Temos uma notícia linda para compartilhar com você:
            </p>
            <p className="text-3xl md:text-4xl font-serif text-foreground">Nós vamos casar!</p>
          </div>

          <Button
            onClick={scrollToNextSection}
            size="lg"
            className="mt-12 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full"
          >
            Continuar
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-foreground/40" />
        </div>
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* RSVP Section */}
      <RsvpSection />

      {/* Information Section */}
      <section id="info" className="bg-secondary py-20 px-4 relative overflow-hidden">
        {/* Flores decorativas da seção Informações - Esquerda */}
        <div className="absolute top-10 left-0 md:left-10 opacity-10 pointer-events-none">
           <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M75 180 Q 75 140, 65 100 Q 60 80, 55 60 Q 50 40, 48 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M48 20 Q 30 25, 25 45 Q 22 65, 40 75 Q 55 82, 65 70 Q 70 60, 65 45 Q 62 30, 48 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
          </svg>
        </div>

        {/* Flores decorativas da seção Informações - Direita */}
        <div className="absolute bottom-10 right-0 md:right-10 opacity-10 pointer-events-none">
           {/* CORRIGIDO: Removida a rotação para ficar de pé */}
           <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M75 180 Q 75 140, 85 100 Q 90 80, 95 60 Q 100 40, 102 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
            <path
              d="M102 20 Q 120 25, 125 45 Q 128 65, 110 75 Q 95 82, 85 70 Q 80 60, 85 45 Q 88 30, 102 20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-16">Informações</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Date and Time */}
            <div className="bg-card p-8 rounded-lg shadow-md space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif text-card-foreground mb-2">Data e Horário</h3>
                  <p className="text-card-foreground/80 leading-relaxed">
                    16 de Janeiro de 2026
                    <br />
                    às 19:00
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card p-8 rounded-lg shadow-md space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif text-card-foreground mb-2">Local - Mãos na massa</h3>
                  <p className="text-card-foreground/80 leading-relaxed mb-3">
                    R. Araribóia, 2035 
                    <br />
                    Parque do Som
                    <br />
                    Pato Branco - PR
                  </p>
                  <a
                    href="https://maps.app.goo.gl/CSmgBpwxmA4nqdDq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-1"
                  >
                    Ver no mapa →
                  </a>
                </div>
              </div>
            </div>

            {/* Dress Code */}
            <div className="bg-card p-8 rounded-lg shadow-md md:col-span-2">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif text-card-foreground mb-2">Dress Code</h3>
                  <p className="text-card-foreground/80 leading-relaxed">
                    Esporte Fino
                    <br />
                    <span className="text-sm text-muted-foreground">
                      Sugerimos tons fortes e alegres para celebrar conosco!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 relative overflow-hidden">
        {/* Flores decorativas - Canto Inferior Esquerdo (Brotando para cima) */}
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none w-24 md:w-32">
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
          </svg>
        </div>

        {/* Flores decorativas - Canto Inferior Direito (CORRIGIDO: Agora brotando para cima) */}
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-24 md:w-32">
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
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <p className="text-2xl md:text-3xl font-serif">Com amor, Thiago & Ana ❤️</p>
          <p className="text-sm text-primary-foreground/70">Feito com carinho para nossos convidados</p>
        </div>
      </footer>
    </main>
  )
}