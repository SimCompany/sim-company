import { Box, Grid, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import Atendente from './../img/index/sistema-atendentes-call-center.png'
import Background from './../img/index/fundo01.jpg'
import Mobile from './../img/index/fundo-mobile.jpg'
import FormElement from "../components/Form/Form";
import H2 from "../components/Texts/H2";

export default function Contato() {
  const mobileResolut = useBreakpointValue({
    md: true,
    lg: false
  })

  return (
    <Box
      position='relative'
      zIndex={-1}
      pb={{ base: '1250px', sm: '1000px', md: '1100px', lg: '480px', '2xl': '200px' }}
    >
      {
        mobileResolut ? <Image src={Mobile} alt='background azul' /> : <Image src={Background} alt='background blue' />
      }


      <Grid
        maxW={{ '2xl': '1344px' }}
        margin={{ base: '5%', md: '10%', lg: '10%', '2xl': '15%' }}
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        position='absolute'
        bottom={{ base: '2vw', sm: '0px', md: '-150px', lg: '-180px', '2xl': '-300px' }}
      >
        <Box
          mr={{ md: '0px', lg: '10%' }}
        >
          <H2
            color='white'
            mb='25px'
          >Gostaria de falar com nossa equipe tecnica ?</H2>
          <Text color='white'>(11) 99999-9999</Text>
          <Text color='white'>(11) 99999-9999</Text>
          <Text color='white'>email@gmail.com</Text>
          <Text color='white'>email@gmail.com</Text>

          <Text color='white' my='40px'>Endereço: Rua Direita N°7 - SP CEP 7777-077</Text>

          <Box h={{ base: '200px', sm: '350px' }} mt='25px'>
            <iframe style={{ width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7309.026665820644!2d-46.75947564816283!3d-23.657593744676134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53c6a003d321%3A0xab6c3d1dba73f4ec!2sCondom%C3%ADnio%20Conjunto%20Residencial%20Buena%20Vista!5e0!3m2!1spt-BR!2sbr!4v1661659201239!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
          </Box>
        </Box>
        <Box

          mt={{ base: '50px', lg: '0px' }}
          zIndex='300'
        >
          <FormElement />
        </Box>
      </Grid>
    </Box>
  )
}