import { Container, HStack, VStack, Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader';
import ErrorShow from './ErrorShow';
import { Progress } from '@chakra-ui/react';

const Exchange = () => {
    let [Exchange, setExchange] = useState([]);
   let [Loading,setLoader]= useState(true);
   let [error,setError]=useState(false);

    useEffect(() => {
        function fetchData() {
           
                axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=60')
                .then((data)=>{
                    return  data    
                })
                .then((data) => {

                    setExchange(data.data);
                    setLoader(false)
                    // console.log(data)
                })
                .catch((err)=> {
                setError(true)
                setLoader(false)
                console.log(err)
                })
           
        }
       
        fetchData();

    }, [])

       if(error)
        {
           return <ErrorShow message={'fetching went wrong ! please check in console'}/>;
        }
   
    return (
     
            <Container maxW={'container.xl'}  height={'100%'}>
                <HStack
                    wrap={'wrap'}
                    p='12px'
                    alignItems={'center'}
                    justifyContent={'space-evenly'} 
                >
                    {
                        Loading ? (<Loader/>) : (
                         
                     Exchange.map((obj) => (
                        <Cards id={obj.id} name={obj.name} img={obj.image} url={obj.url} rank={obj.trust_score_rank} />
                    ))//map function END
                  
                        )//else block END
                    }



                   
                </HStack>


            </Container>
    )

}
//boject is de-structured [Cards]

const Cards = ({ name, img, url, rank }) => {
    return (

        <a href={url} target='blank'>
            <VStack
                w='150px'
                h={'150px'}
                spacing={4}
                alignItems={'center'}
                justifyContent={'center'}
                p={'10px'}
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

                <img src={img} alt={name} />

                <Box>
                    <Heading fontSize={'14px'}
                        w={'100%'}
                        textAlign={'center'}
                        p='2px'
                    >{rank}</Heading>
                    <Heading
                        fontSize={'16px'}
                        textTransform={'uppercase'}
                        fontWeight={600}
                        w={'100%'}
                        textAlign={'center'}
                        noOfLines={1}
                    >{name}</Heading>

                </Box>
            </VStack>
        </a>


    )
}



export default Exchange

