import { SplashScreen, Stack } from "expo-router";
import '../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded) {
    return null;  // Don't render anything until fonts are ready
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
