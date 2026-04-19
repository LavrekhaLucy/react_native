import { Stack } from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return(
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
          <StatusBar style="light" />
      </GestureHandlerRootView>

  );
}
