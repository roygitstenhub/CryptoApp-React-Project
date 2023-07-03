import { Container, HStack, VStack, Box, Heading,Text,Link, Button, RadioGroup,Radio } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader';
import ErrorShow from './ErrorShow';
import  CardsCoin from './CardsCoin'




const Coin = () => {
  let [Coins, setCoin] = useState([]);
  let [Loading,setLoader]= useState(true);
  let [error,setError]=useState(false);
  let [currency,setCurrency]=useState('inr')
  let [page,setPage]= useState('1')

  let currSym= currency === 'inr'? "₹" : currency === 'usd'? "$" : "€";
  let pageBtn=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

  function changepage (num)
  {
     setPage(num)
  }
 
   useEffect(() => {
       function fetchData() {
     axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`)
               .then((data)=>{
                   return  data    
               })
               .then((data) => { 
                   setCoin(data.data);
                   setLoader(false)
                //    console.log(data)
               })
               .catch((err)=> {
               setError(true)
               setLoader(false)
            //    console.log(err)
               })
          
       }
      
       fetchData();

   }, [page,currency])
   
      if(error)
       {
          return <ErrorShow message={'fetching went wrong ! please check in console'}/>;
       }
  return (
         <> 
             <Container maxW={'container.xl'}  height={'100%'}>
             
             <RadioGroup value={currency} onChange={setCurrency}>
               <HStack spacing={4} p={'8px'}>
                <Radio value='inr'>IND</Radio>
                <Radio value='usd'>USD</Radio>
                <Radio value='eur'>URO</Radio>
               </HStack>
             </RadioGroup>


                 <HStack
                     wrap={'wrap'}
                     p='12px'
                     alignItems={'center'}
                     justifyContent={'space-evenly'} 
                 >
                     {
                         Loading ? (<Loader/>) : (
                          
                      Coins.map((obj) => (
                         <CardsCoin id={obj.id} name={obj.name} img={obj.image} url={obj.url} symbol={obj.symbol} price={obj.current_price} currencysymbol={currSym}/>
                     ))//map function END
 
                         )//else block END
                     }
                    
                 </HStack>

                 <HStack p='16px'  overflowX={'auto'} w='full' spacing={'5'} > 
                   {
                    pageBtn.map((num,index)=>(
                            <Button 
                    width={'50px'}
                    height={'50px'}
                    background={'blackAlpha.900'}
                    onClick={()=>{changepage(num)}}
                    color={'white'}
                    borderLeftRadius={'50px'}
                    border
                    fontSize={'16px'}
                    my={'12px'}
                    p='4px'
                    >{index+1}</Button>
                    ))
                   }
                 </HStack>
             </Container>
           </>
     )
 
 }
 //boject is de-structured [Cards]
 
//  const CardsCoin = ({ id,name, img,symbol,price, currencysymbol}) => {
  
//      return (
 
//          <a href={`/CoinDetails/${id}`}>
//              <VStack
//                  w='150px'
//                  h={'150px'}
//                  spacing={2}
//                  alignItems={'center'}
//                  justifyContent={'center'}
//                  my={'25px'}
//                  borderRadius={'8px'}
//                  shadow={'0px 6px 8px #a4b0be'}
//                  transition={'all 0.3s'}
//                  css={{ 
//                      "&:hover":{
//                       transform:'scale(1.2)'
//                  }
//              }}
                 
//              >
 
//                  <img src={img} alt={name} width={'60px'} />
 
//                  <Box>
//                      <Heading fontSize={'12px'}
//                          w={'100%'}
//                          p='3px'
//                          textAlign={'center'}
//                          textTransform={'uppercase'}
//                      >{symbol}</Heading>
//                      <Heading
//                          fontSize={'14px'}
//                          textTransform={'uppercase'}
//                          fontWeight={600}
//                          w={'100%'}
//                          textAlign={'center'}
//                          noOfLines={1}
//                      >{name}</Heading>

//                      <Text textAlign={'center'}>{currencysymbol}{price}</Text>
 
//                  </Box>
//              </VStack>
//          </a>
//   )
// }

export default Coin