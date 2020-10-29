import React from 'react'
import { useTheme } from 'styled-components'

import Icon from 'react-native-vector-icons/FontAwesome'

import {
  Container,
  Header,
  HeaderRight,
  Balance,
  BalanceLabel,
  BalanceValue,
  SubHeader,
  Options,
  ChooseOptionsItem,
  ChooseOptionsItemText,
  OptionItems,
  Item,
  ItemIcon,
  ItemTextWrap,
  ItemText,
  MySeparator,
  ActivityHeader,
  ActivityHeaderTitle,
  ActivityHeaderOptions,
  ActivityHeaderOption,
  ActivityHeaderOptionText,
  Activity,
  ActivityItem,
  ActivityMain,
  ActivityUserAvatar,
  ActivityMainText,
  ActivityDescriptionText,
  ActivityDetails,
  ActivityValue,
  ActivityDate,
  ActivityInteraction,
  ActivityComments,
  ActivityCommentsText,
  ActivityLikes,
  ActivityLikesText
} from './styles'

const Home: React.FC = props => {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Icon name="address-book" size={20} color={theme.colors.text} />

        <Balance>
          <BalanceLabel>Meu Saldo</BalanceLabel>
          <BalanceValue>R$ 0,00</BalanceValue>
        </Balance>

        <HeaderRight>
          <Icon
            style={{ marginRight: 10 }}
            name="address-book"
            size={20}
            color={theme.colors.text}
          />
          <Icon name="address-book" size={20} color={theme.colors.text} />
        </HeaderRight>
      </Header>

      <SubHeader>
        <Options>
          <ChooseOptionsItem>
            <ChooseOptionsItemText>Sugestões</ChooseOptionsItemText>
          </ChooseOptionsItem>
          <ChooseOptionsItem>
            <ChooseOptionsItemText>Favoritos</ChooseOptionsItemText>
          </ChooseOptionsItem>
        </Options>

        <OptionItems>
          {[...Array(10).keys()].map(index => (
            <Item key={index}>
              <ItemIcon />
              <ItemTextWrap>
                <ItemText>{`Item ${index}`}</ItemText>
              </ItemTextWrap>
            </Item>
          ))}
        </OptionItems>
      </SubHeader>

      <MySeparator />

      <ActivityHeader>
        <ActivityHeaderTitle>Atividades</ActivityHeaderTitle>

        <ActivityHeaderOptions>
          <ActivityHeaderOption>
            <ActivityHeaderOptionText>Todos</ActivityHeaderOptionText>
          </ActivityHeaderOption>

          <ActivityHeaderOption>
            <ActivityHeaderOptionText>Minhas</ActivityHeaderOptionText>
          </ActivityHeaderOption>
        </ActivityHeaderOptions>
      </ActivityHeader>

      <Activity>
        {[...Array(20)].map((_, index) => (
          <ActivityItem key={index}>
            <ActivityMain>
              <ActivityUserAvatar />
              <ActivityMainText>Você pagou a @john.doe</ActivityMainText>
            </ActivityMain>
            <ActivityDescriptionText>
              Thanks for lending me that money
            </ActivityDescriptionText>
            <ActivityDetails>
              <ActivityValue>R$ 99,90</ActivityValue>
              <ActivityDate>7 dias atrás</ActivityDate>
              <ActivityInteraction>
                <ActivityComments>
                  <Icon name="comment-o" color={theme.colors.text} />
                  <ActivityCommentsText>999</ActivityCommentsText>
                </ActivityComments>
                <ActivityLikes>
                  <Icon name="heart-o" color={theme.colors.text} />
                  <ActivityLikesText>999</ActivityLikesText>
                </ActivityLikes>
              </ActivityInteraction>
            </ActivityDetails>
          </ActivityItem>
        ))}
      </Activity>
    </Container>
  )
}

export default Home
