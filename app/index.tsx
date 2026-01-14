import { Text, View } from "react-native";
import Button from "./src/components/button";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Button
        title="Click me"
        variant="primary"
        size="lg"
        loading={false}
        fullWidth
      />
    </View>
  );
}
