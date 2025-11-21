"use client"

import { useEffect, useRef, useState } from "react"

export function OurStory() {
  const [isVisible, setIsVisible] = useState([false, false, false])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const stories = [
    {
      title: "Nosso começo",
      text: "Tudo começou lá na escola, entre risadas nos corredores, olhares tímidos e conversas que pareciam não ter fim. Ninguém imaginava que aquela amizade de adolescentes se transformaria em algo tão lindo. Foi o início de uma história que o tempo só fez fortalecer.",
      image: "/JantaFundue.JPG",
    },
    {
      title: "O Tempo Passou",
      text: "Crescemos juntos, dividindo sonhos, conquistas e desafios. O que antes era apenas um amor jovem, virou parceria, cumplicidade e um laço que se fortalece a cada dia. Aprendemos que o amor verdadeiro é construído com paciência, carinho e muita risada compartilhada.",
      image: "/44ddcfaa-a207-4f37-97f9-10623e471078.JPG",
    },
    {
      title: "Nosso amor",
      text: "Hoje, olhando pra trás, é impossível não sorrir ao lembrar de tudo que vivemos. De uma simples amizade nasceu um amor cheio de histórias, memórias e planos. Nosso amor cresceu junto com a gente — e agora, com o coração cheio de alegria, damos o próximo passo dessa linda jornada: vamos nos casar!",
      image: "/Praiabeijo.JPG",
    },
  ]

  return (
    <section id="our-story" className="bg-card py-20 px-4 relative overflow-hidden">
      {/* Flores decorativas - Canto Inferior Esquerdo (Brotando para cima) */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none w-32 md:w-48">
        <svg viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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

      {/* Flores decorativas - Canto Inferior Direito (Agora de pé e na base) */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-32 md:w-48">
        <svg viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-card-foreground mb-16">Nossa História</h2>

        <div className="space-y-20">
          {stories.map((story, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center transition-all duration-1000 ${
                isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex-1">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-card-foreground">{story.title}</h3>
                <p className="text-lg text-card-foreground/80 leading-relaxed text-pretty">{story.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}