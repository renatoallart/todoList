import React from 'react'

export const Todo = (props) => {
  return (
    <div>
        <span> Todo: {props.name} </span>
        <button onClick={ () => props.remove(props.id)}>delete</button>
    </div>
  )
}
