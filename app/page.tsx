import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Slider from '@/components/Slider'
import VaraText from '@/components/VaraText'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='p-4 max-w-[1170px] mx-auto' >
     <Nav />
     <VaraText text={''} />
     <Slider />
     <Footer />
    </main>
  )
}
