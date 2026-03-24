import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a href="#" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group">
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 bg-white text-stone-900 text-xs px-3 py-2 rounded shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Sipariş Ver
      </span>
    </a>
  )
}