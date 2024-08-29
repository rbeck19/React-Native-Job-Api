import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  // const onLayoutRootView = useCallback(async () => {
  //   if(fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  //   console.log("in callback")
  // },[fontsLoaded])

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        console.log("Splash screen hidden");
      }
    };

    hideSplashScreen();
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    // <Stack Layout={onLayoutRootView} />
    <Stack />
  );
}

export default Layout;