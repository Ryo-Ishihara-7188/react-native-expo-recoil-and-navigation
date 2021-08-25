import React from 'react'
import { Text } from 'react-native'
import { selector, useRecoilValue } from 'recoil'
import { textState } from '../atoms/Text'

const characterCountState = selector({
    key: 'characterCountState',
    get: ({ get }) => {
        const text = get(textState)
        return text.length
    }
})

export default function CharacterCount() {
    const count = useRecoilValue(characterCountState)
    return <Text>Count: {count}</Text>

}