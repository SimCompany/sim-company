import { Text, TextProps } from "@chakra-ui/react";

interface H1Props extends TextProps {
  text: string
}



export default function H1({ text, ...rest }: H1Props) {

  return (
    <Text as='h1' {...rest}>
      {text}
    </Text>
  )
}