import React from 'react'
import { ImageSourcePropType, ViewProps } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {
  Container,
  CloseSuggestion,
  SuggestionText,
  SuggestionImageContainer,
  SuggestionImage
} from './styles'

interface ActivitySuggestionProps extends ViewProps {
  text: string
  textColor?: string
  image?: ImageSourcePropType
}

const ActivitySuggestion: React.FC<ActivitySuggestionProps> = ({
  text,
  textColor = '#000',
  image,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <CloseSuggestion>
        <Feather name="x" size={14} />
      </CloseSuggestion>

      <SuggestionText style={{ color: textColor }}>{text}</SuggestionText>
      <SuggestionImageContainer>
        {image && <SuggestionImage source={image} />}
      </SuggestionImageContainer>
    </Container>
  )
}

export default ActivitySuggestion
