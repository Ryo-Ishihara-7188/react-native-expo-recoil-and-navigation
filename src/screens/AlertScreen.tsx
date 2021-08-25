import React from 'react'
import { SafeAreaView, Button, StyleSheet, Alert } from 'react-native'

export default function AlertScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Button title="open alert" onPress={() => Alert.alert('title', 'Alert')} />
            <Button title="open modal" onPress={() => navigation.navigate('AlertModal')} />
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