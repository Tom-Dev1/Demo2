import { useCallback, useState } from "react"
import { Button, Text } from "react-native"
import Todos from "./TodoList"


const initTodos: string[] = []

export const UseCallback = () => {
    const [todos, setTodos] = useState(initTodos)
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((c) => c + 1)
    }

    // Ham nay thay doi nen se render lai
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, 'new todo' + count])

    }, [todos])

    console.log("UseCallback was re-rendered");

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <Text>Count: {count}</Text>
            <Button
                title="Increment"
                onPress={() => increment()}
            />
        </>
    )
}