import React, { useEffect, useState } from 'react'
import Todo from '../todo/todo';

const todoArray = [{
    text: 'Todo 1'
},

{
    text: 'Todo 2'
}

]
export default function TodoList() {
    const [todo, setTodo] = useState([]);

    useEffect(()=>{
        setTodo([...todoArray])
    }, [])


    const renderTodo = () =>{
        return todo.map((todo, index)=> {
            return <Todo todo={todo} index={index}/>
        })
    }

    return (
        <>
          {renderTodo()}
        </>
    )
}
