import { Box, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import Background from './../img/index/fundo01.jpg'
import Mobile from './../img/index/fundo-mobile.jpg'
import { useEffect } from "react";

import Product from './../img/services/tell.png'
import FormElement from "../components/Form/Form";
import H2 from "../components/Texts/H2";
import H4 from "../components/Texts/H4";

export default function Serviços() {
  const [isLargerThan30Em] = useMediaQuery('(max-width:765px)')

  useEffect(() => {
    console.log(isLargerThan30Em)
  }, [isLargerThan30Em])

  return (
    <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
      <Box
        position='relative'
        zIndex={-1}
      >
        {
          isLargerThan30Em ? <Image src={Mobile} alt='background azul' /> : <Image src={Background} alt='background blue mobile' />
        }


        <Grid
          gridTemplateColumns={{ sm: '1fr', md: '60% 40%', lg: '55% 45%' }}
          w='100%'
          maxW={{ sm: '90%', lg: '80%', xl: '80%', '2xl': '70%' }}
          mx={{ sm: '5%', lg: '10%', xl: '10%', '2xl': '15%' }}
          position='absolute'
          bottom={{ base: '0px', sm: '-100px' }}>

          <Box
            margin='auto'
            maxW='85%'
          >
            <Text
              fontSize={{ base: '5.25vw', sm: '5.25vw', md: '2.25vw', xl: '2.5vw', '2xl': '35px' }}
              color='white'
              lineHeight={1}
              fontWeight='semibold'
              textAlign={{ base: 'center', md: 'start' }}
            >SISTEMA DE TELEFONIA
            </Text>
            <Text
              fontSize={{ base: '9vw', sm: '8vw', md: '3.9vw', xl: '3.5vw', '2xl': '55px' }}
              lineHeight={1}
              color='Green.500'
              my='1'
              fontWeight='semibold'
              textAlign={{ base: 'center', md: 'start' }}
            >
              PARA EMPRESAS
            </Text>
            <Text
              backgroundColor='Green.500'
              px='2'
              color='white'
              fontWeight='semibold'
              fontSize={{ md: '1.05vw', xl: '1.10vw', '2xl': '18px' }}
              width={{ md: '98%', xl: '88%', '2xl': '550px' }}
              textAlign='center'
            >
              PABX EM NUVEM - APARELHO - VIDEOCONFERÊNCIA
            </Text>
            <Text color='white' lineHeight={1.5} mt='4'
              textAlign={{ base: 'center', md: 'start' }}
            >
              Comece a cortar custos desnecessários em sua empresa, atualize a maneira
              que sua empresa se comunica! Gerenciamento de ramais com apenas um
              número, gravação em nuvem e suporte para video conferência integrada
              aos melhores apps dechamada.
            </Text>
          </Box>
          <Box
            maxW={{ sm: '80%', md: '100%' }}
            mt={{ base: '0%', sm: '140px', md: '350px', lg: '500px' }}
            m='0 auto'
          >
            <Image alt='atendente' src={Product} />
          </Box>
        </Grid>
      </Box>


      <Grid
        mt={{ base: '50px', md: '50px', lg: '50px', xl: '-50px', '2xl': '-100px' }}
        gridTemplateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr', xl: '1fr 1fr' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%', '2xl': '1344px' }}
        margin=' auto'
        gridColumnGap='10%'>
        <Box>
          <FormElement />
        </Box>
        <Box mt={{ base: '50px', md: '40px', lg: '0', xl: '60' }}>
          <H2 >12 MOTIVOS PARA MIGRAR SUA TELEFONIA PARA O VOIP</H2>
          <Text>
            Precisa do novo para a sua empresa, o melhor jeito é investir em
            quem oferece qualidade de verdade ao seu atendimento.
            A SIM Company possui tráfego próprio de terminação de chamadas
            garantindo mais qualidade nas suas ligações.
          </Text>
        </Box>
      </Grid>

    </main>
  )
}