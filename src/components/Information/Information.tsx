import { Box, Text } from "@chakra-ui/react"
import H4 from "../Texts/H4"

type InfromationType = {
  title: string,
  description: string
}


export default function Information({ title, description }: InfromationType) {

  return (
    <Box my='2'>
      <H4 my='1'>{title}</H4>
      <Text>{description}</Text>
    </Box>
  )
}