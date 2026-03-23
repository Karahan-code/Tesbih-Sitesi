# 📿 Premium Tesbih Katalog ve Vitrin Projesi

Bu proje, geleneksel tesbih zanaatını modern, şık ve minimalist bir web arayüzüyle sunmayı hedefleyen bir dijital katalog uygulamasıdır. Ödeme sistemi bulunmamakta olup, sipariş süreci özel bir form üzerinden WhatsApp'a entegre edilmiştir.

## 🚀 Kullanılan Teknolojiler
* **Frontend:** React.js, Tailwind CSS
* **UI Kütüphanesi:** Shadcn UI
* **Araçlar:** Swiper.js (Slider), Lucide React (İkonlar)

## 🎨 Tasarım Sistemi ve Kimlik (Konsept: Gelenek ve Mermer)
Proje, temizlik ve şeffaflık hissi veren butik bir açık tema (Light Theme) üzerine inşa edilmiştir.

### Renk Paleti
* **Ana Arka Plan (Zemin):** Taş/mermer hissiyatı veren uçuk krem/gri. `bg-stone-50` (#fafaf9).
* **Vurgu Rengi (Butonlar/Detaylar):** Gelenekselliği temsil eden koyu zümrüt yeşili (`bg-emerald-900` / #064e3b) veya çok koyu lacivert (`bg-slate-900`).
* **Metinler:** Göz yormayan kömür grisi. Başlıklar ve ana metinler için `#1c1917` (`text-stone-900`).

### Tipografi
Geleneksel zanaatı modern web ile harmanlamak için Serif ve Sans-Serif fontlar dengeli kullanılmıştır:
* **Başlıklar (Hero, Ürün Adları):** *Playfair Display*, *Merriweather* veya *Cinzel* (Usta işi, ağır ve asil bir duruş için).
* **Paragraflar ve Butonlar (Açıklamalar, Fiyatlar):** *Inter*, *Roboto* veya *Montserrat* (Yüksek okunabilirlik ve modern görünüm için).

### UI/UX Tasarım Prensipleri
* **Çizgi Kullanımı:** Ürün kartlarını ayırmak için çok ince, zarif, opaklığı düşürülmüş 1px çizgiler (`border border-slate-800/10` gibi) kullanılmıştır.
* **Negatif Boşluk (Whitespace):** Lüks hissiyatı artırmak için öğeler arasında devasa boşluklar bırakılmıştır. Grid aralıklarında `gap-8` / `gap-12`, bölümler arası mesafelerde `py-24` / `py-32` tercih edilmiştir.
* **Zarif Hover Efektleri:** Ürün görsellerini saran kapsayıcılarda `overflow-hidden` kullanılarak, üzerine gelindiğinde resmi yavaşça yakınlaştıran (`hover:scale-105 duration-700 ease-in-out`) makro inceleme hissiyatı veren animasyonlar eklenmiştir.
* **Minimalist Yönlendirmeler:** Fiyatın yanında zarif ok ikonları (`ArrowRight`) kullanılarak butik algısı korunmuştur.

## 📂 Sayfa Mimarisi (5 Ana Sayfa)

### 1. Ana Sayfa (Vitrin)
* **Navbar:** Sola dayalı logo, sağa dayalı menü linkleri ("Atölye", "İletişim" vb.) ve belirgin bir CTA (Aksiyon) butonu. Shadcn Navigation Menu ile kurgulanmış yapı.
* **Hero Slider:** Ekranı kaplayan Swiper.js slider. Sol tarafta başlık, sağ tarafta ürün görseli.
* **Vitrin Grid:** En popüler ürünlerin listelendiği 4'lü kart yapısı. Kart köşelerinde "Orijinal", "Kargo Bedava" gibi Shadcn Badge'ler.
* **Yorumlar Slider:** İşletmenin Google yorumlarının sergilendiği, hover (üzerine gelme) durumunda duran slider.
* **Footer:** Koyu renkli, site içi linkleri ve sosyal medya ikonlarını barındıran alt bilgi.
* **Sabit (Floating) WhatsApp Butonu:** Sayfanın sağ alt köşesinde sürekli görünür iletişim kanalı.

### 2. Ürün Detay Sayfası
* **Görsel Galeri:** Tesbihin makro çekim fotoğrafları ve üretim anına ait kısa videolar.
* **Teknik Tablo:** Habbe ölçüsü, imame uzunluğu, püskül madeni gibi koleksiyoner detayları.
* **Güven Bantları:** Ürün açıklamasının hemen altında %100 Orijinal, İade Garantisi gibi rozetler.
* **Aksiyon:** Kullanıcıyı doğrudan "Sipariş Ver" sayfasına yönlendiren buton.

### 3. Sipariş Ver Sayfası
* **Sipariş Formu:** Kullanıcıdan Ad, Soyad, Adres ve sipariş notu alan basit ve şık bir form.
* **WhatsApp Entegrasyonu:** Form doldurulup butona basıldığında, girilen bilgileri ve ürün adını formatlayarak işletmenin WhatsApp hattına otomatik mesaj olarak aktaran yapı.

### 4. Atölye Sayfası
* **Marka Hikayesi:** Zanaatın, usta işçiliğinin ve kullanılan malzemelerin kalitesinin anlatıldığı kurumsal metinler.
* **Üretim Süreci:** Atölyeden kareler veya videolar barındıran görsel ağırlıklı prestij alanı.

### 5. İletişim Sayfası
* **İletişim Bilgileri:** Telefon, e-posta ve açık adres bilgileri.
* **Harita Entegrasyonu:** İşletmenin Google Haritalar konumu.
* **İletişim Formu:** (Opsiyonel) Kullanıcıların genel soruları için mail gönderen basit bir iletişim formu.