import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-stone-50 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK KISMI */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-wide">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-stone-600 text-lg font-light leading-relaxed">
            Koleksiyonlarımız hakkında detaylı bilgi almak, özel sipariş vermek veya atölyemizi ziyaret etmek için bize her zaman ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* SOL TARAF: İLETİŞİM FORMU */}
          <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm rounded-sm">
            <h3 className="font-serif text-2xl text-emerald-900 mb-8">Mesaj Gönderin</h3>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-md text-sm outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all"
                    placeholder="Örn: Onur Karahan"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-stone-700">Telefon Numaranız</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-md text-sm outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-700">E-Posta Adresiniz</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-md text-sm outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all"
                  placeholder="ornek@mail.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">Mesajınız</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-md text-sm outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all resize-none"
                  placeholder="Size nasıl yardımcı olabiliriz?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-emerald-900 text-stone-50 hover:bg-emerald-950 rounded-none tracking-widest uppercase text-sm px-8 py-5 transition-colors shadow-md mt-4 font-medium"
              >
                Mesajı İlet
              </button>
            </form>
          </div>

          {/* SAĞ TARAF: BİLGİLER VE HARİTA */}
          <div className="flex flex-col h-full space-y-12">
            
            {/* İletişim Bilgileri Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-200/50 rounded-full text-emerald-900 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1 tracking-wide">Atölye Adresi</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">Ahmet Yılmaz Caddesi, No:42<br />Çankaya, Ankara</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-200/50 rounded-full text-emerald-900 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1 tracking-wide">Telefon</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">+90 555 123 45 67<br />+90 312 456 78 90</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-200/50 rounded-full text-emerald-900 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1 tracking-wide">E-Posta</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">info@zanaattesbih.com<br />destek@zanaattesbih.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-200/50 rounded-full text-emerald-900 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1 tracking-wide">Çalışma Saatleri</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">Pzt - Cmt: 09:00 - 19:00<br />Pazar: Kapalı</p>
                </div>
              </div>
            </div>

            {/* Google Haritalar (Konum) */}
            <div className="flex-1 w-full min-h-[300px] bg-stone-200 rounded-sm overflow-hidden border border-stone-200 shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1009941926674!2d32.8597419!3d39.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa791e36787%3A0x6b2e1e0a811802a8!2zQ8O2bWFrw6fEsS0gQW5rYXJh!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Atölye Konumu"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}