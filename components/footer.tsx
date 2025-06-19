"use client"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"
import { useTheme } from "./theme-provider"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`border-t ${theme === "light" ? "bg-gray-50 border-gray-200" : "bg-gray-900 border-gray-800"}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className={`text-2xl font-bold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              DMI<span className="text-red-600">.AI</span>
            </div>
            <p className={`mb-6 max-w-md ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              Empowering businesses with AI-first design solutions. From brand kits to launch-ready digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`transition-colors ${
                  theme === "light" ? "text-gray-500 hover:text-red-500" : "text-gray-400 hover:text-red-500"
                }`}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  theme === "light" ? "text-gray-500 hover:text-red-500" : "text-gray-400 hover:text-red-500"
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  theme === "light" ? "text-gray-500 hover:text-red-500" : "text-gray-400 hover:text-red-500"
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  theme === "light" ? "text-gray-500 hover:text-red-500" : "text-gray-400 hover:text-red-500"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
            theme === "light" ? "border-gray-200" : "border-gray-800"
          }`}
        >
          <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
            © 2024 DMI.AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className={`text-sm transition-colors ${
                theme === "light" ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`text-sm transition-colors ${
                theme === "light" ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white"
              }`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
