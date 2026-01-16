import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  Modal,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

export interface DropdownItem {
  label: string;
  value: string;
}

export default function dropdown() {
  return (
    <View>
      <Text>Dropdown List</Text>
    </View>
  )
}