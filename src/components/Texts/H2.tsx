import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H1Props extends TextProps {
  children: ReactNode
}



export default function H2({ children, ...rest }: H1Props) {

  return (
    <Text as='h2' lineHeight={{base:'1.1', sm: '1', lg: '1.25' }} fontSize={{ base: '2xl', sm: '1xl', md: '1xl', lg: '2xl', xl: '3xl', '2xl': '4xl' }} fontWeight='bold' color='Green.300' {...rest}>
      {children}
    </Text>
  )
}