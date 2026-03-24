import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Badge } from "@/components/ui/badge"
import { Truck, ShieldCheck, Gem, ArrowRight, MessageCircle } from 'lucide-react'

export default function App() {
  const products = [
    { id: 1, name: "Oltu Taşı Tesbih - 9x12mm", desc: "Arpa Kesim | Gümüş Püskül", price: "₺ 3.150", badge: "Hakiki Oltu", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Ateş Kehribar Tesbih", desc: "Küre Kesim | Alpaka Püskül", price: "₺ 2.850", badge: "Yeni", img: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Kuka Ağacı Tesbih", desc: "Beyzi Kesim | İnce İşçilik", price: "₺ 1.450", badge: "Kargo Bedava", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Damla Kehribar", desc: "Kapsül Kesim | Usta İşi", price: "₺ 6.200", badge: "Sertifikalı", img: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=800&auto=format&fit=crop" }
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      
      {/* 1. Navbar Bileşeni */}
      <Navbar />

      {/* 2. Hero Slider Bileşeni */}
      <Hero />

      {/* 3. Güven Bantları */}
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-600">
          <div className="flex items-center gap-3"><Truck className="w-5 h-5 text-emerald-900" /><span>%100 Ücretsiz Kargo</span></div>
          <div className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-emerald-900" /><span>%100 Orijinal Ürün Garantisi</span></div>
          <div className="flex items-center gap-3"><Gem className="w-5 h-5 text-emerald-900" /><span>Sertifikalı Zanaat ve İşçilik</span></div>
        </div>
      </div>

      {/* 4. Vitrin Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Yeni Koleksiyon</h2>
          <div className="w-16 h-[1px] bg-emerald-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-none bg-stone-200 aspect-square mb-6 border border-stone-200/50">
                <Badge variant="secondary" className="absolute top-4 left-4 z-10 bg-stone-50 text-stone-900 hover:bg-stone-100 rounded-none px-3 py-1 text-xs tracking-widest uppercase shadow-sm">
                  {item.badge}
                </Badge>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg text-stone-900 mb-1">{item.name}</h3>
                <p className="text-sm text-stone-500 mb-4">{item.desc}</p>
                <div className="flex justify-between items-center border-t border-stone-200 pt-4">
                  <span className="font-medium text-stone-900 tracking-wide">{item.price}</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-900 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
            <button className="border border-stone-300 text-stone-600 px-8 py-3 uppercase text-xs tracking-widest hover:bg-stone-100 transition-colors">Daha Fazla Gör</button>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h3 className="font-serif text-2xl text-stone-50 mb-6 tracking-widest">ZANAAT</h3>
                <p className="text-sm font-light max-w-sm">Geleneksel tesbih zanaatını, modern estetikle buluşturuyoruz. Her bir habbe, usta ellerde hayat bulur.</p>
            </div>
            <div className="flex flex-col space-y-3 text-sm">
                <h4 className="text-stone-50 tracking-widest uppercase mb-3">Bağlantılar</h4>
                <a href="#" className="hover:text-stone-50 transition-colors">Koleksiyon</a>
                <a href="#" className="hover:text-stone-50 transition-colors">Atölye</a>
                <a href="#" className="hover:text-stone-50 transition-colors">İletişim</a>
            </div>
            <div className="flex flex-col space-y-3 text-sm">
                <h4 className="text-stone-50 tracking-widest uppercase mb-3">İletişim</h4>
                <p>Ahmet Yılmaz Caddesi, No:42 Ankara</p>
                <p>info@zanaattesbih.com</p>
            </div>
        </div>
      </footer>

      {/* 6. Sabit WhatsApp Butonu */}
      <a href="#" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-white text-stone-900 text-xs px-3 py-2 rounded shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Sipariş Ver
        </span>
      </a>

    </div>
  )
}