import { View, Text } from 'react-native'
import { Redirect, Slot, Tabs } from 'expo-router'
import { useAuthStore } from '@/store/auth.store';

export default function TabsLayout() {
    const { isAuthenticated } = useAuthStore();
    
    if (!isAuthenticated) return <Redirect href='/SignIn' />

    return (
        <Slot />
    )
}