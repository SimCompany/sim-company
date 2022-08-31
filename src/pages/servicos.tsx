import { Box, Flex, Grid, GridItem, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import Background from './../img/index/fundo01.jpg'
import Mobile from './../img/index/fundo-mobile.jpg'
import { useEffect } from "react";

import Product from './../img/services/tell.png'
import FormElement from "../components/Form/Form";
import H2 from "../components/Texts/H2";
import H4 from "../components/Texts/H4";
import ItemMotives from "../components/Motives/ItemMotives";
import ButtonChakra from "../components/Button/Button";

import CallCenter from './../img/services/call-center.jpg'
import H3 from "../components/Texts/H3";

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
          isLargerThan30Em ?
            <Image src={Mobile} alt='background azul' /> :
            <Image src={Background} alt='background blue mobile' />
        }


        <Grid
          gridTemplateColumns={{ sm: '1fr', md: '50% 40%', lg: '45% 45%' }}
          maxW={{ sm: '90%', md: '80%', '2xl': '1344px' }}
          mx={{ base: '5%', md: '10%', '2xl': '15%' }}

          position='absolute'
          bottom={{ base: '0px', sm: '-100px' }}
          gridColumnGap='10%'
        >


          <Box
            margin='auto'
            maxW='100%'
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
              fontSize={{ base: '3vw', md: '1.0vw', xl: '1.10vw', '2xl': '18px' }}
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
            maxW={{ base: '70%', sm: '80%', md: '100%' }}
            mt={{ base: '0%', sm: '50px', md: '150px', lg: '500px' }}
            py={{ base: '0px', sm: '100px', md: '120px', lg: '0px' }}
            m='0 auto'
          >
            <Image alt='atendente' src={Product} />
          </Box>
        </Grid>
      </Box>

      <Grid
        mt={{ base: '50px', md: '50px', lg: '50px', xl: '-50px', '2xl': '-100px' }}
        gridTemplateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr', xl: '1fr 1fr' }}
        maxW={{ base: '90%', md: '80%', '2xl': '1344px' }}
        mx={{ base: '5%', md: '10%', '2xl': '15%' }}
        m='50px auto'
        gridColumnGap='10%'
      >
        <Box>
          <FormElement />
        </Box>
        <Box mt={{ base: '50px', md: '40px', lg: '100', xl: '60' }}>
          <H2 mb='10px'>12 MOTIVOS PARA MIGRAR SUA TELEFONIA PARA O VOIP</H2>
          <Text>
            Precisa do novo para a sua empresa, o melhor jeito é investir em
            quem oferece qualidade de verdade ao seu atendimento.
            A SIM Company possui tráfego próprio de terminação de chamadas
            garantindo mais qualidade nas suas ligações.
          </Text>
        </Box>
      </Grid>

      <Grid
        maxW='1344px'
        justifyItems='center'
        mx={{ base: '5%', md: '10%', '2xl': '15%' }}
        templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr' }}
        templateRows={{ base: '1fr 1fr' }}

        rowGap='20px'
      >
        <ItemMotives
          number={1}
          description='Um dos principais diferenciais é poder atender até 1.000 ligações simultâneas apenas com um número' />
        <ItemMotives
          number={2}
          description='Solução completamente em nuvem,com 11 datacenters espalhados pelo mundo.' />
        <ItemMotives
          number={3}
          description='Total segurança, com codec dinâmico OPUS. Jive View para acompanhar a latência em tempo real.' />
        <ItemMotives
          number={4}
          description='Utilize somente 90kbps por ligação completada dentro da estrutura.' />
        <ItemMotives
          number={5}
          description='Um dos principais diferenciais é poder atender até 1.000 ligações simultâneas apenas com um número' />
        <ItemMotives
          number={6}
          description='Um dos principais diferenciais é poder atender até 1.000 ligações simultâneas apenas com um número' />
        <ItemMotives
          number={7}
          description='Solução completamente em nuvem,com 11 datacenters espalhados pelo mundo.' />
        <ItemMotives
          number={8}
          description='Total segurança, com codec dinâmico OPUS. Jive View para acompanhar a latência em tempo real.' />
        <ItemMotives
          number={9}
          description='Utilize somente 90kbps por ligação completada dentro da estrutura.' />
        <ItemMotives
          number={10}
          description='Um dos principais diferenciais é poder atender até 1.000 ligações simultâneas apenas com um número' />
        <ItemMotives
          number={11}
          description='Utilize somente 90kbps por ligação completada dentro da estrutura.' />
        <ItemMotives
          number={12}
          description='Um dos principais diferenciais é poder atender até 1.000 ligações simultâneas apenas com um número' />
      </Grid>

      <Flex
        flexDirection='column'
        alignItems='center'
        bgColor='Green.300'
        py='40px'
        px='10%'
        textAlign='center'
        my='85px'
      >
        <H2 color='white' mb='6px'>Realize uma cotação e ganhe o aparelho!</H2>
        <Text color='white'>Venha fazer uma cotação para sua empresa e ganhe o aparelho de IP + Ramal confira agora e garanta o seu!</Text>
        <ButtonChakra p='28px 48px' mt='20px'>
          GARANTIR PROMOÇÃO
        </ButtonChakra>
      </Flex>

      <Grid
        mt={{ base: '150px', md: '150px' }}
        templateColumns={{ md: '1fr', xl: '1fr 1fr' }}
        columnGap={{ md: '0', xl: '5%' }}
        mx={{ base: '5%', md: '10%' }}
      >
        <GridItem>
          <Image src={CallCenter} />
        </GridItem>
        <GridItem
          mr={{ base: '5%', md: '10%', '2xl': '15%' }}
        >
          <Stack spacing={{ base: '20px', xl: '40px' }}>
            <Box>
              <H4 mt={{ base: '40px', xl: '0px' }}>Todos os recursos que você espera.</H4>
              <Text>Mais de 100 recursos entre seu VoIP na nuvem e sua Web, áudio e vídeoconferência.</Text>
            </Box>

            <Box>
              <H4>Sem Fio</H4>
              <Text>Gateways, Controladores, Accesspoint sem fio, Serviços de localização e Access Points remotos</Text>
            </Box>

            <Box>
              <H4>Switches</H4>
              <Text>Switches de acesso para empresas, Switches de Campus, Núcleo e data center.</Text>
            </Box>

            <Box>
              <H4>SEGURANÇA</H4>
              <Text>Soluções de VPN para acesso remoto seguro, Serviços de segurança de rede nativo da nuvem, Elimine a expansão de VLAN, Visibilidade do cliente com IA, Controle de acesso à rede.</Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>

      <Flex
        mt='100px'
        px={{ base: '5%', md: '10%', '2xl': '15%' }}
        py={{ base: '40px', md: '50px', '2xl': '60px' }}
        flexDirection='column'
        alignItems='center'
        bgColor='Green.300'
      >
        <H4 color='white'>Aproveite!</H4>
        <Text color='white' textAlign='center'>Não deixe para depois, realize uma cotação com um de nossos</Text>
        <Text color='white' textAlign='center'>especialistas e comece a mudar o rumo dos seus negócios</Text>

        <ButtonChakra p='26px 60px' mt='20px'>REALIZAR COTAÇÃO</ButtonChakra>
      </Flex>

      <Box
        mx={{ base: '5%', md: '10%', '2xl': '15%' }}
        maxW={{ '2xl': '1344px' }}
        mt='100px'>
        <H2 textAlign='center'>Simples mudanças grandes resultados</H2>
        <Text textAlign='center'>Como a mudança pode te auxiliar e melhorar sua rotina de trabalho</Text>

        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          maxW={{ '2xl': '1344px' }}
          mx={{ base: '5%', lg: '10%', '2xl': 'auto' }}
          columnGap='5%'
          my='50px'
        >
          <Stack spacing={8}>
            <Box>
              <H4>Acess Points Interno</H4>
              <Text>Quando o desempenho e a simplicidade são importantes,
                os APs da Aruba oferecem suporte para recursos de IA, os mais
                recentes padrões Wi-FI 6 e vários fatores de forma para implantação
                em qualquer ambiente. Os modelos robustos também atendem
                aos requisitos de extrema temperatura e umidade.</Text>
            </Box>
            <Box>
              <H4>Automatize as operações de segurança de rede e aprimore a proteção zero Trusta</H4>
              <Text>Abordagens manuais tornam-se impraticáveis à medida que as redes
                crescem em complexidade e escala. O Aruba Central Net Conductor
                simplifica as operações e melhora a segurança oferecendo controle de
                acesso contínuo baseado em identidade nos domínios da rede.</Text>
            </Box>
            <Box>
              <H4>O rastreamento de contatos coloca segurança em primeiro lugar</H4>
              <Text>O Wi-Fi e os serviços de localização ajudam o retorno a o trabalho ser mais
                seguro. Com mapeamento de densidade e rastreamento de contatos, os
                funcionários e clientes podem minimizar o impacto do vírus.</Text>
            </Box>
          </Stack>

          <Stack spacing={8}>
            <Box>
              <H4>Acess Points Externos</H4>
              <Text>Os APs externos da Aruba fornecem conectividade contínua para grandes
                espaços públicos, bem como locais pop-up e docas de carregamento.
                As opções sem fio ponto a ponto fornecem backhaul de malha Wi-Fi e
                velocidade de 60GHz para edifícios adjacentes.</Text>
            </Box>
            <Box>
              <H4>Facilite o trabalho remoto</H4>
              <Text>Trabalhar em casa ficou mais fácil. O funcionário recebe um Access Point da
                Aruba, o conecta, baixa da nuvem uma configuração e está pronto, com conectividade segura e confiável</Text>
            </Box>
            <Box>
              <H4>Redes para o data center em desenvolvimento</H4>
              <Text>Redes para o data center em desenvolvimento.</Text>
            </Box>
          </Stack>
        </Grid>
      </Box>

      <Box
        py='80px'
        px={{ base: '5%', md: '10%', '2xl': '15%' }}
        my={{ base: '100px', md: '150px' }}
        bgColor='Green.300'
      >
        <H2 textAlign='center' mb='50px' color='white' >Perguntas frequentes</H2>
        <Stack
          spacing={8}
          maxW={{ '2xl': '1344px' }}
          m='0 auto'>
          <Box>
            <H4 color='white'>QUAL VELOCIDADE DA INTERNET NECESSÁRIA PARA USAR VOIP?</H4>
            <Text color='white'>Cada ramal utiliza uma médiade 90kbps de download e upload por ligação, assim  tendo uma internet com no minímo 10 mega  sua empresa podera usar até 10 ramais sem perca de qualidade em  suas chamadas.
            </Text>
          </Box>

          <Box>
            <H4 color='white'>Minha empresa precisa de VOIP?</H4>
            <Text color='white'>A evolução da tecnologia vem acontecendo conforme à necessidade de maior agilidade na comunicação, associada à redução de custos com manutenção,estrutura e a centralização das informações. Se sua empresa está em um nível onde usa 2 ou mais atendentes, sim  amigração irá te trazer economia e agilidade em seus processos diários.
            </Text>
          </Box>

          <Box>
            <H4 color='white'>Como funciona o PABX em nuvem?</H4>
            <Text color='white'>O sistema PABX em nuvem faz o armazenamento de dados em nuvem ao invés de ficar hospedado em servidores da empresa. Sua tecnologia utiliza softwares
              instalados nos computadores, ele fica armazenado na nuvem e pode ser acessado pela internet, por meio do navegador e apps.
            </Text>
          </Box>

          <Box>
            <H4 color='white'>Posso realizar a portabilidade de um número? qual é o prazo?</H4>
            <Text color='white'>Sim, você pode solicitar a portabilidade de um número ou solicitar um novo. O prazo para a portabilidade ira depender do provedor a o qual o número está
              registrado. Entretanto a média pode ser de 2 a 5 dias úteis.
            </Text>
          </Box>
        </Stack>
      </Box>

      <Flex
        mx={{ base: '5%', md: '10%', '2xl': '15%' }}
        maxW={{ '2xl': '1344px' }}
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <H3 textAlign='center'>Garanta seu sucesso com quem entende</H3>
        <Text textAlign='center'>Fale com um dos nossos especialistas online</Text>
        <ButtonChakra mt='20px' px='120px' py='26px'>CHAMAR</ButtonChakra>
      </Flex>
    </main>
  )
}