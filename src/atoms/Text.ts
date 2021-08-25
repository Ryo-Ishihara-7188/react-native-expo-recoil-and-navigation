import { atom } from "recoil"

// オブジェクトなどの場合はこのように型を定義する
// interface Text {
//     title: string,
//     description: string
// }

const initialText: string = ''

export const textState = atom({
    key: 'textState',
    default: initialText
})