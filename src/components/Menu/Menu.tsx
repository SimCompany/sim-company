import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, IconButton, Link, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import SetMenuItem from "./SetMenuItem";





export default function Menu() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const isDrawer = useBreakpointValue({
    base: true,
    lg: false
  })

  const router = useRouter()


  useEffect(() => {
    onClose
  }, [router.asPath])

  if (isDrawer) {
    return (
      <>
        <Flex
          justifyContent='space-between'
          h='60px'
          alignSelf='center'
          maxW={{ '2xl': '1344px' }}
          bgColor='white'
          mx={{ base: '5%', lg: '10%', '2xl': '15%' }}>
          <Logo w='50px' />

          {isDrawer && (
            <IconButton
              icon={<Icon as={RiMenuLine} />}
              fontSize={24}
              variant='unstyled'
              aria-label="Menu"
              onClick={onOpen}
              mt='18px'
            >

            </IconButton>)}
        </Flex>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg='Blue.800' p='4'>
              <DrawerCloseButton mt='8' color='white' />


              <DrawerBody mt='6'>
                <Flex
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='space-between'
                  h='100%'
                >
                  <SetMenuItem
                    display='flex'
                    textAlign='center'
                    flexDirection='column'
                    color='white'
                    fontSize='18px'
                    direction='column'
                    spacing={4}
                  />

                  <Flex
                    alignItems='center'
                    flexDirection='column'>
                    <Logo
                      w='120px' />
                    <Text
                      mt='4'
                      fontSize='12px'
                      textAlign='center'
                      color='white'
                    >Soluções em telefonia</Text>
                  </Flex>

                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>

    )
  }

  return (
    <Flex
      justifyContent='space-between'
      h='60px'
      alignSelf='center'
      maxW={{ '2xl': '1344px' }}
      mx={{ base: '5%', lg: '10%', '2xl': '15%' }}>
      <Flex alignSelf='center'>
        <Logo w='50px' />
      </Flex>

      <SetMenuItem direction='row' alignItems='center' spacing='8' />

    </Flex>
  )
}