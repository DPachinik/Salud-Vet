'use client'
import useEmblaCarousel from "embla-carousel-react"
import { CarTaxiFront, ChevronLeft, ChevronRight, Clock, Hotel, Scissors, Syringe } from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'



const services = [
    {
      title: "Baño y Peluquería",
      description: "Incluye baño con productos específicos para el tipo de pelaje y piel del animal, corte de uñas, limpieza de oídos y peluquería personalizada (higiénica o estilizada).",
      duration: "1h",
      price: "50 Gs.",
      icon: <Scissors />,
      linkText: 'Hola, vi en el sitio sobre Baño y peluquería y me gustaría más información.'
    },
    {
      title: "Consulta Veterinaria",
      description: "Ofrece atención clínica básica o especializada para cuidar la salud del animal. Incluye diagnóstico de enfermedades y aplicación de vacunas obligatorias.",
      duration: "1h",
      price: "45 Gs.",
      icon: <Syringe />,
      linkText: 'Hola, vi en el sitio sobre Consulta veterinaria y me gustaría más información.'
    },
    {
      title: "Taxi para Mascotas",
      description: "Servicio de transporte para llevar y recoger a las mascotas en el petshop, clínicas veterinarias u otros lugares. Ideal para tutores que no tienen tiempo o transporte adecuado para movilizar a sus animales.",
      duration: "2h",
      price: "80 Gs.",
      icon: <CarTaxiFront />,
      linkText: 'Hola, vi en el sitio sobre Taxi para mascotas y me gustaría más información.'
    },
    {
      title: "Hotel para Mascotas",
      description: "Servicio de hospedaje para mascotas, ideal cuando los tutores necesitan viajar o ausentarse por algunos días. Las mascotas se alojan en espacios seguros y cómodos.",
      duration: "1h",
      price: "60 Gs.",
      icon: <Hotel />,
      linkText: 'Hola, vi en el sitio sobre Hotel para mascotas y me gustaría más información.'
    },
  ]

export function Services (){

    
      
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-white py-16">

            <div className="container mx-auto px-4 space-y-6">

                <h2 className="text-4xl font-bold ">SERVICIOS</h2>

                <div className="relative ">

                    <div className="overflow-hidden " ref={emblaRef} >

                        <div className="flex ">
                            {services.map((service, index)=>(
                               <div key={index} className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(100%/3)]  px-3">
                                
                                    <article className="bg-[#1e293b] text-white  rounded-2xl p-6 space-y-4 h-full flex flex-col ">
                                        <div className="flex-1 flex items-start justify-between">

                                            <div className="flex gap-3">
                                                <span className="text-3xl">{service.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-3xl my-1 select-none">{service.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{service.description}</p>
                                                </div>  
                                            </div>
                                            

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">

                                            <div className="flex gap-2 items-center text-sm">
                                                <Clock className=" w-4 h-4"/>
                                                <span>{service.duration}</span>
                                            </div>

                                            <a
                                                target='_blank'
                                                href={`https://wa.me/556799998800?text=Hola! vengo desde la página web y me gustaría tener mas información sobre ${service.title}`}
                                                className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
                                            >
                                                <WhatsappLogo className="w-5 h-5" />
                                                Entrar en Contacto</a>
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