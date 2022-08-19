import React from 'react'
import { TypeWriter } from 'strooks'

const TypeWriterExample = () => {
  return (
    <div
      id="TypeWriter"
      className="type-writer-page flex p-5 vh-100 column center pt-5 gap-1 of-hidden"
    >
      <h1 className="mb-3">Type Writer Component</h1>
      <TypeWriter text="Hello World, my name is André" fontSize={30} clearBlink />
      <TypeWriter text="I have come here to stay" fontSize={25} delay={3.5} clearBlink />
      <TypeWriter text="Ask me anything" fontSize={20} seconds={2} delay={7} />
    </div>
  )
}

export default TypeWriterExample
