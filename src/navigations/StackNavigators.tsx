import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AlertScreen from '../screens/AlertScreen'
import AlertModalScreen from '../screens/AlertModalScreen'

const Stack = createStackNavigator();

export default function StackNavigators() {
    return (
        <Stack.Navigator
            initialRouteName="Alert"
            // iosモーダルにしたい場合は以下を指定する
            screenOptions={{
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalPresentationIOS
            }}

        >
            <Stack.Screen name="Alert" component={AlertScreen} />
            <Stack.Screen name="AlertModal" component={AlertModalScreen} options={{ headerBackTitle: 'close' }} />
        </Stack.Navigator>
    )
}
