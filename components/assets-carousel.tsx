"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

const assets = [
  {
    name: "Cars",
    icon: "🚗",
    description:
      "Including luxury vehicles, sports cars, SUVs and high-value automobiles. We accept well-maintained vehicles with clear ownership documents.",
  },
  {
    name: "Lands",
    icon: "🏞️",
    description:
      "Including residential plots, commercial land, agricultural land and development sites. Land with clear title deeds and minimal disputes.",
  },
  {
    name: "Residential Property",
    icon: "🏠",
    description:
      "We deal in houses, apartments, condominiums and townhouses. Modern residential spaces in prime locations with complete documentation.",
  },
  {
    name: "Commercial Property",
    icon: "🏢",
    description:
      "This icludes office spaces, retail shops, warehouses and industrial buildings. Income-generating commercial properties with established businesses.",
  },
  {
    name: "Precious Metals",
    icon: "💎",
    description:
      "Including gold jewelry, gold coins, bullion, silver coins, silver jewelry, platinum jewelry and bars. All items must be certified or hallmarked.",
  },
  {
    name: "Valuable Jewelries",
    icon: "👑",
    description:
      "Including diamond rings, necklaces, bracelets, earrings and designer pieces. Luxury jewelry with authentic certificates of authenticity.",
  },
  {
    name: "Luxury Watches",
    icon: "⌚",
    description:
      "Including Rolex, Omega, Patek Philippe and other premium watch brands. Authentic timepieces with original documentation and certificates.",
  },
  {
    name: "High-end Gadgets",
    icon: "📱",
    description:
      "Including latest smartphones, tablets, laptops and gaming consoles. Premium electronics in excellent condition with original packaging.",
  },
  {
    name: "Equipments",
    icon: "⚙️",
    description:
      "Including professional equipment (medical, lab or photography gear), power tools, construction equipment, industrial machinery and specialized tools.",
  },
  {
    name: "Yachts",
    icon: "⛵",
    description:
      "Including luxury yachts, speedboats, sailboats and motorboats. Well-maintained marine vessels with valid registration and maintenance records.",
  },
  {
    name: "Art Pieces",
    icon: "🎨",
    description:
      "Including original paintings, sculptures, collectibles and limited-edition artworks. Works with provenance documentation and authentication.",
  },
  {
    name: "Super Bikes",
    icon: "🏍️",
    description:
      "Including high-end motorcycles, sports bikes, custom bikes and luxury two-wheelers. Premium bikes from renowned manufacturers in excellent condition.",
  },
]

export default function AssetsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAsset, setSelectedAsset] = useState(null)

  const itemsPerView = 4
  const maxIndex = Math.ceil(assets.length / itemsPerView) - 1

  const next = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const visibleAssets = assets.slice(currentIndex * itemsPerView, currentIndex * itemsPerView + itemsPerView)

  return (
    <section className="w-full py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Premium Assets We Accept</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ReCash specializes in high-value asset liquidation. Explore the categories we handle.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Carousel Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {visibleAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  onClick={() => setSelectedAsset(asset)}
                  className="h-full p-8 border-border/50 hover:border-accent/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer group hover:bg-primary/5"
                >
                  <div className="text-5xl group-hover:scale-110 transition-transform">{asset.icon}</div>
                  <p className="text-center font-semibold text-foreground text-sm">{asset.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Previous assets"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Next assets"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <motion.div
                key={i}
                className={`h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-2"}`}
                onClick={() => setCurrentIndex(i)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAsset(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border rounded-lg p-8 max-w-md w-full shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{selectedAsset.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedAsset.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedAsset(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{selectedAsset.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
