import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: green;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`
