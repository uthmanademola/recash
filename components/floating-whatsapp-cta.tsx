"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FloatingWhatsAppCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="https://wa.me/message/3YJNKYUMTE32K1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", delay: 0.3 }}
    >
      <motion.div
        className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg px-4 py-3 cursor-pointer transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
        <motion.span
          className="font-semibold whitespace-nowrap text-sm md:text-base"
          initial={{ opacity: 0, width: 0 }}
          animate={isHovered ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
          transition={{ duration: 0.3 }}
        >
          Send Us A Message
        </motion.span>
      </motion.div>
    </motion.a>
  )
}
