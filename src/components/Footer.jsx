import React from 'react'
import { MessageCircle, ShoppingBag, MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-stone-900 text-stone-400 pt-32 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* LOGO VE HAKKIMIZDA (Görseldeki gibi sol blok) */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-serif text-3xl text-stone-50 mb-4 tracking-widest">ZANAAT</h3>
          <p className="text-sm font-light leading-relaxed mb-8">
            Geleneksel tesbih zanaatını, modern estetikle buluşturuyoruz. Her bir habbe, usta ellerde hayat bulur.
          </p>
          
          {/* SOSYAL MEDYA & SATIŞ BUTONLARI */}
          <div className="flex items-center gap-3">
            {/* Dolap Butonu (Çanta İkonu) */}
            <a href="#" className="p-2.5 bg-stone-800 rounded-md hover:bg-[#11B283] hover:text-white transition-all duration-300" title="Dolap Mağazamız">
              <ShoppingBag className="w-5 h-5" />
            </a>
            
            {/* Instagram Butonu (Saf SVG - Kütüphane Çökme Riski Yok) */}
            <a href="#" className="p-2.5 bg-stone-800 rounded-md hover:bg-[#E1306C] hover:text-white transition-all duration-300" title="Instagram">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" 
                className="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            {/* WhatsApp Butonu */}
            <a href="#" className="p-2.5 bg-stone-800 rounded-md hover:bg-[#25D366] hover:text-white transition-all duration-300" title="WhatsApp İletişim">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* HIZLI BAĞLANTILAR (Görseldeki "Quick Links" kısmı) */}
        <div className="flex flex-col space-y-4 text-sm md:ml-8">
          <h4 className="text-stone-50 tracking-widest uppercase mb-2 font-medium">Bağlantılar</h4>
          <a href="/koleksiyon" className="hover:text-stone-50 transition-colors flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-emerald-900 group-hover:text-emerald-500 transition-colors" />
            Koleksiyon
          </a>
          <a href="/atolye" className="hover:text-stone-50 transition-colors flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-emerald-900 group-hover:text-emerald-500 transition-colors" />
            Atölye
          </a>
          <a href="/iletisim" className="hover:text-stone-50 transition-colors flex items-center gap-2 group">
            <ChevronRight className="w-4 h-4 text-emerald-900 group-hover:text-emerald-500 transition-colors" />
            İletişim
          </a>
        </div>

        {/* İLETİŞİM (Görseldeki gibi ikonlu iletişim listesi) */}
        <div className="flex flex-col space-y-5 text-sm col-span-1 md:col-span-2">
          <h4 className="text-stone-50 tracking-widest uppercase mb-1 font-medium">Bize Ulaşın</h4>
          
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-900 shrink-0 mt-0.5" />
            <p className="leading-relaxed">Ahmet Yılmaz Caddesi, No:42<br/>Çankaya, Ankara</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-emerald-900 shrink-0" />
            <p>+90 555 123 45 67</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-900 shrink-0" />
            <p>info@zanaattesbih.com</p>
          </div>
        </div>

      </div>

      {/* EN ALT TELİF HAKKI BANTI */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
        <p>© 2026 Zanaat Tesbih. Tüm hakları saklıdır.</p>
        <p className="mt-2 md:mt-0">Türkiye'de Zanaatla Üretildi.</p>
      </div>
    </footer>
  )
}