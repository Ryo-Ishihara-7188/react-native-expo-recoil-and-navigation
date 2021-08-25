import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default function ProfileScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Profile</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});