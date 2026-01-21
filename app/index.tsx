import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import { ToggleGroup } from "./src/components/toogleGroup";

type Status = "all" | "active" | "done";
type Layout = "list" | "grid";
type Type = "on" | "off";
type Plan = "monthly" | "yearly";
type Mode = "light" | "dark"


export default function Index() {

  const [mode, setMode] = useState<"day" | "week" | "month">("day");

  // For Toggle Groups
  const [status, setStatus] = useState<Status>("all");
  const [layout, setLayout] = useState<Layout>("list");
  const [layoutIcon, setLayoutIcon] = useState<Layout>("grid");
  const [type, setType] = useState<Type>("on")
  const [plan, setPlan] = useState<Plan>("monthly")
  const [alert, setAlert] = useState<Type>("off")
  const [modeSwitch, setModeSwitch] = useState<Mode>("light")
  const [enabled, setEnabled] = useState<"off" | "on">("off");

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

      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 40 }}>Toggle Groups</Text>

      <ToggleGroup
        variant="outline"
        items={[
          { label: "All", value: "all" },
          { label: "Active", value: "active" },
          { label: "Done", value: "done" },
        ]}
        value={status}
        onChange={setStatus}
        activeColor="#2563EB"
        borderColor="#E5E7EB"
      />

      <ToggleGroup
        items={[
          { label: "Day", value: "day" },
          { label: "Week", value: "week" },
          { label: "Month", value: "month" },
        ]}
        value={mode}
        onChange={setMode}
        containerStyle={{ marginTop: 20 }}
      />



      <ToggleGroup
        variant="solid"
        backgroundColor="#ADD8E6"
        activeColor="#2563EB"
        inactiveColor="#9CA3AF"
        items={[
          { label: "List", value: "list" },
          { label: "Grid", value: "grid" },
        ]}
        value={layout}
        onChange={setLayout}
        containerStyle={{ marginTop: 20 }}
      />


      <ToggleGroup
        items={[
          {
            label: "",
            value: "list",
            icon: <Ionicons name="list" size={18} />,
          },
          {
            label: "",
            value: "grid",
            icon: <Ionicons name="grid" size={18} />,
          },
        ]}
        value={layoutIcon}
        onChange={setLayoutIcon}
        containerStyle={{ marginTop: 20 }}
      />


      <ToggleGroup
        height={32}
        width={160}
        items={[
          { label: "On", value: "on" },
          { label: "Off", value: "off" },
        ]}
        value={type}
        onChange={setType}
        textStyle={{ fontSize: 12 }}
        containerStyle={{ marginTop: 20 }}
      />


      <ToggleGroup
        width={300}
        activeColor="#10B981"       // green
        backgroundColor="#ECFDF5"
        inactiveColor="#065F46"
        items={[
          { label: "Monthly", value: "monthly" },
          { label: "Yearly", value: "yearly" },
        ]}
        value={plan}
        onChange={setPlan}
        containerStyle={{ marginTop: 20 }}
      />


      <ToggleGroup
        activeColor="#DC2626"       // red
        backgroundColor="#FEE2E2"
        inactiveColor="#7F1D1D"
        items={[
          { label: "Disable", value: "off" },
          { label: "Enable", value: "on" },
        ]}
        value={alert}
        onChange={setAlert}
        containerStyle={{ marginTop: 20 }}
      />

      <ToggleGroup
        items={[
          {
            label: "",
            value: "light",
            icon: <Ionicons name="sunny" size={16} />,
          },
          {
            label: "",
            value: "dark",
            icon: <Ionicons name="moon" size={16} />,
          },
        ]}
        value={modeSwitch}
        onChange={setModeSwitch}
        height={32}
        width={100}
        activeColor="#111827"
        backgroundColor="#E5E7EB"
        containerStyle={{ marginTop: 20 }}
      />

      <ToggleGroup
        items={[
          { label: "", value: "off" },
          { label: "", value: "on" },
        ]}
        value={enabled}
        onChange={setEnabled}
        height={30}
        width={80}
        activeColor="#22C55E"
        backgroundColor="#D1D5DB"

        containerStyle={{ marginTop: 20 }}
      />
    </View>
  );
}
