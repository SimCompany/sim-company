import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProvider {
  children: ReactNode
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)


export default function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {
  const disclosure = useDisclosure()
  const router = useRouter()


  useEffect(() => {
    disclosure.onClose
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext)