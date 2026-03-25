import React from "react"
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, ChevronRight, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

// Saf Tailwind için Sadeleştirilmiş Menü Öğesi
function ListItem({ title, children, href }) {
  return (
    <li>
      <a
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
      >
        <div className="text-sm font-medium leading-none text-stone-900">{title}</div>
        <div className="line-clamp-2 text-sm text-stone-500 mt-1">{children}</div>
      </a>
    </li>
  )
}

export default function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="font-serif text-2xl font-bold tracking-widest text-emerald-900 cursor-pointer">
          ZANAAT
        </Link>

        {/* MASAÜSTÜ MENÜ (Saf CSS / Hatasız Çalışan Versiyon) */}
        <div className="hidden md:flex items-center space-x-2">

          {/* KOLEKSİYON */}
          <div className="relative group px-3 py-6">
            <Link to="/koleksiyon" className="flex items-center gap-1 text-sm font-medium tracking-wide text-stone-600 group-hover:text-emerald-900 transition-colors">
              KOLEKSİYON
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white border border-stone-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-[9999] rounded-md pointer-events-none group-hover:pointer-events-auto">
              <ul className="grid grid-cols-2 gap-3 p-4">
                <li className="row-span-3 col-span-1">
                  <div className="flex h-full w-full flex-col justify-end rounded-md bg-stone-100 p-6">
                    <div className="mb-2 mt-4 text-lg font-serif text-emerald-900">Özel Seriler</div>
                    <p className="text-sm leading-tight text-stone-500">
                      Usta işi, sertifikalı ve limitli üretim koleksiyonluk tesbihler.
                    </p>
                  </div>
                </li>
                <ListItem href="/koleksiyon" title="Kehribar">Damla ve Sıkma özel seriler.</ListItem>
                <ListItem href="/koleksiyon" title="Oltu Taşı">Erzurum hakiki oltu tesbihler.</ListItem>
                <ListItem href="/koleksiyon" title="Ağaç Grubu">Kuka ve öd ağacı işlemeler.</ListItem>
              </ul>
            </div>
          </div>

          {/* ATÖLYE */}
          <div className="relative group px-3 py-6">
            <Link to="/atolye" className="flex items-center gap-1 text-sm font-medium tracking-wide text-stone-600 group-hover:text-emerald-900 transition-colors">
              ATÖLYE
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-white border border-stone-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-[9999] rounded-md pointer-events-none group-hover:pointer-events-auto">
              <ul className="flex flex-col gap-2 p-4">
                <ListItem href="/atolye" title="Hikayemiz">Zanaatın kökleri ve ustalarımız.</ListItem>
                <ListItem href="/atolye" title="Üretim Süreci">Tezgahımızdan detay kareler.</ListItem>
              </ul>
            </div>
          </div>

          {/* İLETİŞİM */}
          <div className="px-3 py-6">
            <Link to="/iletisim" className="flex items-center text-sm font-medium tracking-wide text-stone-600 hover:text-emerald-900 transition-colors">
              İLETİŞİM
            </Link>
          </div>

        </div>

        {/* SİPARİŞ BUTON */}
        <a
          href={`https://wa.me/905318604398?text=${encodeURIComponent(
            "Merhaba, Zanaat Tesbih koleksiyonunuz hakkında bilgi almak ve sipariş vermek istiyorum."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-900 text-white px-6 py-3 uppercase text-xs tracking-widest hover:bg-emerald-950 transition-colors"
        >
          Sipariş Ver
        </a>

        {/* MOBİL HAMBURGER MENÜ (Risksiz ama Premium Versiyon) */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-stone-900 hover:bg-stone-200/50">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>

            {/* showCloseButton={false} prop'u ile varsayılan kapatıcıyı gizledik. flex flex-col ekledik ki buton en alta yapışsın */}
            <SheetContent side="right" showCloseButton={false} className="bg-stone-50 border-l-stone-200 flex flex-col p-6 w-[85vw] sm:w-[350px]">

              {/* Özel ve Büyük Kapatma Düğmesi */}
              <div className="flex justify-end pt-2 pb-4 border-b border-stone-200/50">
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-stone-600 hover:text-emerald-900">
                    <X className="h-8 w-8" />
                  </Button>
                </SheetClose>
              </div>

              {/* Menü Linkleri (Senin silmek istediğin logo yazısı buraya eklenmedi) */}
              <div className="flex flex-col mt-6 space-y-2">
                <a href="/koleksiyon" className="group flex items-center justify-between py-5 text-2xl font-serif tracking-wide text-stone-800 border-b border-stone-200/50 hover:text-emerald-900 transition-colors">
                  <span>Koleksiyon</span>
                  <ChevronRight className="w-6 h-6 text-stone-400 group-hover:text-emerald-900 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/atolye" className="group flex items-center justify-between py-5 text-2xl font-serif tracking-wide text-stone-800 border-b border-stone-200/50 hover:text-emerald-900 transition-colors">
                  <span>Atölye</span>
                  <ChevronRight className="w-6 h-6 text-stone-400 group-hover:text-emerald-900 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/iletisim" className="group flex items-center justify-between py-5 text-2xl font-serif tracking-wide text-stone-800 border-b border-stone-200/50 hover:text-emerald-900 transition-colors">
                  <span>İletişim</span>
                  <ChevronRight className="w-6 h-6 text-stone-400 group-hover:text-emerald-900 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* mt-auto sayesinde bu div (ve içindeki buton) en alta itilir */}
              <div className="mt-auto mb-6">
                <Button className="w-full bg-emerald-900 text-stone-50 hover:bg-emerald-950 rounded-none tracking-widest uppercase py-7 shadow-md text-sm">
                  Sipariş Ver
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}