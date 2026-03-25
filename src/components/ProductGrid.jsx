import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'

// ÖNEMLİ: productsData'yı oluşturduğun dosya yolunu buraya doğru girmelisin.
// Örneğin: '../data/products' veya nerede tutuyorsan.
import { productsData } from '../data/products'

export default function ProductGrid() {
  // Sadece ilk 8 ürünü alıyoruz ki 4'lü grid yapısı simetrik ve tam dolsun.
  const featuredProducts = productsData.slice(0, 8);

  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Yeni Koleksiyon</h2>
        <div className="w-16 h-[1px] bg-emerald-900 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {featuredProducts.map((item) => (
          <Link to={`/urun/${item.id}`} key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-none bg-stone-200 aspect-square mb-6 border border-stone-200/50">
              
              {/* Badge içeriği doluysa göster, boşsa render etme */}
              {item.badge && (
                <Badge variant="secondary" className="absolute top-4 left-4 z-10 bg-stone-50 text-stone-900 hover:bg-stone-100 rounded-none px-3 py-1 text-xs tracking-widest uppercase shadow-sm">
                  {item.badge}
                </Badge>
              )}
              
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
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link to="/koleksiyon" className="border border-stone-300 text-stone-600 px-8 py-3 uppercase text-xs tracking-widest hover:bg-stone-100 transition-colors">
            Daha Fazla Gör
        </Link>
      </div>
    </section>
  )
}