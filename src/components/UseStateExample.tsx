import { useState } from "react";
import { Button, Text, View } from "react-native";

export const UseStateExample = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={{ marginTop: 50 }}>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
            <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
    );
}