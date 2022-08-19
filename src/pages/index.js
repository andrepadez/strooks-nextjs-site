import { useEffect, useState, useRef } from 'react'
import { TypeWriter, IconMaterial } from 'strooks'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'
import useFullscreen from 'useFullscreen'
import Image from 'next/image'
import Head from 'next/head'
import UseStyleVarsExample from '../Examples/UseStyleVarsExample'

export default function Home() {
  const gifRef = useRef()
  const { fullscreen, isFullscreen, exitFullscreen } = useFullscreen(gifRef)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const originalGifSize = { width: 960, height: 600 }
  const [gifSize, setGifSize] = useState(originalGifSize)

  useEffect(() => {
    if (isFullscreen) {
      const width = window.innerWidth

      const height = (originalGifSize.height * window.innerWidth) / originalGifSize.width
      setGifSize({ width, height })
    } else {
      setGifSize(originalGifSize)
    }
  }, [isFullscreen])

  useEffect(() => {
    if (window.innerWidth < 576) {
      setIsSmallScreen(true)
    }
    setTimeout(() => document.getElementById('section-1').scrollIntoView(), 7 * 1000)
  }, [])

  const { width, height } = gifSize

  return (
    <div className="container bg-black white" style={{ overflow: 'hidden' }}>
      {/* <UseStyleVarsExample /> */}
      <section id="section-0" className="flex center vh-100 bg-black white">
        <div className="text-center flex column gap-5">
          <TypeWriter text={headerText} size={35 * (isSmallScreen ? 0.7 : 1)} time={2} clearBlink />
          <TypeWriter
            text={middleText}
            size={25 * (isSmallScreen ? 0.8 : 1)}
            time={2}
            delay={2}
            clearBlink
          />
          <TypeWriter text={subText} size={20 * (isSmallScreen ? 0.8 : 1)} time={2} delay={4} />
        </div>
      </section>
      <Head>
        <link rel="preload" as="image" href="/gifs/00-strooks-flash-intro.gif" />
      </Head>
      <section
        id="section-1"
        className="flex center gap-5 column text-center relative center vh-100 "
      >
        <h1 className="">everything is easy with Strooks</h1>
        <div ref={gifRef} className="relative">
          {/* {isSmallScreen ? (
            <Image src="/gifs/00-strooks-flash-intro.png" width={550} height={584} />
          ) : ( */}
          <Image src="/gifs/00-strooks-flash-intro.gif" width={width} height={height} />
          {/* )} */}
          <div className="absolute bottom right pr-3 pb-3 scale-15 teal pointer">
            {!isSmallScreen && (
              <h1>
                {isFullscreen ? (
                  <MdFullscreenExit onClick={exitFullscreen} />
                ) : (
                  <MdFullscreen onClick={fullscreen} />
                )}
              </h1>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

const headerText = 'Welcome to the Strooks React Library'
const middleText = 'Hooks and Components for your trickiest usecases'
const subText = 'easy to use so you can focus on your creativity.'
