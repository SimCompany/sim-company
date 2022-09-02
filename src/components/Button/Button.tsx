import { Button as ButtonaChakra, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonChakraProps extends ButtonProps {
  children: ReactNode
}


export default function ButtonChakra({ children, ...rest }: ButtonChakraProps) {

  return (
    <ButtonaChakra _hover={{
      'bgColor': 'Red.800'
    }} colorScheme='Red' color='white' fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px', xl: '22px' }} borderRadius='8' {...rest}>
      {children}
    </ButtonaChakra>
  )
}