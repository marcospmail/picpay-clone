import React, { InputHTMLAttributes } from 'react'
import { ViewProps, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { Container } from './styles'

const PayButton: React.FC<ViewProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name="dollar" size={20} color={'#fff'} />
      <Text style={{ fontSize: 12, color: '#fff' }}>Pagar</Text>
    </Container>
  )
}

export default PayButton
