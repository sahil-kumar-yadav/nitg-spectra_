import EventCard from '@/components/Events/EventCard'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/HeroSection/Hero'
import NavBar from '@/components/NavBar/NavBar'
import Slider from '@/components/Slider/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <NavBar/>
    
    <div>
      <Hero/>
      <EventCard/>
      <Slider/>
      Slider
    </div>
    <Footer/>
    {/* //navbar
    //hero section
    //Event
    //slider
    //footer */}
    </>
  )
}
