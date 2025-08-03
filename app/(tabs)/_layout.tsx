import { View, Text } from 'react-native'
import { Redirect, Slot, Tabs } from 'expo-router'

export default function _layout() {
    const isAuthenticated = true
    if (!isAuthenticated) return <Redirect href='/SignIn' />

    return (
        <Slot />
    )
}