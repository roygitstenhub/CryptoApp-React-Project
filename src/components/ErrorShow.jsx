import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
} from '@chakra-ui/react';

const ErrorShow = ({message}) => {
  return (
    <VStack 
    w={['100%','50%']}
    h='100vh'
    m={'auto'}
    justifyContent={'center'} 
    mt={['0%','15%']}
    p='12px'
    cursor={'pointer'}
   fontSize={['12px','16px']}
    >
      <Alert status='error'  borderRadius={'20px'} w={['100%','100%']}>
    <AlertIcon />
      <AlertTitle>{message}</AlertTitle>   
  </Alert>
    </VStack>
  )
}

export default ErrorShow