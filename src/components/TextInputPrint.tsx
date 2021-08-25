import React from 'react'
import { Text } from 'react-native'
import { useRecoilState } from 'recoil'
import { textState } from '../atoms/Text'

export default function TextInputPrint() {
    const [text] = useRecoilState(textState)
    return <Text>Input: {text}</Text>
}