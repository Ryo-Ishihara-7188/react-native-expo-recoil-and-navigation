import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { useRecoilState } from 'recoil'
import { textState } from '../atoms/Text'

export default function TextInputField() {
    const [text, setText] = useRecoilState(textState)

    return (
        <View style={styles.textInputWrap}>
            <TextInput style={styles.textInput} value={text} onChangeText={text => setText(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputWrap: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        height: 48,
        padding: 8,
        fontSize: 18,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12
    }
})