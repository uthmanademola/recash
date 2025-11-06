"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Users, Heart } from "lucide-react"

export default function WhatsAppCTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Join The Community</h2>

          <div>
            <p className="text-lg text-white/90 mb-6">
              Join the largest community of distress Sellers and Buyers in Nigeria. The process is simple. We are
              available on WhatsApp 24/7 to assist you at anytime.
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6 py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5 text-white" />
              <span className="text-sm">2,800+ Active Buyers</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-sm">24/7 Support Available</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent h-12 group"
              asChild
            >
              <a
                href="https://wa.me/message/3YJNKYUMTE32K1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Send Us A Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
