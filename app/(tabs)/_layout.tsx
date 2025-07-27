import { View, Text } from 'react-native'
import { Redirect, Slot, Tabs } from 'expo-router'

export default function _layout() {
    const isAuthenticated = false
    if (!isAuthenticated) return <Redirect href='/SignIn' />

    return (
        <Tabs />
    )
}