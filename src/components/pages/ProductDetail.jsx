import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, Truck } from 'lucide-react'
import { productsData } from '../../data/products' // Verimizi çekiyoruz

export default function ProductDetail() {
  // URL'den gelen ürün ID'sini alıyoruz (örneğin /urun/1 ise id=1 olur)
  const { id } = useParams();
  
  // ID'ye göre veri tabanımızdan (products.js) o ürünü buluyoruz
  const product = productsData.find(p => p.id === parseInt(id));

  // Eğer URL'ye yanlış bir ID yazılırsa gösterilecek ekran
  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-stone-50">
        <h2 className="font-serif text-3xl text-stone-900 mb-4">Ürün Bulunamadı</h2>
        <Link to="/koleksiyon" className="text-emerald-900 underline underline-offset-4">Koleksiyona Geri Dön</Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-12 md:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geri Dön Butonu */}
        <Link to="/koleksiyon" className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-900 transition-colors mb-10 text-sm tracking-wide uppercase">
          <ArrowLeft className="w-4 h-4" /> Koleksiyona Dön
        </Link>

        {/* Ana Grid Yapısı (Senin istediğin dizilim) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* SOL KOLON: Görsel -> İsim -> Fiyat -> Buton */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Ürün Görseli */}
            <div className="bg-stone-200 border border-stone-200/50 aspect-square w-full relative mb-8">
              <div className="absolute top-4 left-4 z-10 bg-stone-50 text-stone-900 px-3 py-1 text-xs tracking-widest uppercase shadow-sm">
                {product.badge}
              </div>
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* İsim ve Açıklama */}
            <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">{product.name}</h1>
            <p className="text-stone-500 text-sm tracking-wide mb-6">{product.desc}</p>
            
            {/* Fiyat */}
            <div className="text-3xl text-emerald-900 font-medium mb-8">
              {product.price}
            </div>

{/* Tablo Altı Butonlar */}
<div className="flex flex-col sm:flex-row gap-4 mt-8">
  
  {/* WHATSAPP SİPARİŞ BUTONU */}
  <a 
    href={`https://wa.me/905318604398?text=${encodeURIComponent(
      `Merhaba, web sitenizden *${product.name}* (${product.price}) ürününüzü inceledim. Bu tesbih için sipariş oluşturmak istiyorum, yardımcı olabilir misiniz?`
    )}`}
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-emerald-900 text-white px-8 py-4 uppercase text-xs tracking-widest hover:bg-emerald-950 transition-colors flex-1 text-center flex items-center justify-center gap-2 shadow-md"
  >
    {/* WhatsApp İkonu (İsteğe bağlı, Lucide'da MessageCircle kullanabilirsin veya düz bırakabilirsin) */}
    Sipariş Ver
  </a>

  {/* Tümünü Gör Butonu */}
  <Link 
    to="/koleksiyon" 
    className="border border-stone-300 text-stone-700 px-8 py-4 uppercase text-xs tracking-widest hover:bg-stone-100 transition-colors text-center flex-1 flex items-center justify-center"
  >
    Tümünü Gör
  </Link>
</div>
            
            {/* Güven Rozetleri */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-stone-500 border-t border-stone-200 pt-6">
               <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-emerald-900"/> Ücretsiz Kargo</div>
               <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-900"/> Orijinal Ürün</div>
            </div>
          </div>

          {/* SAĞ KOLON: Ürün Detayları ve Özellik Tablosu */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-200 pb-4">Ürün Hikayesi</h2>
            <p className="text-stone-600 leading-relaxed font-light mb-12">
              {product.longDesc}
            </p>

            <h2 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-200 pb-4">Teknik Özellikler</h2>
            
            {/* Sahibinden Tarzı Çizgili Tablo */}
            <div className="bg-white border border-stone-200 rounded-sm">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row sm:items-center py-4 px-6 text-sm ${index !== Object.keys(product.specs).length - 1 ? 'border-b border-stone-100' : ''}`}
                >
                  <div className="sm:w-1/3 font-medium text-stone-500 mb-1 sm:mb-0">{key}</div>
                  <div className="sm:w-2/3 text-stone-900">{value}</div>
                </div>
              ))}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}