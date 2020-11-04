import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  Container,
  IconWrapper,
  ItemIcon,
  ItemText,
  ItemTextWrap
} from './styles'

interface OptionProps {
  text: string
  image?: ImageSourcePropType
}

const Option: React.FC<OptionProps> = ({ text, image }) => {
  return (
    <Container>
      <IconWrapper>{image && <ItemIcon source={image} />}</IconWrapper>
      <ItemTextWrap>
        <ItemText>{text}</ItemText>
      </ItemTextWrap>
    </Container>
  )
}

export default Option
