import { Box, Button, Checkbox, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import ButtonChakra from "../Button/Button";
import H2 from "../Texts/H2";
import InputForm from "./InputForm";



export default function FormElement() {

  return (
    <Flex as='form' w='100%' flexDirection='column' bgColor='Green.300' p='8'>
      <Box>
        <H2 color='white' textAlign='center'>Gostaria de receber uma proposta para o seu negócio?</H2>

        <Text textAlign='center' color='white' my='4'>A Sin Company© ira te auxiliar com as melhores proposta e entregara um suporte completo desde a contratação até a instalação e suporte com equipamentos.</Text>
      </Box>
      <InputForm name='name' placeholder="Nome Completo" mb='4' />
      <Box display='grid' gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }} gridColumnGap='4' gridRowGap='4'>
        <InputForm name='email' placeholder='Email' />
        <InputForm name='phone' placeholder='Telefone' />
        <InputForm name='state' placeholder='Estado' />
        <InputForm name='city' placeholder='Cidade' />
        <InputForm name='branches' placeholder='Quantidade de ramais' />
        <InputForm name='company_namy' placeholder='Nome da empresa' />
      </Box>
      <Textarea mt='4' focusBorderColor="Blue.800" variant='outline' placeholder="Conte um pouco sobre sua procura, iremos preparar um orçamento especial para você!" bgColor='white' />

      <Flex alignItems='start' mt='6'>
        <Checkbox my='5' color='white' colorScheme='red' />
        <Text color='white' mt='4' ml='2'>
          Concordo em permitir que a Sin Company tenha acesso aos meus dados para me responder com propostas promocionais referente ao meu pedido.
        </Text>
      </Flex>

      <Flex alignItems='start'>
        <Checkbox my='5' color='white' colorScheme='red' />
        <Text color='white' mt='4' ml='2'>
          concordo com os termos de uso e política de privacidade.
        </Text>
      </Flex>

      <ButtonChakra mt='6' py='8'>
        OBTER COTAÇÃO
      </ButtonChakra>

    </Flex>
  )
}