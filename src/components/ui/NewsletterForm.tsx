'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from './Button'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-forest font-medium">
        <Mail className="w-5 h-5" />
        <span>Tack! Du kommer snart få vårt nyhetsbrev.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-light" />
        <input
          type="email"
          required
          placeholder="din@email.se"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
        />
      </div>
      <Button type="submit" variant="accent">
        Prenumerera
      </Button>
    </form>
  )
}
