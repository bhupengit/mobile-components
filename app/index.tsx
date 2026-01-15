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
        title="Continue"
        variant="primary"
        size="lg"
        loading={false}
        fullWidth
      />

      <Button
        title="Login"
        variant="secondary"
        size="lg"
        loading={false}
        fullWidth
      />
    </View>
  );
}
