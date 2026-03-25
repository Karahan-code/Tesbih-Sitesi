import React from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const slides = [
    {
      title: "Zanaatın Damlaları",
      desc: "Doğadan süzülen emek ve hikaye. Usta ellerden geleneksel incelikle şekillenen özel koleksiyon.",
      img: "../src/images/hero3.png"
    },
    {
      title: "Oltunun Asaleti",
      desc: "Erzurum'un kara elması. Her habbesinde alın teri taşıyan hakiki oltu tesbihler.",
      img: "../src/images/hero2.jpg"
    }
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <section className="relative w-full h-[80vh] flex items-center bg-stone-200 overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <img src={slide.img} alt="Slider" className="w-full h-full object-cover opacity-70 mix-blend-multiply" />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="max-w-2xl">
                  <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight">
                    {slide.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>{word} <br/></React.Fragment>
                    ))}
                  </h1>
                  <p className="text-lg md:text-xl text-stone-800 mb-8 max-w-lg font-light">
                    {slide.desc}
                  </p>
                  <Button className="bg-emerald-900 text-stone-50 hover:bg-emerald-950 rounded-none tracking-widest uppercase text-xs px-8 py-6 group">
                    Koleksiyonu Keşfet
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}