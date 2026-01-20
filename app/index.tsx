import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "./src/components/button";
import { ToggleGroup } from "./src/components/toogleGroup";

export default function Index() {

  const [mode, setMode] = useState<"day" | "week" | "month">("day");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fff"
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Building Button Component</Text>

      <Button
        title="Continue"
        variant="primary"
        size="lg"
        loading={false}
        leftIcon={<Ionicons name="arrow-forward-circle" size={40} color={"#2F6FDB"} />}
        textStyle={{color:"#111827"}}
        style={{ marginTop: 20, borderRadius: 50, paddingVertical: 5, paddingStart: 10, paddingEnd: 20, backgroundColor: "#EDEDED", borderColor:"#E5E7EB", borderWidth: 1 }}
      />

      <Button
        title="Click me!"
        variant="primary"
        size="lg"
        loading={false}
        leftIcon={<Ionicons name="cart-outline" size={20} color="#fff" />}
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



      <ToggleGroup
        items={[
          { label: "Day", value: "day" },
          { label: "Week", value: "week" },
          { label: "Month", value: "month" },
        ]}
        value={mode}
        onChange={setMode}
      />

    </View>
  );
}
