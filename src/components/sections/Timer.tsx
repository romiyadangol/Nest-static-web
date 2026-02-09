'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const valentinesDay = new Date('2026-02-14T23:59:59').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = valentinesDay - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
      setIsLoaded(true)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <div className="text-center">
          <div className="text-xl md:text-3xl font-bold text-blue-300">00</div>
          <div className="text-xs md:text-sm text-gray-600">Days</div>
        </div>
        <div className="text-gray-400">:</div>
        <div className="text-center">
          <div className="text-xl md:text-3xl font-bold text-blue-300">00</div>
          <div className="text-xs md:text-sm text-gray-600">Hrs</div>
        </div>
        <div className="text-gray-400">:</div>
        <div className="text-center">
          <div className="text-xl md:text-3xl font-bold text-blue-300">00</div>
          <div className="text-xs md:text-sm text-gray-600">Min</div>
        </div>
        <div className="text-gray-400">:</div>
        <div className="text-center">
          <div className="text-xl md:text-3xl font-bold text-blue-300">00</div>
          <div className="text-xs md:text-sm text-gray-600">Sec</div>
        </div>
      </div>
    )
  }

  const formatNumber = (num: number) => String(num).padStart(2, '0')

  return (
  <div className="flex flex-col items-center">     
    <Image
        src="/Valentine.png"
        alt="Valentine's Special Offer"
        width={180}
        height={60}
        className="drop-shadow-md"
        priority
      />
      
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{formatNumber(timeLeft.days)}</div>
          <div className="text-xs md:text-sm text-gray-600 font-medium">Days</div>
        </div>
        <div className="text-gray-400 text-2xl md:text-3xl">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{formatNumber(timeLeft.hours)}</div>
          <div className="text-xs md:text-sm text-gray-600 font-medium">Hrs</div>
        </div>
        <div className="text-gray-400 text-2xl md:text-3xl">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-xs md:text-sm text-gray-600 font-medium">Min</div>
        </div>
        <div className="text-gray-400 text-2xl md:text-3xl">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-blue-600">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-xs md:text-sm text-gray-600 font-medium">Sec</div>
        </div>
      </div>
    </div>
  )
}
