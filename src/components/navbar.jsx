import React from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-serif text-2xl font-bold tracking-widest text-emerald-900 cursor-pointer">
          ZANAAT
        </div>

        {/* SHADCN MENÜ */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-stone-600 hover:text-emerald-900 font-medium tracking-wide">
                  KOLEKSİYON
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-stone-50 border border-stone-100">
                    <li className="row-span-3">
                      <div className="flex h-full w-full flex-col justify-end rounded-md bg-stone-100 p-6">
                        <div className="mb-2 mt-4 text-lg font-serif text-emerald-900">Özel Seriler</div>
                        <p className="text-sm leading-tight text-stone-500">
                          Usta işi, sertifikalı ve limitli üretim koleksiyonluk tesbihler.
                        </p>
                      </div>
                    </li>
                    <ListItem title="Kehribar Tesbihler" href="#">Damla ve Sıkma Kehribar</ListItem>
                    <ListItem title="Oltu Taşı" href="#">Erzurum Hakiki Oltu</ListItem>
                    <ListItem title="Ağaç Grubu" href="#">Kuka ve Öd Ağacı</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-stone-600 hover:text-emerald-900 font-medium tracking-wide">
                  ATÖLYE
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 bg-stone-50 border border-stone-100">
                    <ListItem title="Hikayemiz" href="#">Zanaatın kökleri</ListItem>
                    <ListItem title="Üretim Süreci" href="#">Tezgahımızdan kareler</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-stone-600 hover:text-emerald-900 transition-colors cursor-pointer">
                  İLETİŞİM
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* AKSİYON BUTONU */}
        <Button className="bg-emerald-900 text-stone-50 hover:bg-emerald-950 rounded-none tracking-widest uppercase text-xs px-8 py-6 hidden md:flex">
          Sipariş Ver
        </Button>
      </div>
    </nav>
  )
}

// Menü içindeki linkler için ufak bir yardımcı component
const ListItem = ({ title, children, ...props }) => {
  return (
    <li>
      <a
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
        {...props}
      >
        <div className="text-sm font-medium leading-none text-stone-900">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-stone-500 mt-1">{children}</p>
      </a>
    </li>
  )
}