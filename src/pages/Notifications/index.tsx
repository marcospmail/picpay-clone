import React from 'react'
import { View, Text } from 'react-native'

const Notifications: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold' }}>
        There&apos;s nothing to see here, my old friend.
      </Text>
    </View>
  )
}

export default Notifications
