"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "./theme-provider"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { theme } = useTheme()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Waitlist signup:", { name, email })
    setIsSubmitted(true)
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setName("")
      setEmail("")
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`border rounded-2xl p-8 max-w-md w-full mx-4 ${
              theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                Join the Waitlist
              </h2>
              <button
                onClick={onClose}
                className={`transition-colors ${
                  theme === "light" ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white"
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500 ${
                      theme === "light"
                        ? "bg-white border-gray-300 text-gray-900"
                        : "bg-gray-800 border-gray-600 text-white"
                    }`}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500 ${
                      theme === "light"
                        ? "bg-white border-gray-300 text-gray-900"
                        : "bg-gray-800 border-gray-600 text-white"
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                >
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className={`text-xl font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  You're on the list!
                </h3>
                <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                  We'll notify you when DMI.AI launches.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
