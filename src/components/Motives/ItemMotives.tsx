import { Box, GridItem, GridItemProps, Text } from "@chakra-ui/react";

interface ItemMotives extends GridItemProps {
  number: number
  description: string
}


export default function ItemMotives({ number, description }: ItemMotives) {


  return (
    <GridItem display='flex' flexDirection='column' height='100%' width='200px' p='10px' textAlign='center' borderRadius='8px' bgColor='Blue.300'>
      <Text fontWeight='extrabold' fontSize='65px'>{number}</Text>
      <Text>{description}</Text>
    </GridItem>
  )
}