import { Button,HStack,VStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {HamburgerIcon,CloseIcon} from '@chakra-ui/icons';
import {motion} from 'framer-motion'

const Header = () => {
  let [displayNav,setdisplayNav] = useState('none')
  return (
   <>
    <HStack
     w='100%' 
     p='16px'
     position={'sticky'}
     top={0}
     spacing={6}
     alignItems={'flex-start'}
     justifyContent={'flex-end'}
     background={'blackAlpha.900'}
     display={['none','none','flex','flex']}
     >
    
     
    <Button
    p={'12px 25px'}
    background={'black'}
    color={'white'}
    textTransform={'uppercase'}
    >
    <Link to='/'>Home</Link>
    </Button>

    <Button
    p={'12px 25px'}
    background={'black'}
    color={'white'}
    textTransform={'uppercase'}
    alignSelf={"stretch"}

    >
     <Link to='/Exchange'>Exchange</Link>
    </Button>


    <Button
    p={'15px 25px'}
    // variant={'outline'}
    color={'white'}
    textTransform={'uppercase'}
    background={'black'}
    >
     <Link to='/Coin'>coin</Link>
    </Button>

    </HStack>
   
   {/* Hemburger Icon  */}
   <HamburgerIcon
  pos={'fixed'}
  w={'50px'}
  h={'50px'}
  top={'16px'}
  right={'16px'}
  cursor={'pointer'}
  color={'grey'}
  display={['flex','flex','none','none']}
  onClick={()=>{setdisplayNav('flex')}}
  zIndex={10}
   />


   {/* mobile and tablet view */}
  
<motion.div
w='100%'
h='100%'
animate={ {y:0}}
initial={{y:-800}}
transition={{duration:2.5}}

>
<VStack
     w='70%' 
     h={'50vh'}
     p='20px'
     position={'absolute'}
     top={'0px'}
     spacing={10}
     background={'black'}
     display={[displayNav,displayNav,'none','none']}
     zIndex={10}
     >

  {/* closing icon  */}
  <CloseIcon 
   color={'white'}
   pos={'relative'} 
   w={'25px'} 
   h={'25px'}
   right={'-100px'} 
   onClick={()=>{setdisplayNav('none')}}
    />

    <Button
    p={'12px 25px'}
    background={'black'}
    color={'white'}
    textTransform={'uppercase'}
    alignSelf={'stretch'}
    >
    <Link to='/'>Home</Link>
    </Button>

    <Button
    p={'12px 25px'}
    background={'black'}
    color={'white'}
    alignSelf={'stretch'}
    textTransform={'uppercase'}
    >
     <Link to='/Exchange'>Exchange</Link>
    </Button>


    <Button
    p={'12px 25px'}
    // variant={'outline'}
    color={'white'}
    textTransform={'uppercase'}
    background={'black'}
    alignSelf={'stretch'}
    >
     <Link to='/Coin'>coin</Link>
    </Button>

    </VStack>
</motion.div>
    </>
  )
}

export default Header