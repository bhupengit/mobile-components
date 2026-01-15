import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
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
        leftIcon={<Icon name="log-in" size={18} color="#fff" />}
        rightIcon={<Icon name="arrow-right" size={18} color="#fff" />}
      />
    </View>
  );
}
