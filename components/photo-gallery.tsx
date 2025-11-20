"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const photos = [
    "/JantaFundue.JPG",
    "/PraiaBella.JPG",
    "/NeveGramado.JPG",
    "/Praiabeijo.JPG",
    "/Janta.JPG",
    "/PasseioTreno.JPG",
    "/0e5cd564-9674-4e22-9465-e3c04ab1fa39.JPG",
  ]

  return (
    <section id="gallery" className="bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-16">Galeria de Fotos</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedPhoto(index)}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <img src={photo || "/placeholder.svg"} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selectedPhoto] || "/placeholder.svg"}
            alt={`Foto ${selectedPhoto + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
