import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Gem, Scissors, Sparkles } from 'lucide-react';

export default function Atolye() {
  // Üretim aşamaları verisi
  const steps = [
    {
      icon: <Gem className="w-6 h-6 text-emerald-900" />,
      title: "Malzeme Seçimi",
      desc: "Kehribar, Oltu veya egzotik ağaçlar... Sadece en yüksek kaliteye sahip, çatlak veya kusur barındırmayan ham maddeleri özenle seçiyoruz."
    },
    {
      icon: <Scissors className="w-6 h-6 text-emerald-900" />,
      title: "Kesim ve Şekillendirme",
      desc: "Arpa, küre veya kapsül... Seçilen tasarıma göre ham madde milimetrik hesaplarla kesilir ve ustanın elinde şekil bulur."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-900" />,
      title: "Zımpara ve Cilalama",
      desc: "Her bir habbe, pürüzsüz bir çekim hissi vermesi için sırasıyla farklı zımparalardan geçer ve doğal yağlarla parlatılır."
    },
    {
      icon: <Hammer className="w-6 h-6 text-emerald-900" />,
      title: "Dizim ve Püskül İşçiliği",
      desc: "Habbeler özel iplere dizilir; 925 ayar gümüş, alpaka veya kazaziye püsküllerle tesbihin karakteri tamamlanır."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* 1. GİRİŞ (HERO) BÖLÜMÜ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 tracking-wide">
          Tozlu Tezgahlardan <br className="hidden md:block"/> Cebinizdeki Yoldaşa
        </h1>
        <div className="w-16 h-[1px] bg-emerald-900 mx-auto mb-8"></div>
        <p className="text-stone-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
          Zanaat, sadece taşı şekillendirmek değil; ona bir ruh, bir ses ve bir hikaye katmaktır. 
          Atölyemizde makinelerin soğuk gürültüsü değil, ustanın eğesi ve sabrının ritmi duyulur.
        </p>
      </section>

      {/* 2. HİKAYE VE GÖRSEL BÖLÜMÜ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Sol: Metin */}
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl text-stone-900 mb-6">Ustalığın Doğduğu Yer</h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Yılların getirdiği tecrübe, parmak uçlarındaki nasırlarda gizlidir. Atölyemize giren her bir taş parçası, neye dönüşeceğini fısıldar gibidir. Bizim işimiz sadece o fısıltıyı dinlemek ve fazlalıkları yontmaktır.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Geleneksel Türk tesbih sanatını yaşatırken, modern tasarımları da es geçmiyoruz. Sistemli takımlar, gümüş çakımlar ve kişiye özel tasarımlarla her bir tesbihin tek ve benzersiz olmasını sağlıyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
                <div>
                  <div className="text-3xl font-serif text-emerald-900 mb-2">20+</div>
                  <div className="text-sm text-stone-500 uppercase tracking-widest">Yıllık Tecrübe</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-emerald-900 mb-2">100%</div>
                  <div className="text-sm text-stone-500 uppercase tracking-widest">El İşçiliği</div>
                </div>
              </div>
            </div>

            {/* Sağ: Görsel */}
            <div className="order-1 md:order-2 relative">
              {/* Arkadaki yeşil dekoratif kutu */}
              <div className="absolute -inset-4 bg-emerald-900/10 -z-10 translate-x-4 translate-y-4 hidden md:block"></div>
              {/* Usta/Atölye Görseli (Buraya atölye veya usta ellerinin bir fotoğrafını koymalısın) */}
              <img 
                src="../../src/images/atolye-usta.png" 
                alt="Tesbih Ustası Çalışırken" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. ÜRETİM AŞAMALARI BÖLÜMÜ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-stone-900 mb-4">Bir Tesbihin Serüveni</h2>
          <p className="text-stone-500">Sabırla işlenen dört temel aşama.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-stone-100 p-8 border border-stone-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-900/10 flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">{step.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION (Koleksiyona Yönlendirme) */}
      <section className="bg-stone-900 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-white mb-6">Bu Emeği Avuçlarınızda Hissedin</h2>
          <p className="text-stone-400 mb-10">Usta ellerden çıkmış, her biri tek ve benzersiz koleksiyonumuzu inceleyin.</p>
          <Link to="/koleksiyon" className="inline-block bg-emerald-900 text-white px-8 py-4 uppercase text-sm tracking-widest hover:bg-emerald-800 transition-colors shadow-lg">
            Koleksiyona Git
          </Link>
        </div>
      </section>

    </div>
  );
}