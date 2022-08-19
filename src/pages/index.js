// import browserColors from 'strooks/dist/styles/browser-colors'
import UseStyleVarsExample from '../Examples/UseStyleVarsExample'
import TypeWriterExample from '../Examples/TypeWriterExample'

export default function Home() {
  return (
    <div className="bg-dark flex center">
      <TypeWriterExample />
      <UseStyleVarsExample />
      <div className="flex p-3 j-between gap-2">{/* x44x */}</div>
    </div>
  )
}
