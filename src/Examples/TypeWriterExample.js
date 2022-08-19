import React from 'react'
import { TypeWriter } from 'strooks'

const TypeWriterExample = () => {
  return (
    <div
      id="TypeWriter"
      className="type-writer-page flex p-5 vh-100 column center pt-5 gap-1 of-hidden"
    >
      <TypeWriter text="Welcome to the Strooks React Library" fontSize={30} clearBlink />
      <TypeWriter
        text="Hooks and Components for your trickiest usecases"
        fontSize={25}
        delay={3.5}
        clearBlink
      />
      <TypeWriter
        text="easy to use so you can focus on your creativity"
        fontSize={20}
        seconds={2}
        delay={7}
      />
    </div>
  )
}

export default TypeWriterExample
