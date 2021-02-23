// @ts-nocheck
import React from 'react'

export function Range(props) {
  return (
    <div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        onChange={props.onChange}
      ></input>
      <p>{props.value}</p>
    </div>
  )
}
