import LottieAnimation from '@/components/Animation/LottieAnimation/LottieAnimation'
import EventCard from '@/components/Events/EventCard'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/HeroSection/Hero'
import Slider from '@/components/Slider/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <EventCard />
      <Slider />
      <Footer />
    </>
  )
}
