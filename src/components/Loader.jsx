import { Box, Heading,Spinner, VStack } from '@chakra-ui/react'
import React from 'react'


const Loader = () => {
  return (
   <>
   <VStack
   justifyContent={'center'}
   h={'80vh'}
   >
   <Box><Spinner size={'xl'}/></Box>
   </VStack>
   </>
  )
}

export default Loader