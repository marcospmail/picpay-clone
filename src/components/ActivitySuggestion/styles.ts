import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  padding: 15px;
  position: relative;
  border: 1px solid #f3f3f3;
  shadow-color: #898d8c;
  shadow-opacity: 0.26;
  shadow-offset: 0 2px;
  shadow-radius: 10px;
  elevation: 2;
`

export const CloseSuggestion = styled(RectButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const SuggestionText = styled.Text`
  width: 70%;
  height: 40%;
  font-weight: bold;
`

export const SuggestionImageContainer = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 32.5px;
  border: 2px solid #898d8c50;
  margin: auto;
`

export const SuggestionImage = styled.Image``
