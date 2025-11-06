"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "I sold my car within 24 hours through ReCash! No agent or dealer needed. The process was incredibly smooth and transparent.",
    author: "Ade",
    location: "Lagos",
    rating: 5,
  },
  {
    quote: "As a buyer on ReCash Buyer Network, I get high-value assets from sellers at fair prices before they hit the open market. ReCash handles everything with professionalism.",
    author: "Ngozi",
    location: "Abuja",
    rating: 5,
  },
  {
    quote: "During my medical emergency, ReCash helped me get instant cash without any hassle. ReCash is the best asset liquitator in Nigeria. Highly recommend!",
    author: "Chioma",
    location: "Port Harcourt",
    rating: 5,
  },
  {
    quote:
      "Sold my jewelry and precious metal within hours and got paid immediately, no stories. ReCash is truly a lifesaver for quick liquidity needs.",
    author: "Tunde",
    location: "Ibadan",
    rating: 5,
  },
  {
    quote:
      "I purchased an equipment through ReCash at better prices than anywhere else. The verification process gave me complete confidence.",
    author: "Amara",
    location: "Ikoyi",
    rating: 5,
  },
  {
    quote:
      "ReCash made selling my property so much easier than traditional methods. The entire process took less time and stress. I recommend them any day!",
    author: "Emeka",
    location: "Enugu",
    rating: 5,
  },
]

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full py-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Real Stories from Real Users</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how ReCash has helped hundreds of Nigerians turn assets into instant liquidity.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-8 border-border/50 hover:border-accent/50 transition-all flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground font-medium mb-6 flex-1 leading-relaxed">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="space-y-1 pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
