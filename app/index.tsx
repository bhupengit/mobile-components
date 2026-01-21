import { useState } from "react";
import { Text, View } from "react-native";
import { ToggleGroup } from "./src/components/toogleGroup";

export default function Index() {

  const [mode, setMode] = useState<"day" | "week" | "month">("day");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      }}
    >
      {/* <Text style={{ fontSize: 26, fontWeight: "bold" }}>Button Components</Text>

      <Button
        title="Continue"
        variant="secondary"
        size="lg"
        loading={false}
        leftIcon={<Ionicons name="arrow-forward-circle" size={40} color={"#2F6FDB"} />}
        textStyle={{ color: "#111827" }}
        style={{ marginTop: 20, borderRadius: 50, paddingVertical: 5, paddingStart: 10, paddingEnd: 20, backgroundColor: "#EDEDED", borderColor: "#E5E7EB", borderWidth: 1 }}
      />

      <Button
        title="Add to cart"
        variant="primary"
        size="lg"
        loading={false}
        leftIcon={<Ionicons name="cart-outline" size={20} color="#111827" />}
        textStyle={{ fontSize: 16, color: "#111827" }}
        style={{ marginTop: 20, backgroundColor: "#FFFFFF", borderColor: "#D1D5DB", borderWidth: 1 }}
      />

      <Button
        title="View details"
        variant="secondary"
        size="lg"
        loading={false}
        rightIcon={
          <View style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Ionicons name="arrow-forward" size={18} color={"#111827"} />
          </View>}
        textStyle={{ color: "#FFFFFF" }}
        style={{ marginTop: 20, borderRadius: 50, paddingVertical: 10, paddingStart: 20, paddingEnd: 10, backgroundColor: "#1F1F1F", borderColor: "#E5E7EB", borderWidth: 1 }}
      />

      <Button
        title="Pay now"
        variant="primary"
        size="lg"
        loading={false}
        fullWidth
        gradient={["#3F8F4E", "#4FA65F"]}
        leftIcon={<Ionicons name="card-outline" size={20} color="#fff" />}
      />

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Button
          title="Download"
          variant="outline"
          size="lg"
          loading={false}
          textStyle={{ color: "#2563EB" }}
          leftIcon={<Ionicons name="download-outline" size={20} color="#2563EB" />}
          style={{ marginTop: 10, backgroundColor: "#EFF6FF", borderColor: "#BFDBFE" }}
        />
        <Button
          title="Upload"
          variant="outline"
          size="lg"
          loading={false}
          textStyle={{ color: "#2563EB" }}
          leftIcon={<Ionicons name="cloud-upload-outline" size={20} color="#2563EB" />}
          style={{ marginTop: 10, backgroundColor: "#EFF6FF", borderColor: "#BFDBFE" }}
        />
      </View>

      <View style={{ flexDirection: "row", marginTop: 20, gap: 15 }}>
        <Button
          title=""
          variant="ghost"
          style={{
            padding: 10,
            paddingEnd: 5,
            backgroundColor: "#F3F4F6",
          }}
          leftIcon={<Ionicons name="heart-outline" size={20} color="#374151" />}
        />
        <Button
          title=""
          variant="ghost"
          style={{
            padding: 10,
            paddingEnd: 5,
            backgroundColor: "#F3F4F6",
          }}
          leftIcon={<Ionicons name="save-outline" size={20} color="#374151" />}
        />
        <Button
          title=""
          variant="ghost"
          style={{
            padding: 10,
            paddingEnd: 5,
            backgroundColor: "#F3F4F6",
          }}
          leftIcon={<Ionicons name="share-outline" size={20} color="#374151" />}
        />

        <Button
          title=""
          variant="ghost"
          style={{
            padding: 10,
            paddingEnd: 5,
            backgroundColor: "#F3F4F6",
          }}
          leftIcon={<Ionicons name="refresh-outline" size={20} color="#374151" />}
        />
      </View>

      <View style={{ flexDirection: "row", gap: 15 }}>
        <Button
          title="Checkout"
          variant="secondary"
          textStyle={{ color: "#FFF" }}
          rightIcon={<Ionicons name="bag-outline" size={18} color="#FFFFFF" />}
          style={{
            marginTop: 20, backgroundColor: "#2B6CB0", borderColor: "#1E5A99", borderWidth: 1, shadowColor: "#000000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.18,
            shadowRadius: 3, elevation: 3,
          }}
        />
        <Button
          title="Open"
          variant="secondary"
          textStyle={{ color: "#FFF" }}
          rightIcon={<Ionicons name="chevron-down" size={18} color="#FFFFFF" />}
          style={{
            marginTop: 20, backgroundColor: "#2B6CB0", borderColor: "#1E5A99", borderWidth: 1, shadowColor: "#000000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.18,
            shadowRadius: 3, elevation: 3,
          }}
        />
      </View>

      <Button
          title="Refresh"
          variant="ghost"
          style={{marginTop: 20}}
          leftIcon={<Ionicons name="refresh" size={16} color="#374151" />}
        /> */}

      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Button Components</Text>
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
