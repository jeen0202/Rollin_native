import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { login, tryLogin } from "../../app/users"
import axios from "axios"

const LoginScreen = () => {
    const dispatch = useDispatch()
    const [user,setUser] = useState({
        userId:"",
        password:""
    })
    // const onChangeid = (e) => {
    //     setId(e.target.value)
    //     console.log(e)
    // }

    // const onChangepassword = (e) => {
    //     setPassword(e.target.value)
    // }

    const onChangeHandler = (name,value) =>{
        setUser({...user,[name]:value})
        // console.log(user);
    }

    const onButtonClick = () => {        
        dispatch(tryLogin(user))
    }

    return (
        <View>
            <TextInput
                placeholder="이곳은 아이디"
                onChangeText={(text)=>onChangeHandler("userId",text)}
            ></TextInput>
            <TextInput
                placeholder="이곳은 비밀번호"
                secureTextEntry={true}
                onChangeText={(text)=>onChangeHandler("password",text)}
            ></TextInput>
            <Button title="로그인" onPress={onButtonClick}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 200,
    },
})

export default LoginScreen
