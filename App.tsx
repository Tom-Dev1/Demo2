// import { Button, View } from "react-native";
// import container from "./src/dependencies/dependencies";
// import UserService from "./src/services/UserService";
// import { PostClient } from "./src/api/PostClient";
// import { UseStateExample } from "./src/components/UseStateExample";
// import { UseEffectExample } from "./src/components/UseEffectExample";
// import { UseRefExample } from "./src/components/UseRefExample";
import { View } from "react-native";
import { UseReducerExample } from "./src/components/UseReducerExample";
import { UseStateExample } from "./src/components/UseStateExample";
import { UseCallback } from "./src/components/UseCallback";
import { UseMemoEx } from "./src/components/UseMemoEx";
import { UseEffectExample } from "./src/components/UseEffectExample";
import { Provider } from "react-redux";
import { store } from "./src/store";
import CounterExample from "./src/components/CounterExample";
export default function App() {
  // const userService = container.get<UserService>('UserService');
  // const postClient = container.get<PostClient>('PostClient');
  return (
    // <View style={{ marginTop: 50 }}>
    //   <Button
    //     title="Press me"
    //     onPress={() => {
    //       postClient.fetchPosts().then(posts => posts.forEach(post => console.log('====>', post.title)));
    //     }}>
    //   </Button>
    // </View>
    <Provider store={store}>
      <View>
        <CounterExample />
      </View>
    </Provider>
  );
}


