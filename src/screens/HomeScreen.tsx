import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputField from '../components/TextInputField'
import CharacterCount from '../components/CharacterCount'
import TextInputPrint from '../components/TextInputPrint'

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Recoil sample</Text>
            <TextInputField />
            <TextInputPrint />
            <CharacterCount />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});