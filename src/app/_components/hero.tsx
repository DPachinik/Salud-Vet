import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import heroDog from '../../../public/hero-dog.webp'
import heroCat from '../../../public/cat-hero.png'
import Image from 'next/image'


export function Hero(){
  return (
    <section className='bg-[#E84C3D] text-white overflow-hidden relative'>

      <div>
          <Image
          src={heroDog}
          alt='foto del Perro'
          fill
          sizes='100vw'
          priority
          className='object-contain opacity-50 md:hidden'
          />
          <div
          className='absolute inset-0 bg-black opacity-50 md:hidden'
          ></div>
      </div>


      <div className='container mx-auto pt-8 pb-8 md:pb-0 px-4 relative'>

        <article className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          
          <div className='space-y-6'>

            <h1 
            className='text-3xl md:text-4xl font-bold leading-10'
            data-aos="fade-up"
            >Tu Mascota merece cuidado, cariño y atención especial.</h1>

            <p 
            className='lg:text-lg'
            data-aos="fade-right"
            >
              Ofecemos los mejores servicios para garantizar el bienestar y la felicidad de tu amigo de cuatro patas.
            </p>

            <a 
            href='#'
            className='bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2'>
              <WhatsappLogo className='w-5 h-5' />
              Contacto via WhatsApp
            </a>

            <div className=' mt-8'>
              <p className='text-sm mb-4'>
                <b className='bg-black text-white px-2 rounded-md'>5%</b> de descuento en la primera visita.
              </p>

              <div className='flex mt-4'>
                <div className='w-32 hidden md:block'>
                  <Image 
                  src={heroCat}
                  alt='imagen del gato'
                  quality={100}
                  className='object-fill'
                  />
                </div>
              </div>
            </div>

          </div>

          <div className='hidden md:block h-full relative '
          data-aos="fade-left"
          >
            <Image 
            src={heroDog} 
            alt='foto del Perro'
            className='object-contain'
            fill
            sizes='(max-width:768px) 0vw, 50vw'
            quality={100}
            priority
            />
          </div>

        </article>

      </div>

      

    </section>
  )
}

