// @ts-nocheck
import React, { useState } from 'react'
import { Range } from './components/Range'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(
    Math.round((Math.random() * (1 - 0) + 0) * 100) / 100
  )

  const handleRandomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
    setAlpha(Math.round((Math.random() * (1 - 0) + 0) * 100) / 100)
  }

  return (
    <main>
      <h1
        style={{
          textShadow: `0px 5px hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`,
        }}
      >
        Color Picker
      </h1>

      <div className="first-section">
        <section className="color-box">
          <div
            style={{
              backgroundColor: `hsla(
                  ${hue},
                  ${saturation}%,
                  ${lightness}%,
                  ${alpha}
                )`,
            }}
          ></div>
          <button onClick={handleRandomColor}>Random</button>
        </section>

        <section className="color-ranges">
          <Range
            min="0"
            max="360"
            value={hue}
            onChange={function (event) {
              setHue(event.target.value)
            }}
          />

          <Range
            min="0"
            max="100"
            value={saturation}
            onChange={function (event) {
              setSaturation(event.target.value)
            }}
          />

          <Range
            min="0"
            max="100"
            value={lightness}
            onChange={function (event) {
              setLightness(event.target.value)
            }}
          />

          <Range
            min="0"
            max="1"
            step="0.01"
            value={alpha}
            onChange={function (event) {
              setAlpha(event.target.value)
            }}
          />
        </section>
      </div>

      <section className="color-info">
        <div>
          <p>
            hsla({hue}, {saturation}%, {lightness}%, {alpha})
          </p>
        </div>
      </section>
    </main>
  )
}
