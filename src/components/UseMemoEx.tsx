import { useCallback, useMemo, useState } from "react"
import Todos from "./TodoList"
import { Button, Text } from "react-native";



const initTodo: string[] = [];

export const UseMemoEx = () => {

    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(initTodo);

    let startTime = Date.now();
    let endTime = Date.now();
    console.log("Time: ", endTime - startTime);

    const result = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New todo" + count])
    }, [todos]);



    return (
        <>

            <Todos addTodo={addTodo} todos={todos} />
            <Text>Count: {count !== undefined ? count : 'Loading...'}</Text>
            <Text>Result: {result !== undefined ? result : 'Loading...'}</Text>
            <Button
                title="Increment"
                onPress={() => increment()}
            />
        </>
    )
}

const expensiveCalculation = (num: number) => {
    console.log("Performing expensive calculation");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
}
