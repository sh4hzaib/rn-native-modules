import { useEffect } from "react";
import { Text, View } from "react-native";
import { multiply } from "react-native-calcultaor-module";

export default function Index() {
  const Handle = async () => {
    
    console.log(await multiply(2,5));
  }
  useEffect(()=>{
  Handle()
  })
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
