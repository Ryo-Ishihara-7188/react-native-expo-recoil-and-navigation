import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './BottomTabNavigator'

export default function AppNavigator() {
    return (
        <NavigationContainer>
            {/* ログイン前の処理などをここに書いてコンポーネント切り替えを仕込む */}
            <BottomTabNavigator />
        </NavigationContainer>
    );
}