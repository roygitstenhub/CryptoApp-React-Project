import {
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  RadioGroup,
  HStack, Radio,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Progress,
  Spacer,
  Badge,
} from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import ErrorShow from './ErrorShow';
// import { json } from 'react-router-dom';





const CoinDetails = () => {
  let [coin, setCoin] = useState({}); //No array , but object
  let [Loading, setLoader] = useState(true);
  let [error, setError] = useState(false);
  let [currency, setCurrency] = useState('inr')
  // let [page,setPage]= useState('1')


  let symbolCurr = currency === 'inr' ? "₹" : currency === 'usd' ? "$" : "€";
  const Params = useParams()

  useEffect(() => {
    function fetchCoin() {
      axios.get(`https://api.coingecko.com/api/v3/coins/${Params.id}`)
        .then((data) => {
          return data
        })
        .then((data) => {
          setCoin(data.data);
          setLoader(false)
          console.log(data)
        })
        .catch((err) => {
          setError(true)
          setLoader(false)
          console.log(err)
        })

    }

    fetchCoin();

  }, [Params.id]);

  if (error) {
    return <ErrorShow message={'Error Occured While Fetching Coin'} />
  }
  return (
    <Container maxW={'container.lg'} h='100%' p='16px'>
      {
        Loading ? (<Loader />) : (

          <VStack
            padding={'10px'}
            margin={'auto'}
            spacing={8}
            justifyContent={'centre'}
            alignItems={'flex-start'}
          >

            <img src={coin.image.large} alt="" width={'120px'} />
            <RadioGroup value={currency} onChange={setCurrency} >
              <HStack spacing={8}>
                <Radio value='inr'>IND</Radio>
                <Radio value='usd'>USD</Radio>
                <Radio value='eur'>EURO</Radio>
              </HStack>
            </RadioGroup>

            <Stat>
              <VStack spacing={6} alignItems={'flex-start'}>

                <StatLabel textTransform={'uppercase'} fontWeight={'600'} fontSize={'14px'}>{coin.name}
                </StatLabel>

                <StatNumber color='green' fontWeight={'600'}>{symbolCurr} {coin.market_data.current_price[currency]}</StatNumber>

                <StatLabel>symbol : {coin.symbol}</StatLabel>




                
             <Stat> 
             <Text color={'blue.800'} fontSize={'18px'}>Price change percentage :</Text>

                  <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? ("increase") : ("decrease")}/><Badge>24h: {coin.market_data.price_change_percentage_24h}%</Badge>


                  <StatArrow type={coin.market_data.price_change_percentage_14d > 0 ? ("increase") : ("decrease")}/><Badge>14d: {coin.market_data.price_change_percentage_14d}%</Badge>  
                  
                  <StatArrow type={coin.market_data.price_change_percentage_30d > 0 ? ("increase") : ("decrease")} /><Badge>30d: {coin.market_data.price_change_percentage_30d}%</Badge>

                  
              </Stat>
             

             
              </VStack>
            </Stat>


            <Progress colorScheme='green' size='lg' value={55} w='full' />
            <HStack width={'full'}>
              <Text background={'green.200'}>{coin.market_data.high_24h[currency]}%</Text>
              <Spacer />
              <Text background={'red.200'}>{coin.market_data.low_24h[currency]}%</Text>
            </HStack>


          </VStack>

        )

      }
    </Container>
  )
}

export default CoinDetails