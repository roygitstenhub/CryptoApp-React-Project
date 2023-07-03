import React from 'react'
import { VStack, Box, Heading,Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {CoinDetails} from './CoinDetails'



    const CardsCoin = ({ id,name, img,symbol,price, currencysymbol}) => {
  
        return (
            <>
            <Link to={`/Coin/${id}`}>
                <VStack
                    w='150px'
                    h={'150px'}
                    spacing={2}
                    alignItems={'center'}
                    justifyContent={'center'}
                    my={'25px'}
                    borderRadius={'8px'}
                    shadow={'0px 6px 8px #a4b0be'}
                    transition={'all 0.3s'}
                    css={{ 
                        "&:hover":{
                         transform:'scale(1.2)'
                    }
                }}
                    
                >
    
                    <img src={img} alt={name} width={'60px'} />
    
                    <Box>
                        <Heading fontSize={'12px'}
                            w={'100%'}
                            p='3px'
                            textAlign={'center'}
                            textTransform={'uppercase'}
                        >{symbol}</Heading>
                        <Heading
                            fontSize={'14px'}
                            textTransform={'uppercase'}
                            fontWeight={600}
                            w={'100%'}
                            textAlign={'center'}
                            noOfLines={1}
                        >{name}</Heading>
   
                        <Text textAlign={'center'}>{currencysymbol}{price}</Text>
    
                    </Box>
                </VStack>
            </Link>
            </>
     )
   }
 

export default CardsCoin