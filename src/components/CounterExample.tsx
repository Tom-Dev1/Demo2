import { useDispatch, useSelector } from "react-redux"
import { Store } from "../store"
import { Button, Text } from "react-native"
import { increment } from "../slices/counterSlice"

const CounterExample = () => {
    const count = useSelector((store: Store) => store.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <Text style={{ fontSize: 30 }}>Count: {count}</Text>
            <Button
            title="Increment"
            onPress={() => dispatch(increment())}/>
            <Button
            title="Decrement"
            onPress={() => dispatch(increment())}/>
        </>
    )
}

export default CounterExample