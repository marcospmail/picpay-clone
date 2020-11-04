import React from 'react'
import { useTheme } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Home from '../pages/Home'
import PayButton from '../components/PayButton'
import Wallet from '../pages/Wallet'
import Notifications from '../pages/Notifications'
import Settings from '../pages/Settings'
import Pay from '../pages/Pay'

const Tab = createBottomTabNavigator()

interface Pages {
  [key: string]: {
    iconName: string
    label: string
  }
}

const pages: Pages = {
  Home: {
    iconName: 'home',
    label: 'Início'
  },
  Carteira: {
    iconName: 'wallet',
    label: 'Carteira'
  },
  Notificações: {
    iconName: 'bell',
    label: 'Carteira'
  },
  Ajustes: {
    iconName: 'cog',
    label: 'Ajustes'
  }
}

const Routes: React.FC = () => {
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Pagar')
              return <PayButton style={{ marginBottom: 20 }} />

            const color = focused ? theme.colors.icon : '#5B5E61'
            const { iconName } = pages[route.name]
            return (
              <FontAwesome5 name={iconName} size={24} color={color} solid />
            )
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Carteira" component={Wallet} />
        <Tab.Screen name="Pagar" component={Pay} options={{ title: '' }} />
        <Tab.Screen name="Notificações" component={Notifications} />
        <Tab.Screen name="Ajustes" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
