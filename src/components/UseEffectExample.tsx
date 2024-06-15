import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native"
import container from "../dependencies/dependencies";
import { PostClient } from "../api/PostClient";
import { Post } from "../models/PostModels";


//Custom hook

const useFetchPosts = () => {
    const [data, setData] = useState(initPosts);
    useEffect(() => {
        const postAPI = container.get<PostClient>('PostClient');
        postAPI.fetchPosts()
            .then(posts => setData(posts));
    }, []);
    return [data];
}




const initPosts: Post[] = []

export const UseEffectExample = () => {
    // const [reload, setReload] = useState(0);
    // const [posts, setPosts] = useState(initPosts);
    // const postAPI = container.get<PostClient>('PostClient');
    // useEffect(() => {
    //     postAPI.fetchPosts()
    //         .then(posts => setPosts(posts));
    //     console.log(reload);

    // }, [reload])
    const [posts] = useFetchPosts();
    return (
        <View style={{ paddingTop: 60 }}>
            {
                posts.map((post, key) => <Text id="key">{post.title}</Text>)
            }
        </View>
    )

}