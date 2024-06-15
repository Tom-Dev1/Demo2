import { useEffect, useRef, useState } from "react"
import { Text, TextInput, View } from "react-native"

export const UseRefExample = () => {
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    }, [inputValue])
    console.log('count', count.current);
    return (
        <View>
            <Text>{inputValue}</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={inputValue}
                onChangeText={(e) => setInputValue(e)} />
        </View>
    )
}