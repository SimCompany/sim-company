import { Box, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import Atendente from './../img/index/sistema-atendentes-call-center.png'
import Background from './../img/index/fundo01.jpg'
import Mobile from './../img/index/fundo-mobile.jpg'
import FormElement from "../components/Form/Form";
import H2 from "../components/Texts/H2";

export default function Contato() {
  const [isLargerThan30Em] = useMediaQuery('(max-width:765px)')

  return (
    <Box
      mb={{ base: '400px', sm:'500px',md:'1200px', lg: '500px', '2xl': '400px' }}
      position='relative'
      zIndex={-1}
    >
      {
        isLargerThan30Em ? <Image src={Mobile} alt='background azul' /> : <Image src={Background} alt='background blue mobile' />
      }


      <Grid
        gridTemplateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 55%' }}
        w='100%'
        maxW={{ sm: '90%', lg: '80%', xl: '80%', '2xl': '1344px' }}
        mx={{ sm: '5%', lg: '10%', xl: '10%', '2xl': '15%' }}
        position='absolute'
        columnGap='5%'
        bottom={{ base: '-450px', md: '-1000px', lg:'-450px', xl: '-450px', '2xl': '-340' }}
      >


        <Box
          pt={{ md: '8', lg: '0%', xl: '4%', '2xl': '0px' }}
          mt={{ base: '50px', '2xl': '40px' }}
          mb={{ md: '50px' }}
          m='start'
          maxW='90%'
        >
          <H2 color='white' 
          mb='25px'
          textAlign={{md:'center', lg:'start'}}
          >Gostaria de falar com nossa equipe tecnica ?</H2>
          <Text color='white'>(11) 99999-9999</Text>
          <Text color='white'>(11) 99999-9999</Text>
          <Text color='white'>email@gmail.com</Text>
          <Text color='white'>email@gmail.com</Text>

          <Text color='white' my='40px'>Endereço: Rua Direita N°7 - SP CEP 7777-077</Text>

          <Box h='350px' mt='25px'>
            <iframe style={{ width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7309.026665820644!2d-46.75947564816283!3d-23.657593744676134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53c6a003d321%3A0xab6c3d1dba73f4ec!2sCondom%C3%ADnio%20Conjunto%20Residencial%20Buena%20Vista!5e0!3m2!1spt-BR!2sbr!4v1661659201239!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
          </Box>
        </Box>
        <Box
          mt={{sm:'40px', md:'0px' }}
        >
          <FormElement />
        </Box>
      </Grid>
    </Box>
  )
}