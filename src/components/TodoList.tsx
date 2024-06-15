import { memo } from "react";
import { Button, Text } from "react-native";

type TodoProps = {
    todos: string[];
    addTodo: any
}

const Todos = (TodoProps: TodoProps) => {

    console.log("Todo was re-rendered");


    return (
        <>
            <Text>My todos</Text>
            {
                TodoProps.todos.map((todo, index) => {
                    return <Text key={index}>{todo}</Text>
                })
            }
            <Button title="Add todo" onPress={TodoProps.addTodo()} />
        </>
    )
}

export default memo(Todos);