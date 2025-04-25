'use client'
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.jpg'
import tutor3 from '../../../public/tutor3.jpg'
import Image from "next/image"

const testimonials = [
    {
      content:
        "¡Desde que empecé a llevar a Luna para el baño y corte aquí, nunca la vi tan feliz! La atención es impecable, los profesionales son súper cuidadosos y siempre dejan a mi peluda linda y perfumada. ¡Recomiendo con los ojos cerrados!",
      author: "Marcos",
      role: "Tutor de Luna (Golden Retriever)",
      image: tutor1,
    },
    {
      content:
        "¡El servicio de hotel para mascotas fue una experiencia increíble! Necesitaba viajar y me quedé tranquila sabiendo que Thor estaba bien cuidado. Recibí fotos y actualizaciones diarias, ¡y volvió a casa súper feliz! Sin duda, el mejor petshop de la región.",
      author: "Raquel",
      role: "Tutor de Thor (Bulldog Francés)",
      image: tutor2,
    },
    {
      content:
        "Mis gatos nunca han disfrutado salir de casa, pero la atención en este petshop marcó la diferencia. El equipo es muy paciente y cuidadoso, y el servicio de baño especializado para felinos fue maravilloso. ¡Ahora sé en quién confiar para cuidarlos!",
      author: "Diego",
      role: "Tutor de Mel y Max",
      image: tutor3,
    },
  ]

export function Testimonials (){

    
      
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-[#FFD449] py-16">

            <div className="container mx-auto px-4 space-y-6">

                <h2 className="text-4xl font-bold text-center mb-12 ">Declaraciones de nuestros clientes</h2>

                <div className="relative max-w-4xl mx-auto ">

                    <div className="overflow-hidden " ref={emblaRef} >

                        <div className="flex mx-auto ">
                            {testimonials.map((testimonial, index)=>(
                               <div key={index} className="flex-[0_0_100%] min-w-0 ] bg-[#] px-3">
                                
                                    <article className="bg-[#1e293b] text-white  rounded-2xl p-6 space-y-4 h-full flex flex-col ">

                                        <div className="flex flex-col justify-center items-center text-center space-y-4">

                                            <div className="relative w-24 h-24 ">
                                                <Image 
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                sizes="50px"
                                                className="object-cover rounded-full"
                                                />
                                            </div>

                                            <p className="text-gray-200">{testimonial.content}</p>

                                            <div>
                                                <p className="font-bold">{testimonial.author}</p>
                                                <p className="text-sm text-gray-400">{testimonial.role}</p>
                                            </div>
                                           

                                        </div>
                                        
                                    </article>

                               </div> 
                            ))}

                        </div>

                    </div>

                    <div>
                        <button 
                        onClick={scrollPrev}
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10  absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                            <ChevronLeft className=" w-6 h-6  text-gray-800" />
                        </button>
                    </div>

                    <div>
                        <button 
                        onClick={scrollNext}
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10  absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                            <ChevronRight className=" w-6 h-6  text-gray-800" />
                        </button>
                    </div>

                </div>

            </div>

        </section>

    )
}