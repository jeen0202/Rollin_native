import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import axios from "axios"

const login = () => {
    const dispatch = useDispatch()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onChangeid = (e) => {
        setId(e.target.value)
    }

    const onChangepassword = (e) => {
        setPassword(e.target.value)
    }

    const onButtonClick = (b) => {
        dispatch(
            load({
                userId: id,
                password: password,
            })
        )
    }

    return (
        <View>
            <TextInput
                placeholder="이곳은 아이디"
                onChange={onChangeid}
            ></TextInput>
            <TextInput
                placeholder="이곳은 비밀번호"
                onChange={onChangepassword}
            ></TextInput>
            <Button title="로그인" onclick={btn}>
                {" "}
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 200,
    },
})

export default login
