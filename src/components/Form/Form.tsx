import { Box, Checkbox, Flex, Text, Textarea } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import ButtonChakra from "../Button/Button";
import H2 from "../Texts/H2";
import InputForm from "./InputForm";
import { useRouter } from 'next/router'
import axios from 'axios'


export default function FormElement() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [branches, setBranches] = useState(0)
  const [companyName, setCompanyName] = useState('')
  const [message, setMessage] = useState('')

  const { reload } = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = {
      domain: 'www.simcompany.com.br',
      emailTo: 'matteus.isaque28@gmail.com',
      title: 'Formulário simcompany',
      name,
      email,
      phone,
      state,
      city,
      branches,
      companyName,
      message
    }

    await axios.post(`${process.env.NEXT_PUBLIC_EMAIL}/ticonnected`, data)

    // await reload()
  }


  return (
    <Flex as='form' onSubmit={handleSubmit} w='100%' borderRadius={5} flexDirection='column' bgColor='Green.300' p={{ base: '4', sm: '8' }}>
      <Box>
        <H2 color='white' textAlign='center'>Gostaria de receber uma proposta para o seu negócio?</H2>

        <Text textAlign='center' color='white' my={{ base: '2', sm: '4' }} fontSize={{ base: '14px', sm: '16px' }}>A Sim Company© irá te auxiliar com as melhores proposta e garantir um suporte completo desde a contratação até a instalação e suporte com equipamentos.</Text>
      </Box>
      <InputForm name='name' placeholder="Nome Completo" mb='4' onChange={(e) => { setName(e.target.value) }} />
      <Box display='grid' gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }} gridColumnGap='4' gridRowGap='4'>
        <InputForm name='email' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
        <InputForm name='phone' placeholder='Telefone' onChange={(e) => { setPhone(Number(e.target.value)) }} />
        <InputForm name='state' placeholder='Estado' onChange={(e) => { setState(e.target.value) }} />
        <InputForm name='city' placeholder='Cidade' onChange={(e) => { setCity(e.target.value) }} />
        <InputForm name='branches' placeholder='Quantidade de ramais' onChange={(e) => { setBranches(Number(e.target.value)) }} />
        <InputForm name='company_namy' placeholder='Nome da empresa' onChange={(e) => { setCompanyName(e.target.value) }} />
      </Box>
      <Textarea
        mt='4'
        focusBorderColor="Blue.800"
        variant='outline'
        placeholder="Conte um pouco sobre sua procura, iremos preparar um orçamento especial para você!"
        bgColor='white'
        onChange={(e) => { setMessage(e.target.value) }}
      />

      <Flex alignItems='start' mt='6'>
        <Checkbox my='5' color='white' colorScheme='red' required />
        <Text color='white' mt='4' ml='2' fontSize={{ base: '14px', sm: '16px' }}>
          Concordo em permitir que a Sim Company tenha acesso aos meus dados para me responder com propostas promocionais referente ao meu pedido.
        </Text>
      </Flex>

      <Flex alignItems='start'>
        <Checkbox my='5' color='white' colorScheme='red' />
        <Text color='white' mt='4' ml='2'>
          concordo com os termos de uso e política de privacidade.
        </Text>
      </Flex>

      <ButtonChakra type='submit' mt='6' py='8'>
        OBTER COTAÇÃO
      </ButtonChakra>

    </Flex>
  )
}