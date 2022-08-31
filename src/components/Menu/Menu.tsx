import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";
import MenuItem from "./MenuItem";




export default function Menu() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })


  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg='blackAlpha.900' p='4'>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <Flex justifyContent='space-between' w='100%' maxW='80%' mx='10%'>
                <Box>
                  LOGO
                </Box>
                <HStack spacing='8'>
                  <Link>
                    primeiro
                  </Link>
                  <Link>
                    segundo
                  </Link>
                  <Link>
                    terceiro
                  </Link>
                </HStack>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Flex
      justifyContent='space-between'
      h='60px'
      alignSelf='center'
      maxW={{base: '90%', lg:'1344px', '2xl':'1344px'}}
      mx={{base:'5%', lg:'10%', '2xl':'17%'}}>
      <Flex alignSelf='center'>
        <Text color='Green.500' fontSize='24px' fontWeight='medium' mr='1'>Sim</Text>
        <Text color='Blue.800' fontSize='24px' fontWeight='medium'>Company</Text>
      </Flex>
      <HStack spacing='8'>
        <MenuItem link='/'>
          Sim Company
        </MenuItem>
        <MenuItem link='/servicos'>
          Serviços
        </MenuItem>
        <MenuItem link='/contato'>
          Contato
        </MenuItem>

      </HStack>
    </Flex>
  )
}