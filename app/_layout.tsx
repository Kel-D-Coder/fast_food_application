import { SplashScreen, Stack } from "expo-router";
import '../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import { StatusBar } from "react-native";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://1a685f5d3d4a440b5458db5a50193125@o4509759516114944.ingest.us.sentry.io/4509764969562112',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function RootLayout() {

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
});