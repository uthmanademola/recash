"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is ReCash safe to use?",
    answer:
      "Yes, ReCash prioritizes safety with verified transactions, thorough buyer and seller vetting and transparent processes. All transactions are secure and protected from fraud.",
  },
  {
    question: "How long does it take to sell an item?",
    answer:
      "It depends on the asset type. Most transactions are completed within 48-72 hours of matching with a buyer. You can list your asset in just 5 minutes and ReCash handles the rest.",
  },
  {
    question: "What assets can I list for sale?",
    answer:
      "You can list various high-value assets including vehicles, lands, properties, precious metals, jewelry, luxury watches, gadgets, equipment, yachts and art pieces. Check our website for a complete list of acceptable items.",
  },
  {
    question: "Who can buy distress-sale assets?",
    answer:
      "Any verified high-networth individual can become a buyer on ReCash by joining the ReCash Buyer Network. To join the ReCash Buyers Nwtwork, intrested persons need to just fill out a form which takes just 5 munites. Our vetting process ensures all buyers are legitimate and trustworthy.",
  },
  {
    question: "How do I get started?",
    answer:
      'Simply click "Sell Your Asset" or "Buy Distress Assets" to fill out our quick form. Our team will verify your information and connect you with the right matches within 48 hours.',
  },
  {
    question: "What fees does ReCash charge?",
    answer:
      "ReCash charges sellers a small transaction fee to cover the asset inspection and valuation cost before an asset is listed, depending on the transaction type and location. Buyers don't pay anything to join the ReCash Buyers Network or to purchage an asset on distress sales. We believe in transparency, so all fees are clearly disclosed upfront before you proceed.",
  },
  {
    question: "Can I negotiate the price of an asset?",
    answer:
      "Yes, both sellers and buyers can negotiate prices through the transaction manager who is an employee of Bolingo Investment Experts Ltd. We also facilitate negotiation between both parties to ensure they reach an agreement that works for everyone.",
  },
  {
    question: "How does ReCash verify assets?",
    answer:
      "Our team conducts thorough physical verification of all assets before privately sharing sales information with members of the ReCash Buyers Network. We inspect documentation, conduct valuations and ensure all items meet our quality and authenticity standards.",
  },
  {
    question: "What payment methods does ReCash accept?",
    answer:
      "ReCash accepts bank transfers, mobile money and other secure payment methods. All payments are processed safely through Bolingo Investment Experts Ltd to protect both buyers and sellers.",
  },
  {
    question: "Is my personal information secure on ReCash?",
    answer:
      "Absolutely. ReCash uses industry-leading encryption and security protocols to protect all personal information. We never share your data with third parties without your consent.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about ReCash.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-border/50 data-[state=open]:border-accent/50 transition-colors"
                >
                  <AccordionTrigger className="text-foreground font-semibold hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
