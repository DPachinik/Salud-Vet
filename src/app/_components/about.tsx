import Image from 'next/image'
import DogAbout from '../../../public/about-1.png'
import CatAbout from '../../../public/about-2.png'
import { Check } from 'lucide-react'
import { WhatsappLogo, MapPin } from '@phosphor-icons/react/dist/ssr'



export function About(){
    return(
        <section className='bg-[#FDF6ec] py-16'>

            <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                <div 
                className='relative'
                data-aos="fade-down-right"
                >

                    <div className='relative h-[400px] w-full rounded-3xl overflow-hidden'>
                        <Image 
                        src={DogAbout}
                        alt='foto de perros'
                        quality={100}
                        priority
                        className='object-cover hover:scale-110 duration-200'
                        fill
                        />
                    </div>

                    <div className='absolute  right-4 -bottom-8 w-40 h-40 rounded-lg border-4 border-white'>
                        <Image 
                        src={CatAbout}
                        alt='foto de gato'
                        quality={100}
                        priority
                        className='object-cover'
                        fill
                        />
                    </div>

                </div>

               

                <div 
                className='space-y-6 mt-10 '
                data-aos="fade-down-left">

                    <h2 className='text-4xl font-bold'>SOBRE</h2>

                    <p>
                        Hasta que uno no ha amado a un animal, una parte del alma permanece dormida. En nuestro centro veterinario, creemos firmemente en este vínculo humano-animal, y trabajamos para facilitar el acceso a servicios y productos que promuevan el bienestar integral físico, mental y emocional de tus mascotas. Con una propuesta basada en la medicina veterinaria moderna, un equipo altamente capacitado y un sistema de atención y compra seguro, estás en manos confiables.
                    </p>

                    <ul className='space-y-4'>

                        <li className='flex items-center gap-2'>
                            <Check className='text-red-500'/>
                            Abierto desde el 2010
                        </li>

                        <li className='flex items-center gap-2'>
                            <Check className='text-red-500'/>
                            Equipo con grandes profesionales.
                        </li>

                        <li className='flex items-center gap-2'>
                            <Check className='text-red-500'/>
                            Calidad es nuestra mayor prioridad
                        </li>
                    </ul>

                    <div className='flex gap-2'>
                        
                        <a 
                        href='#'
                        target='blank'
                        className='bg-red-500 text-white flex gap-2 w-fit rounded-lg px-2 items-center justify-center'
                        >
                        <WhatsappLogo className='w-5 h-5 text-white' /> 
                        Contacto via WhatsApp
                        </a>

                        <a 
                        href='#'
                        target='blank'
                        className=' text-black flex gap-2 w-fit items-center justify-center'
                        >
                        <MapPin className='w-5 h-5 text-black' /> 
                        Ubicación de la Clínica
                        </a>
                    </div>

                </div>

            </div>
            

        </section>
    )
}