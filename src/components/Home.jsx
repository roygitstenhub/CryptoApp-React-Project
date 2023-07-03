import React from 'react'
import { Box, Image, Heading} from '@chakra-ui/react'
import Btc from "../asset/btc.png";
// import { motion } from 'framer-motion';
const Home = () => {
  return (
    <>
      <Box width='full' h={'90vh'} background={'black'}>
        <Image src={Btc}
          alt=""
          srcset=""
          w={'full'}
          h={'90vh'}
          objectFit={'contain'} 
          color={'silver'}
          />
  
          
        <Heading
          objectFit={'contain'}
          textAlign={'center'}
          fontWeight={'300'}
          color={'white'}
          mt={'-50px'}
          textShadow={'0px 2px 5px grey'}
          fontFamily={'revert-layer'}
        > THE FUTURE OF NEW AGES</Heading>

      </Box>
    </>
  )
}

export default Home;