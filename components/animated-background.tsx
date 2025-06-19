"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const gridSize = 30 // Reduced from 40 for tighter spacing
    const boxWidth = gridSize * 3 // Increased from 2 to 3 for longer rectangles
    const boxHeight = gridSize
    const cols = Math.ceil(canvas.width / boxWidth)
    const rows = Math.ceil(canvas.height / boxHeight)

    let wavePosition = -200 // Start above the screen

    const boxes: Array<{ x: number; y: number; glow: number }> = []

    // Initialize boxes
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        boxes.push({
          x: i * boxWidth,
          y: j * boxHeight,
          glow: 0,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move wave downward - increased speed from 2 to 3
      wavePosition += theme === "light" ? 5 : 3

      // Reset wave when it goes off screen
      if (wavePosition > canvas.height + 200) {
        wavePosition = -200
      }

      boxes.forEach((box) => {
        // Calculate distance from wave
        const distanceToWave = Math.abs(box.y - wavePosition)

        // Create wave effect with gradient - reduced wave width from 100 to 70
        let glowIntensity = 0
        const waveWidth = theme === "light" ? 40 : 70
        if (distanceToWave < waveWidth) {
          glowIntensity = (waveWidth - distanceToWave) / waveWidth
          // Add some horizontal wave variation
          const horizontalWave = Math.sin(box.x * 0.01 + wavePosition * 0.02) * 20
          const adjustedDistance = Math.abs(box.y - (wavePosition + horizontalWave))
          if (adjustedDistance < waveWidth) {
            glowIntensity = Math.max(glowIntensity, (waveWidth - adjustedDistance) / waveWidth)
          }
        }

        // In light mode, create a fade-out zone around the hero text area
        let fadeMultiplier = 1
        if (theme === "light") {
          // Define the hero text area (left side of screen, roughly where the text is)
          const heroTextLeft = 0
          const heroTextRight = canvas.width * 0.5 // Left half of screen
          const heroTextTop = canvas.height * 0.2 // Top 20% to bottom 80%
          const heroTextBottom = canvas.height * 0.8

          // Check if box is in the hero text area
          if (box.x >= heroTextLeft && box.x <= heroTextRight && box.y >= heroTextTop && box.y <= heroTextBottom) {
            // Create a smooth fade based on distance from center of text area
            const centerX = (heroTextLeft + heroTextRight) / 2
            const centerY = (heroTextTop + heroTextBottom) / 2
            const distanceFromCenter = Math.sqrt(Math.pow(box.x - centerX, 2) + Math.pow(box.y - centerY, 2))
            const maxDistance = Math.sqrt(Math.pow(heroTextRight - centerX, 2) + Math.pow(heroTextBottom - centerY, 2))

            // Fade out more towards the center, less towards edges
            fadeMultiplier = Math.min(1, distanceFromCenter / (maxDistance * 0.7))
          }
        }

        // Apply fade multiplier to glow intensity
        glowIntensity *= fadeMultiplier

        // Smooth glow transition
        box.glow = box.glow * 0.9 + glowIntensity * 0.1

        // Use the same red as "Intelligent" text gradient for both modes
        const baseAlpha = theme === "light" ? 0.05 : 0.03
        const glowAlpha = theme === "light" ? 0.15 : 0.2
        const alpha = baseAlpha + box.glow * glowAlpha
        const lineWidth = 0.5 + box.glow * 2

        // Use the same red color as "Intelligent" gradient for both light and dark mode
        // "Intelligent" uses: bg-gradient-to-r from-red-500 via-red-600 to-red-700
        // Using red-600 as the middle color: rgb(220, 38, 38)
        ctx.strokeStyle = `rgba(220, 38, 38, ${alpha})`

        ctx.lineWidth = lineWidth
        ctx.strokeRect(box.x, box.y, boxWidth - 2, boxHeight - 2)

        // Add glow effect for bright boxes
        if (box.glow > 0.3) {
          const shadowAlpha = theme === "light" ? 0.1 : 0.1
          ctx.shadowColor = `rgba(220, 38, 38, ${shadowAlpha})`
          ctx.shadowBlur = box.glow * 20
          ctx.strokeRect(box.x, box.y, boxWidth - 2, boxHeight - 2)
          ctx.shadowBlur = 0
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: theme === "light" ? "#f8fafc" : "black" }}
    />
  )
}
