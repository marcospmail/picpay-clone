import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid #f3f3f3;
  shadow-color: #898d8c;
  shadow-opacity: 0.26;
  shadow-offset: 0 2px;
  shadow-radius: 10px;
  elevation: 2;
`

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
`

export const UserAvatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid #898d8c50;
`

export const MainText = styled.Text`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;

  color: ${({ theme }) => theme.colors.text};
`

export const Payer = styled.Text`
  font-weight: bold;
`

export const Receiver = styled.Text`
  font-weight: bold;
`

export const Description = styled.Text`
  margin: 20px 0;
  font-size: 15px;
  color: #000000aa;
`

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Value = styled.Text`
  color: #13a128aa;
  padding-right: 5px;
  border-right-width: 1px;
  border-right-color: #898d8c30;
`

export const Date = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: #898d8c70;
  font-weight: 200;
`

export const Interactions = styled.View`
  flex-direction: row;
  margin-left: auto;
`

export const Comments = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`

export const CommentsText = styled.Text`
  margin-left: 5px;
  color: #898d8c70;
`

export const Likes = styled.View`
  flex-direction: row;
  align-items: center;
`

export const LikesText = styled.Text`
  margin-left: 5px;
  color: #898d8c70;
`
