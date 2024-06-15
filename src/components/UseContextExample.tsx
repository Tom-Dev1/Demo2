// import { createContext, useContext, useState } from "react"
// import { Text, View } from "react-native"



// const UserContext = createContext();


// export const UseContextExample = () => {
//     const [userName, setUserName] = useState("Thanhtt")
//     return (

//         <UserContext.Provider value={{ userName }}>
//             <ProfileComponent />
//         </UserContext.Provider>

//     )
// }

// const ProfileComponent = () => {
//     return (
//         <HeaderComponent />
//     )
// }

// const HeaderComponent = () => {
//     return (
//         <AvatarComponent />
//     )
// }
// const AvatarComponent = () => {
//     const userName = useContext(UserContext);
//     return (
//         <View>
//             <Text>{userName}</Text>
//         </View>
//     )
// }