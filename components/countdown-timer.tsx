"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  hours?: number
}

export function CountdownTimer({ hours = 10 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: Math.floor(hours),
    minutes: Math.round((hours % 1) * 60),
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
    <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-md border border-primary/20 text-white px-4 py-2 rounded-2xl shadow-[0_0_15px_-5px_var(--primary)] animate-pulse">
      <Clock className="w-4 h-4 text-primary" />
      <div className="flex items-center gap-1.5 font-mono text-base font-bold tracking-tighter">
        <div className="flex flex-col items-center">
          <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{formatTime(timeLeft.hours)}</span>
        </div>
        <span className="text-primary/50 animate-pulse">:</span>
        <div className="flex flex-col items-center">
          <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{formatTime(timeLeft.minutes)}</span>
        </div>
        <span className="text-primary/50 animate-pulse">:</span>
        <div className="flex flex-col items-center">
          <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
      <div className="h-4 w-px bg-white/10 mx-1" />
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">OFFER ENDS</span>
    </div>
  )
}
