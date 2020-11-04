import React, { useMemo } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome'
import NumberFormat from 'react-number-format'
import { formatDistanceToNow, differenceInMinutes } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'

import {
  Container,
  Main,
  MainText,
  Payer,
  Receiver,
  Description,
  Details,
  UserAvatar,
  Value,
  Date as DateText,
  Interactions,
  Comments,
  CommentsText,
  Likes,
  LikesText
} from './styles'

interface ActivityProps {
  payer: string
  receiver: string
  description: string
  value: number
  date: Date
  comments: number
  likes: number
}

const Activity: React.FC<ActivityProps> = ({
  payer,
  receiver,
  description,
  value,
  date,
  comments,
  likes
}) => {
  const formattedDate = useMemo(() => {
    const diff = differenceInMinutes(new Date(), date)

    if (diff <= 1) {
      return 'Agora'
    }

    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true
    })
  }, [date])

  return (
    <Container>
      <Main>
        <UserAvatar />
        <MainText>
          <Payer>{payer}</Payer>
          {' paid  '}
          <Receiver>{receiver}</Receiver>
        </MainText>
      </Main>
      <Description>{description}</Description>
      <Details>
        <NumberFormat
          value={value}
          displayType={'text'}
          thousandSeparator="."
          prefix={'R$ '}
          decimalScale={2}
          decimalSeparator=","
          fixedDecimalScale
          renderText={formattedValue => <Value>{formattedValue}</Value>}
        />

        <Feather name="lock" color="#898d8caa" style={{ paddingLeft: 5 }} />
        <DateText>{formattedDate}</DateText>
        <Interactions>
          <Comments>
            <Icon name="comment-o" size={16} color="#898d8caa" />
            <CommentsText>{comments}</CommentsText>
          </Comments>
          <Likes>
            <Icon name="heart-o" size={16} color="#898d8caa" />
            <LikesText>{likes}</LikesText>
          </Likes>
        </Interactions>
      </Details>
    </Container>
  )
}

export default Activity
