import React from 'react'
import { Button, Text, View } from 'react-native'

export default function login() {
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Authentication Screen</Text>
      <Button title="Login" onPress={() => {}} />
    </View>
  )
}