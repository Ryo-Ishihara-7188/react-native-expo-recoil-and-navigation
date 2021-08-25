import React from 'react';
import { RecoilRoot } from 'recoil';
import AppNavigator from './src/navigations/AppNavigator';

export default function App() {
    return (
        <RecoilRoot>
            <AppNavigator />
        </RecoilRoot>
    );
}