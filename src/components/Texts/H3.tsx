import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H3Props extends TextProps {
  children: ReactNode
}



export default function H3({ children, ...rest }: H3Props) {

  return (
    <Text as='h3' fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} letterSpacing={0} fontWeight='extrabold' color='Blue.800' {...rest}>
      {children}
    </Text>
  )
}