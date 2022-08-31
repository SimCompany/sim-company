import { Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular } from "react-icons/ti";


export default function Footer() {

  return (
    <Grid bgColor='Blue.800' gridTemplateColumns='1fr 1fr' p='5% 15%' mt='10%'>
      <GridItem>
        <Text color='white'>email@sincompany.com</Text>
        <Text color='white'>(11) 99999-9999</Text>
        <Text color='white'>(11) 99999-9999</Text>

        <Flex>
          <Icon as={TiSocialFacebookCircular} color='white' fontSize='30' />
          <Icon as={RiInstagramLine} mt='0.5' color='white' fontSize='26' />
          <Icon as={TiSocialLinkedinCircular} color='white' fontSize='30' />
        </Flex>
      </GridItem>
    </Grid>
  )
}