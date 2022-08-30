import { Button as ButtonaChakra, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonChakraProps extends ButtonProps {
  children: ReactNode
}


export default function ButtonChakra({ children, ...rest }: ButtonChakraProps) {

  return (
    <ButtonaChakra _hover={{
      'bgColor': 'red.600'
    }} colorScheme='Red' color='white' fontSize={{ base: '16px', sm: '18px', md: '18px', lg: '20px', xl: '24px' }} borderRadius='8' {...rest}>
      {children}
    </ButtonaChakra>
  )
}