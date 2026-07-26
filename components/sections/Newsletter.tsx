'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-24 md:py-32 bg-black border-t border-zinc-900">
      <div className="max-w-xl mx-auto px-6 md:px-12 text-center">
        <p className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-4">
          Stay in the loop
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
          First to the drop.
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-10">
          Sign up and get early access to new drops, exclusive discounts, and KSSD news before anyone else.
        </p>

        {submitted ? (
          <div className="border border-zinc-800 text-gray-500 text-[11px] tracking-[0.3em] uppercase py-5">
            YOU'RE ON THE LIST ✓
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-zinc-950 border border-zinc-800 border-r-0 text-white text-sm px-5 py-4 outline-none placeholder-zinc-700 focus:border-zinc-600 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-black text-[11px] tracking-[0.3em] uppercase font-bold px-6 md:px-8 py-4 hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  )
}