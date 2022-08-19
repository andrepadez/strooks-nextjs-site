import React, { useRef } from 'react'
import { useForm, useStyleVars } from 'strooks'

const App = () => {
  const { styleVars, propsMap, setVar, updateStyleVars } = useStyleVars(true)
  const formRef = useRef()
  const [state, onChange] = useForm(formRef)

  console.log('styleVars', styleVars)

  // setTimeout(() => updateStyleVars(), 1000)

  const createNewProp = ev => {
    ev.preventDefault()
    // const { prop, val } = state
    // console.log({ prop, val })
    //   setVar(prop, val)
    //   formRef.current.reset()
  }

  return (
    <div id="useStyleVars" className="vh-100">
      <div className="w-100 bg-dark info-light">
        <div className="bg-dark p-2  flex column j-around gap-3">
          <div className="flex a-center center primary">
            <h1>useStyleVars hook</h1>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus amet
            suscipit placeat maxime culpa commodi quia, aliquam dolore ipsam explicabo autem
            doloremque voluptatum, aliquid exercitationem porro libero beatae esse.
          </p>
          <div className="use-style-vars bg-info-dark info-light">
            <div className="flex j-between mb-3">
              <div>
                <label className="block text-center pb-1 dark">Add new Var</label>
                <form
                  onChange={onChange}
                  onSubmit={createNewProp}
                  ref={formRef}
                  className="flex gap-2"
                >
                  <input name="prop" className="p-2" type="text" placeholder="prop" />
                  <input name="val" className="p-2" type="text" placeholder="val" />
                  <button className="p-2">Add</button>
                </form>
              </div>
            </div>
            <div className="flex j-around text-center mb-4">
              <h3>JS Var Name</h3>
              <h3>CSS Var Name</h3>
              <h3>Value</h3>
            </div>

            {Object.entries(styleVars).map(([prop, val]) => (
              <div key={prop}>
                <div className="flex mb-2 j-between dark text-center">
                  <h4 style={{ flex: '1 0 33%' }}>{prop}:</h4>
                  <h4 style={{ flex: '1 0 33%' }}>{propsMap[prop]}</h4>
                  <div style={{ flex: '1 0 33%' }}>
                    {prop.startsWith('color') && !!val ? (
                      <input
                        type="color"
                        onChange={ev => {
                          setVar(prop, ev.target.value)
                        }}
                        defaultValue={val}
                      />
                    ) : (
                      val
                    )}
                  </div>
                </div>
                <hr className="black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
