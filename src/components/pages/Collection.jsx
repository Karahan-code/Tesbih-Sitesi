import React from 'react'
import { Filter, ArrowRight } from 'lucide-react'

export default function Collection() {
  // Demo amaçlı genişletilmiş ürün listesi
  const products = [
    { id: 1, name: "Oltu Taşı Tesbih", desc: "Arpa Kesim | Gümüş Püskül", price: "₺ 3.150", badge: "Hakiki Oltu", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Ateş Kehribar", desc: "Küre Kesim | Alpaka Püskül", price: "₺ 2.850", badge: "Yeni", img: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Kuka Ağacı", desc: "Beyzi Kesim | İnce İşçilik", price: "₺ 1.450", badge: "Kargo Bedava", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Damla Kehribar", desc: "Kapsül Kesim | Usta İşi", price: "₺ 6.200", badge: "Sertifikalı", img: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Sıkma Kehribar", desc: "Şalgam Kesim | Gümüş İşlemeli", price: "₺ 4.100", badge: "Özel Seri", img: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "Zar Kehribar", desc: "Küp Kesim | Sistemli", price: "₺ 5.500", badge: "Sınırlı Stok", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop" },
  ]

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık */}
        <div className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="font-serif text-4xl text-stone-900 mb-4 tracking-wide">Tüm Koleksiyon</h1>
          <p className="text-stone-500 font-light max-w-2xl">Usta ellerden çıkan, her biri kendi hikayesine sahip özel tasarım tesbihlerimizi keşfedin.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* SOL: FİLTRELEME SÜTUNU (Sidebar) */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="flex items-center gap-2 mb-6 text-stone-900 font-serif text-xl border-b border-stone-200 pb-4">
              <Filter className="w-5 h-5 text-emerald-900" />
              <h2>Filtreler</h2>
            </div>

            {/* Kategori Filtresi */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">Kategoriler</h3>
              <div className="space-y-3">
                {["Damla Kehribar", "Sıkma Kehribar", "Ateş Kehribar", "Oltu Taşı", "Ağaç Grubu"].map((cat, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-emerald-900 cursor-pointer" />
                    <span className="text-sm text-stone-600 group-hover:text-emerald-900 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fiyat Filtresi */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">Fiyat Aralığı</h3>
              <div className="space-y-3">
                {["1.000₺ - 2.500₺", "2.500₺ - 5.000₺", "5.000₺ - 10.000₺", "10.000₺ ve üzeri"].map((price, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-emerald-900 cursor-pointer" />
                    <span className="text-sm text-stone-600 group-hover:text-emerald-900 transition-colors">{price}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-stone-200 text-stone-700 hover:bg-stone-300 py-3 text-xs tracking-widest uppercase transition-colors">
              Filtreleri Temizle
            </button>
          </aside>

          {/* SAĞ: ÜRÜN VİTRİNİ (Grid) */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6 text-sm text-stone-500">
              <span>Toplam <b>{products.length}</b> ürün listeleniyor</span>
              <select className="bg-transparent border-none outline-none text-stone-700 cursor-pointer font-medium">
                <option>En Yeniler</option>
                <option>Fiyata Göre Artan</option>
                <option>Fiyata Göre Azalan</option>
              </select>
            </div>

            {/* Ürün Kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((item) => (
                <div key={item.id} className="group cursor-pointer flex flex-col">
                  <div className="relative overflow-hidden bg-stone-200 aspect-square mb-4 border border-stone-200/50">
                    <div className="absolute top-4 left-4 z-10 bg-stone-50 text-stone-900 px-3 py-1 text-xs tracking-widest uppercase shadow-sm">
                      {item.badge}
                    </div>
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-serif text-lg text-stone-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-stone-500 mb-4">{item.desc}</p>
                    <div className="mt-auto flex justify-between items-center border-t border-stone-200 pt-4">
                      <span className="font-medium text-stone-900 tracking-wide">{item.price}</span>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-900 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Sayfalama (Pagination) Örneği */}
            <div className="mt-16 flex justify-center items-center gap-2">
              <button className="w-10 h-10 border border-emerald-900 bg-emerald-900 text-white flex items-center justify-center text-sm">1</button>
              <button className="w-10 h-10 border border-stone-200 text-stone-600 hover:bg-stone-100 flex items-center justify-center text-sm transition-colors">2</button>
              <button className="w-10 h-10 border border-stone-200 text-stone-600 hover:bg-stone-100 flex items-center justify-center text-sm transition-colors">3</button>
            </div>
          </main>

        </div>
      </div>
    </div>
  )
}