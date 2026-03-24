import React from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Resmi dokümantasyondaki yapıyı Vite/React uyumlu hale getirdiğimiz ListItem
function ListItem({ title, children, href, className, ...props }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100 ${className || ""}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-stone-900">{title}</div>
          <div className="line-clamp-2 text-sm text-stone-500 mt-1">{children}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-serif text-2xl font-bold tracking-widest text-emerald-900 cursor-pointer">
          ZANAAT
        </div>

        {/* MASAÜSTÜ MENÜ (Dokümantasyon Birebir Uyarlaması) */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* KOLEKSİYON */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-stone-600 hover:text-emerald-900 font-medium tracking-wide">
                  Koleksiyon
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-stone-50 border-stone-200">
                    <ListItem href="#" title="Damla Kehribar">
                      Usta işi, sertifikalı ve limitli üretim özel seriler.
                    </ListItem>
                    <ListItem href="#" title="Oltu Taşı">
                      Erzurum hakiki oltu tesbih koleksiyonu.
                    </ListItem>
                    <ListItem href="#" title="Kuka Ağacı">
                      İnce işçilikli, kararıkça değerlenen ağaç grubu.
                    </ListItem>
                    <ListItem href="#" title="Özel Tasarımlar">
                      Kişiye özel gümüş ve altın işlemeli modeller.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ATÖLYE */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-stone-600 hover:text-emerald-900 font-medium tracking-wide">
                  Atölye
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 bg-stone-50 border-stone-200">
                    <ListItem href="#" title="Hikayemiz">
                      Zanaatın kökleri ve ustalarımız.
                    </ListItem>
                    <ListItem href="#" title="Üretim Süreci">
                      Tezgahımızdan kareler ve videolar.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* İLETİŞİM (Basit Link) */}
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={`bg-transparent text-stone-600 hover:text-emerald-900 font-medium tracking-wide ${navigationMenuTriggerStyle()}`}>
                  İletişim
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* MASAÜSTÜ BUTON */}
        <div className="hidden md:flex">
          <Button className="bg-emerald-900 text-stone-50 hover:bg-emerald-950 rounded-none tracking-widest uppercase text-xs px-8 py-6">
            Sipariş Ver
          </Button>
        </div>

        {/* MOBİL HAMBURGER MENÜ (Sağdan Açılan Sheet) */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-stone-900">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-stone-50 border-l-stone-200">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl text-emerald-900 text-left mt-6">ZANAAT</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-12 text-lg font-medium tracking-wide text-stone-700">
                <a href="#" className="hover:text-emerald-900 transition-colors border-b border-stone-200 pb-2">Koleksiyon</a>
                <a href="#" className="hover:text-emerald-900 transition-colors border-b border-stone-200 pb-2">Atölye</a>
                <a href="#" className="hover:text-emerald-900 transition-colors border-b border-stone-200 pb-2">İletişim</a>
                <Button className="bg-emerald-900 text-stone-50 hover:bg-emerald-950 rounded-none tracking-widest uppercase text-sm py-6 mt-4">
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