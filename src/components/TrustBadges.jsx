import React from 'react'
import { Truck, ShieldCheck, Gem } from 'lucide-react'

export default function TrustBadges() {
  return (
    <div className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-600">
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-emerald-900" />
          <span>%100 Ücretsiz Kargo</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-900" />
          <span>%100 Orijinal Ürün Garantisi</span>
        </div>
        <div className="flex items-center gap-3">
          <Gem className="w-5 h-5 text-emerald-900" />
          <span>Sertifikalı Zanaat ve İşçilik</span>
        </div>
      </div>
    </div>
  )
}