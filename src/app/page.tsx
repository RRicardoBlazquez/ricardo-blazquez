import Card from '@/components/Card'
import GitHubButton from '@/components/GitHubButton'
import LinkedInButton from '@/components/LinkedInButton'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Information from '@/components/information/Information'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-wrap w-full flex-col items-center justify-between my-12">
      <section className='min-h-screen h-full w-full flex items-center justify-center'>
        <div className='flex flex-row flex-wrap w-full h-full sm:h-80 items-center gap-y-8'>
          <picture className='w-full sm:w-1/2 flex items-center justify-center'>
            <video width="320" height="320" autoPlay muted preload="none">
              <source src="/videoPortafolio.mp4" type="video/mp4" />
            </video>
          </picture>
          <div className=' w-full h-auto sm:w-1/2 sm:h-80  flex flex-col items-center'>
            <Image src={"/ricardoPerfil.jpg"} alt='Foto mia' width={901} height={1600} className='w-80 h-auto sm:h-60 sm:w-auto' />
            <nav className='flex gap-x-2 mt-8'>
              <GitHubButton />
              <LinkedInButton />
            </nav>
          </div>
        </div>
      </section>
      <section id='proyectos' className='min-h-screen h-auto w-full py-20 flex flex-col items-center'>
        <h2 className='py-20 text-sm font-semibold leading-6'>Mis Proyectos</h2>
        <div className='flex flex-row flex-wrap items-center '>
          <Card />
        </div>
      </section>
      <section id='about' className='min-h-screen flex flex-col items-center'>
        <h2 className='py-20 text-sm font-semibold leading-6'>SOBRE MI</h2>
        <About />
      </section>
      <section id='contact' className='min-h-screen flex flex-col items-center py-20 '>
        <Information />
      </section>

    </main>
  )
}
