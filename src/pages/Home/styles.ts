import styled, { css } from 'styled-components/native'
import { StatusBar } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import Separator from '../../components/Sepatator'

interface TypeTextProps {
  selected?: boolean
}

export const Container = styled.ScrollView.attrs(props => ({
  stickyHeaderIndices: [4],
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
    backgroundColor: props.theme.colors.background
  }
}))`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`

export const HeaderRight = styled.View`
  flex-direction: row;
`

export const Balance = styled.View`
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const PayInput = styled.TextInput`
  margin: 0 auto;
  width: 95%;
  margin-top: 10px;
  padding: 5px 15px;
  border: 1px solid #898d8c80;
  border-radius: 20px;
`

export const PayInputText = styled.Text`
  font-size: 16px;
  color: #000000cc;
`

export const BalanceLabel = styled.Text`
  font-size: 12px;
  color: #000;
`

export const BalanceValue = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const SubHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`

export const Options = styled.View`
  flex-direction: row;
  margin-top: 15px;
`

export const OptionType = styled(RectButton)`
  margin-left: 10px;
`

export const OptionTypeText = styled.Text<TypeTextProps>`
  font-size: 13px;
  font-weight: bold;
  padding: 15px;
  color: #404543;

  ${({ selected = false }) =>
    selected &&
    css`
      border-bottom-color: ${({ theme }) => theme.colors.border};
      border-bottom-width: 2px;
    `}
`

export const OptionItems = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  margin-top: 20px;
  flex-direction: row;
`

export const MySeparator = styled(Separator)`
  margin-top: 20px;
`

export const ActivityItemsContainer = styled.View`
  z-index: 0;
  flex: 1;
  padding: 5px 10px;
`

export const ActivitySuggestions = styled.ScrollView.attrs({
  horizontal: true
})``

export const ActivityHeader = styled.View`
  z-index: 1;

  top: 0;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`

export const ActivityHeaderTitle = styled.Text`
  font-weight: bold;
  margin-left: 10px;
  font-size: 15px;

  color: #44424c;
`

export const ActivityHeaderOptions = styled.View`
  flex-direction: row;
`

export const ActivityHeaderOption = styled(RectButton)`
  margin-right: 10px;
`

export const ActivityHeaderOptionText = styled.Text<TypeTextProps>`
  font-weight: bold;
  padding: 15px;
  font-size: 13px;
  color: #898d8c;

  ${({ selected }) =>
    selected &&
    css`
      color: #5ca066;
      border-bottom-color: #5ca066;
      border-bottom-width: 2px;
    `}
`
