"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, CheckCircle, Video, Phone } from "lucide-react"
import { useState } from "react"
import { useTheme } from "./theme-provider"

export function ScheduleSection() {
  const { theme } = useTheme()
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedType, setSelectedType] = useState("video")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]
  const callTypes = [
    { id: "video", label: "Video Call", icon: Video },
    { id: "phone", label: "Phone Call", icon: Phone },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Schedule call:", { ...formData, time: selectedTime, type: selectedType })
    // Here you would integrate with a scheduling service like Calendly
    alert("Call scheduled! We'll send you a confirmation email.")
  }

  const benefits = [
    {
      icon: Calendar,
      title: "Personalized Demo",
      description: "See DMI.AI in action with your actual brand assets and requirements.",
    },
    {
      icon: Clock,
      title: "30-Minute Session",
      description: "Quick but comprehensive walkthrough of all features and capabilities.",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Get insights on how to best leverage AI for your specific use case.",
    },
  ]

  return (
    <section id="schedule" className={`py-20 ${theme === "light" ? "bg-gray-50" : "bg-black"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
            Schedule a Demo Call
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Get a personalized demo and see how DMI.AI can transform your brand's digital presence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start space-x-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
                    theme === "light" ? "bg-white/80 border-gray-200/50" : "bg-gray-900/80 border-gray-700/50"
                  }`}
                >
                  <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-red-500/30">
                    <benefit.icon className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                      {benefit.title}
                    </h3>
                    <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>{benefit.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Trust Indicators */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    No commitment required
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Free consultation included
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Instant calendar confirmation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            style={{ transform: "perspective(1000px)" }}
          >
            <div
              className={`backdrop-blur-sm border rounded-2xl p-8 shadow-2xl ${
                theme === "light" ? "bg-white/90 border-gray-200/50" : "bg-gray-900/90 border-gray-700/50"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Call Type Selection */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Call Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {callTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all ${
                          selectedType === type.id
                            ? "border-red-500 bg-red-50 text-red-700"
                            : theme === "light"
                              ? "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                              : "border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        <type.icon size={18} />
                        <span className="font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                        theme === "light"
                          ? "bg-white/80 border-gray-300/50 text-gray-900"
                          : "bg-gray-800/80 border-gray-600/50 text-white"
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                        theme === "light"
                          ? "bg-white/80 border-gray-300/50 text-gray-900"
                          : "bg-gray-800/80 border-gray-600/50 text-white"
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                      theme === "light"
                        ? "bg-white/80 border-gray-300/50 text-gray-900"
                        : "bg-gray-800/80 border-gray-600/50 text-white"
                    }`}
                    placeholder="Your company"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-red-600 text-white shadow-lg"
                            : theme === "light"
                              ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                      theme === "light"
                        ? "bg-white/80 border-gray-300/50 text-gray-900"
                        : "bg-gray-800/80 border-gray-600/50 text-white"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
                  disabled={!selectedTime}
                >
                  Schedule Demo Call
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
