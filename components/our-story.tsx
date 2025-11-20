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
    <section id="our-story" className="bg-card py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
