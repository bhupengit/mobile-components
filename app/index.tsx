import { Ionicons } from "@expo/vector-icons";
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
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Building Button Component</Text>

      <Button
        title="Click me!"
        variant="primary"
        size="lg"
        loading={false}
        style={{ marginTop: 20 }}
      />

      <Button
        title="Click me!"
        variant="primary"
        size="lg"
        loading={false}
        leftIcon={<Ionicons name="arrow-back" size={20} color="#fff" />}
        style={{ marginTop: 20, backgroundColor: "#3B82F6", borderColor: "#E5E7EB" }}
      />

      <Button
        title="Click me!"
        variant="primary"
        size="lg"
        loading={false}
        rightIcon={<Ionicons name="arrow-forward" size={20} color="#fff" />}
        style={{ marginTop: 20, backgroundColor: "#3B82F6", borderColor: "#E5E7EB" }}
      />

      <Button
        title="Click me!"
        variant="primary"
        size="lg"
        loading={false}
        rightIcon={<Ionicons name="arrow-forward" size={20} color="#fff" />}
        style={{ marginTop: 20, backgroundColor: "#3B82F6", borderColor: "#E5E7EB" }}
      />

      <Button
        title="Click me!"
        variant="secondary"
        size="md"
        loading={false}
        style={{ marginTop: 10 }}
      />

      <Button
        title="Click me!"
        variant="outline"
        size="sm"
        loading={false}
        style={{ marginTop: 10 }}
      />

      <Button
        title="Click me!"
        variant="ghost"
        size="sm"
        loading={false}
        style={{ marginTop: 10 }}
      />

    </View>
  );
}
