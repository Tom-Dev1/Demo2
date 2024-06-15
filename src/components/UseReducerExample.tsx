import { useReducer, useState } from "react"
import { Button, Text, View } from "react-native"



const initialTodo = [
    {
        id: 1,
        title: 'Learn React Native',
        completed: false
    },
    {
        id: 2,
        title: 'Learn React',
        completed: false
    },
    {
        id: 3,
        title: 'Learn Angular',
        completed: false
    },
    {
        id: 4,
        title: 'Learn Vue',
        completed: false
    },
    {
        id: 5,
        title: 'Learn Flutter',
        completed: false
    },
    {
        id: 6,
        title: 'Learn Swift',
        completed: false
    },
    {
        id: 7,
        title: 'Learn Kotlin',
        completed: false
    },
    {
        id: 8,
        title: 'Learn Java',
        completed: false
    },
    {
        id: 9,
        title: 'Learn Python',
        completed: false
    },
]
//viet cho khac
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'COMPLETE':
            return state.map((t: any) => {
                if (action.payload === t.id) {
                    return { ...t, completed: !t.completed }
                } else {
                    return t;
                }
            })
        default:
            return state;
    }
}

export const UseReducerExample = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodo);
    const handleComplete = (todo: any) => {
        dispatch({ type: 'COMPLETE', payload: todo.id });
    }


    return (
        <>
            {
                todos.map((todo: any) => {
                    <View key={todo.id} style={{ backgroundColor: todo.completed ? 'green' : 'white', flexDirection: 'row' }}>
                        <Button
                            title={todo.completed ? 'Uncomplete' : 'Complete'}
                            onPress={() => handleComplete(todo)} />
                        <Text>{todo.title}</Text>
                        <Text>{todo.completed}</Text>
                        <Text>{todo.id}</Text>
                    </View>
                })
            }
        </>
    )
}