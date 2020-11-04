import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import Dialog from 'react-native-dialog'
import Feather from 'react-native-vector-icons/Feather'
import NumberFormat from 'react-number-format'
import { subDays } from 'date-fns'

import Activity from '../../components/Activity'
import ActivitySuggestion from '../../components/ActivitySuggestion'
import Option from '../../components/Option'

import {
  Container,
  Header,
  HeaderRight,
  Balance,
  BalanceLabel,
  BalanceValue,
  SubHeader,
  Options,
  OptionType,
  OptionTypeText,
  OptionItems,
  MySeparator,
  ActivityItemsContainer,
  ActivityHeader,
  ActivityHeaderTitle,
  ActivityHeaderOptions,
  ActivityHeaderOption,
  ActivityHeaderOptionText,
  PayInput,
  PayInputText,
  ActivitySuggestions
} from './styles'

type OptionTypeProps = 'suggestions' | 'favorites'
type ActivityTypeProps = 'all' | 'mine'

const Home: React.FC = () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  const [balance, setBalance] = useState(0.0)
  const [code, setCode] = useState('')

  const [selectedOptionType, setSelectedOptionType] = useState<OptionTypeProps>(
    'suggestions'
  )
  const [selectedActivityType, setSelectedActivityType] = useState<
    ActivityTypeProps
  >('all')

  const showKlapauciusDialog = useCallback(() => {
    setDialogVisible(true)
  }, [])

  const applyCode = useCallback(() => {
    if (code === 'KLAPAUCIUS') setBalance(999999999.99)
    setDialogVisible(false)
  }, [code])

  return (
    <>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Hello, darling</Dialog.Title>
        <Dialog.Input
          label="Insert your code here"
          onChangeText={value => setCode(value)}
        />
        <Dialog.Button
          label="Aplicar"
          onPress={() => {
            applyCode()
          }}
        />
      </Dialog.Container>

      <Container>
        <Header>
          <Feather name="camera" size={20} color="#13A128" />

          <Balance>
            <BalanceLabel>Meu Saldo</BalanceLabel>
            <NumberFormat
              value={balance}
              displayType={'text'}
              thousandSeparator="."
              prefix={'R$ '}
              decimalScale={2}
              decimalSeparator=","
              fixedDecimalScale
              renderText={formattedValue => (
                <BalanceValue onLongPress={showKlapauciusDialog}>
                  {formattedValue}
                </BalanceValue>
              )}
            />
          </Balance>

          <HeaderRight>
            <Feather
              style={{ marginRight: 10 }}
              name="gift"
              size={20}
              color="#13A128"
            />
            <Feather name="percent" size={20} color="#13A128" />
          </HeaderRight>
        </Header>

        <PayInput editable={false}>
          <Feather name="search" size={20} color="black" />
          {'   '}
          <PayInputText>Quem você quer pagar?</PayInputText>
        </PayInput>

        <SubHeader>
          <Options>
            <OptionType onPress={() => setSelectedOptionType('suggestions')}>
              <OptionTypeText selected={selectedOptionType === 'suggestions'}>
                Sugestões
              </OptionTypeText>
            </OptionType>

            <OptionType onPress={() => setSelectedOptionType('favorites')}>
              <OptionTypeText selected={selectedOptionType === 'favorites'}>
                Favoritos
              </OptionTypeText>
            </OptionType>
          </Options>

          <OptionItems>
            {selectedOptionType === 'suggestions' &&
              [...Array(10).keys()].map(index => (
                <Option key={index} text={`Item ${index}`} />
              ))}

            {selectedOptionType === 'favorites' &&
              [...Array(10).keys()].map(index => (
                <Option key={index} text={`Favorite Item ${index}`} />
              ))}
          </OptionItems>
        </SubHeader>

        <MySeparator />

        <ActivityHeader>
          <ActivityHeaderTitle>Atividades</ActivityHeaderTitle>

          <ActivityHeaderOptions>
            <ActivityHeaderOption
              onPress={() => setSelectedActivityType('all')}
            >
              <ActivityHeaderOptionText
                selected={selectedActivityType === 'all'}
              >
                Todos
              </ActivityHeaderOptionText>
            </ActivityHeaderOption>

            <ActivityHeaderOption
              onPress={() => setSelectedActivityType('mine')}
            >
              <ActivityHeaderOptionText
                selected={selectedActivityType === 'mine'}
              >
                Minhas
              </ActivityHeaderOptionText>
            </ActivityHeaderOption>
          </ActivityHeaderOptions>
        </ActivityHeader>

        <ActivityItemsContainer>
          {selectedActivityType === 'all' &&
            [...Array(20)].map((_, index) => {
              const payer = '@joh.doe'
              const receiver = '@someone_else'
              const description =
                'Velit ea veniam ut sunt nisi ut sunt esse veniam incididunt.'
              const value = Math.random() * 99
              const date = subDays(new Date(), index)
              const comments = Math.floor(Math.random() * 999)
              const likes = Math.floor(Math.random() * 999)

              if (index === 1) {
                return (
                  <View key={index}>
                    <ActivitySuggestions>
                      <ActivitySuggestion
                        text="Saiba onde pagar lojas online com PicPay"
                        style={{
                          backgroundColor: '#F7FEF9',
                          marginRight: 5,
                          marginTop: 10
                        }}
                      />
                      <ActivitySuggestion
                        text="Compre créditos para iFood"
                        style={{
                          backgroundColor: '#F3FBFE',
                          marginRight: 5,
                          marginTop: 10,
                          marginBottom: 3
                        }}
                      />
                      <ActivitySuggestion
                        text="Valide sua conta no PicPay"
                        style={{
                          backgroundColor: '#F8F6FF',
                          marginRight: 5,
                          marginTop: 10
                        }}
                      />
                      <ActivitySuggestion
                        text="Cadastre sua chave Pix no PicPay"
                        textColor="#FFF"
                        style={{
                          backgroundColor: '#377C4A',
                          marginRight: 5,
                          marginTop: 10
                        }}
                      />
                    </ActivitySuggestions>
                    <Activity
                      key={index}
                      payer={payer}
                      receiver={receiver}
                      description={description}
                      value={value}
                      date={date}
                      comments={comments}
                      likes={likes}
                    />
                  </View>
                )
              }

              return (
                <Activity
                  key={index}
                  payer={payer}
                  receiver={receiver}
                  description={description}
                  value={value}
                  date={date}
                  comments={comments}
                  likes={likes}
                />
              )
            })}

          {/* {selectedActivityType === 'mine' &&
            [...Array(20)].map((_, index) => <Activity key={index} />)} */}
        </ActivityItemsContainer>
      </Container>
    </>
  )
}

export default Home
