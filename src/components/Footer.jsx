import { Heading, VStack,Text,Stack } from '@chakra-ui/react'
import React from 'react'
import { Avatar } from '@chakra-ui/react';
import founder from '../asset/founder.jpg'

const Footer = () => {
  return (
    <Stack w={'full'} h='100%' bgColor={'black'} p={'16px'} justifyContent={'space-between'} direction={['column','row']} color={'white'}  spacing={8}>

       <VStack w={['100%','lg']} alignItems={['center','flex-start']}  spacing={4} p={'8px'} mt={'12px'}>
        
       <Heading fontSize={'22px'} textTransform={'capitalize'} fontWeight={'400'} mt={'12px'}>About Us:</Heading>

       <Text textTransform={'capitalize'} fontStyle={'italic'} textAlign={['center','start']}> We provide you the best crypto app for accessing the real time information about crypto currency</Text>
      
       </VStack>
       
       <VStack w={['100%','lg']} alignItems={['center','flex-end']}>
       <Avatar width={'100px'} height={'100px'} src={founder} />
       <Text>Our Founder</Text>

       </VStack>

    </Stack>
    
  )
}

export default Footer