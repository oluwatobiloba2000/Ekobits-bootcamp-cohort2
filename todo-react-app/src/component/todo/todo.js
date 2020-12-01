import React from 'react'

export default function Todo(props) {
    const {todo, index} = props;

    return (
        <div key={index}>
          {todo.text}
        </div>
    )
}
