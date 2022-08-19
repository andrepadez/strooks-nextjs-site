import { useEffect, useState } from 'react'
import { TypeWriter } from 'strooks'
import Image from 'next/image'

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 576) {
      setIsSmallScreen(true)
    }
    setTimeout(() => document.getElementById('section-1').scrollIntoView(), 7 * 1000)
  }, [])
  return (
    <div className="container bg-black white" style={{ overflow: 'hidden' }}>
      <section id="section-0" className="flex center vh-100 bg-black white">
        <div className="text-center flex column gap-5">
          <TypeWriter text={headerText} size={35 * (isSmallScreen ? 0.7 : 1)} time={2} clearBlink />
          <TypeWriter text={middleText} size={25 * (isSmallScreen ? 0.8 : 1)} time={2} delay={2} clearBlink />
          <TypeWriter text={subText} size={20 * (isSmallScreen ? 0.8 : 1)} time={2} delay={4} />
        </div>
      </section>

      <section id="section-1" className="flex column gap-5 center vh-100 bg-black white">
        <h1>everything is easy with Strooks</h1>
        <Image src="/gifs/00-strooks-flash-intro.gif" width={960} height={600} />
      </section>
    </div>
  )
}

const headerText = 'Welcome to the Strooks React Library'
const middleText = 'Hooks and Components for your trickiest usecases'
const subText = 'easy to use so you can focus on your creativity.'
