"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  hours?: number
}

export function CountdownTimer({ hours = 10 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <div className="bg-red-600/90 text-white px-3 py-2 rounded-lg flex items-center gap-2 animate-pulse">
      <span className="text-lg">⏰</span>
      <div className="flex items-center gap-1 font-mono font-bold">
        <span className="bg-black/30 px-2 py-1 rounded text-sm">{formatTime(timeLeft.hours)}</span>
        <span>:</span>
        <span className="bg-black/30 px-2 py-1 rounded text-sm">{formatTime(timeLeft.minutes)}</span>
        <span>:</span>
        <span className="bg-black/30 px-2 py-1 rounded text-sm">{formatTime(timeLeft.seconds)}</span>
      </div>
      <span className="text-xs font-semibold">RESTAM</span>
    </div>
  )
}
