import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import Separator from '../../components/Sepatator'

export const Container = styled.ScrollView.attrs(props => ({
  stickyHeaderIndices: [3],
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
    backgroundColor: props.theme.colors.background
  }
}))`
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const HeaderRight = styled.View`
  flex-direction: row;
`

export const Balance = styled.View`
  align-items: center;
`

export const BalanceLabel = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
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
`

export const ChooseOptionsItem = styled(RectButton)`
  margin-left: 10px;
`

export const ChooseOptionsItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 2px;
  color: ${({ theme }) => theme.colors.text};
`

export const OptionItems = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  margin-top: 20px;
  flex-direction: row;
`

export const Item = styled.View`
  align-items: center;
  width: 100px;
`

export const ItemIcon = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
`

export const ItemTextWrap = styled.View`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemText = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`

export const MySeparator = styled(Separator)`
  margin-top: 20px;
`

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
  font-size: 16px;

  color: ${({ theme }) => theme.colors.text};
`

export const ActivityHeaderOptions = styled.View`
  flex-direction: row;
`

export const ActivityHeaderOption = styled(RectButton)`
  margin-right: 10px;
`

export const ActivityHeaderOptionText = styled.Text`
  font-weight: bold;
  padding: 15px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 2px;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.text};
`

export const Activity = styled.View`
  z-index: 0;
  flex: 1;
  padding: 5px;
`

export const ActivityItem = styled.View`
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background};

  ${({ theme }) =>
    theme.title === 'light' &&
    css`
      shadow-color: ${theme.colors.border};
      shadow-opacity: 0.26;
      shadow-offset: 0 2px;
      shadow-radius: 10px;
      elevation: 3;
    `}

  ${({ theme }) =>
    theme.title === 'dark' &&
    css`
      border: 2px solid ${theme.colors.border};
    `}
`

export const ActivityMain = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ActivityUserAvatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.card};
  border: 2px solid ${({ theme }) => theme.colors.border};
`

export const ActivityMainText = styled.Text`
  font-size: 16px;
  margin-left: 10px;

  color: ${({ theme }) => theme.colors.text};
`

export const ActivityDescriptionText = styled.Text`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text};
`

export const ActivityDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ActivityValue = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`

export const ActivityDate = styled.Text`
  /* TODO why I have to use this 'color:black'? */
  color: black;
  font-size: 14px;
  margin-left: 10px;
  margin-right: auto;
  padding-left: 10px;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`

export const ActivityInteraction = styled.View`
  flex-direction: row;
`

export const ActivityComments = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`

export const ActivityCommentsText = styled.Text`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.text};
`

export const ActivityLikes = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ActivityLikesText = styled.Text`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.text};
`
