import React from 'react'
import { Star } from 'lucide-react'

export default function GoogleReviews() {
  const reviews = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      date: "2 hafta önce",
      avatar: "https://i.pravatar.cc/150?img=11",
      text: "Erzurum hakiki oltu tesbih siparişim elime ulaştı. İşçilik gerçekten muazzam, habbelerin simetrisi kusursuz. Hızlı kargo için teşekkürler.",
      productName: "Erzurum Oltu Taşı",
    },
    {
      id: 2,
      name: "Mehmet Demir",
      date: "1 ay önce",
      avatar: "https://i.pravatar.cc/150?img=14",
      text: "Babam için ateş kehribar aldım, kutusu ve paketlemesi çok özenliydi. İçinden çıkan orijinallik sertifikası güven veriyor.",
      productName: "Ateş Kehribar",
    },
    {
      id: 3,
      name: "Mustafa Kaya",
      date: "3 ay önce",
      avatar: "https://i.pravatar.cc/150?img=33",
      text: "Kuka ağacı tesbihin dokusu ve çekimi harika. Gün geçtikçe renginin oturacağını bilmek heyecan verici. Esnaflıkları çok iyi.",
      productName: "Kuka Ağacı",
    },
    {
      id: 4,
      name: "Caner Şahin",
      date: "4 ay önce",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Koleksiyonum için damla kehribar arıyordum, Zanaat'tan aldığım parçadan çok memnunum. Püskül detayı efsane.",
      productName: "Damla Kehribar",
    }
  ];

  const tags = ["işçilik", "kargo", "orijinal", "kehribar", "kalite", "oltu", "hediye", "iletişim"];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK VE GENEL PUAN */}
        <div className="flex flex-col items-center justify-center text-center mb-8 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            Google'da Müşteri Yorumları
          </h2>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-stone-900">4.9</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-sm text-stone-500 ml-2">50+ değerlendirme</span>
          </div>

          <button className="hidden md:block absolute right-0 top-0 bg-stone-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
            Yorum Bırak
          </button>
        </div>

        {/* FİLTRE ETİKETLERİ (CHIPS) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 border border-stone-200 bg-white text-stone-600 rounded-full text-sm hover:border-emerald-900 hover:text-emerald-900 cursor-pointer transition-colors shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* YORUM KARTLARI (Mobilde kaydırılabilir, Masaüstünde Grid) */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 gap-6 no-scrollbar">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="min-w-[300px] md:min-w-0 bg-white p-6 rounded-xl border border-stone-200 shadow-sm snap-center flex flex-col justify-between"
            >
              <div>
                {/* Kart Üst (Kişi ve Google Logosu) */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{review.name}</h4>
                      <p className="text-xs text-stone-500">{review.date}</p>
                    </div>
                  </div>
                  {/* Saf Google SVG İkonu */}
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Yıldızlar */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>

                {/* Yorum Metni */}
                <p className="text-sm text-stone-700 leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Görseldeki gibi ürün inceleme butonu */}
              <button className="w-full py-2 bg-stone-100 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-200 transition-colors">
                {review.productName}
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Tailwind'de Scrollbar Gizleme Sınıfı Eki (Style bloğu olarak) */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  )
}