import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

type MenuItem = {
  children: ReactNode,
  link: any
}

export default function MenuItem({ children, link }: MenuItem) {
  return (
    <Link href={link}>
      <ChakraLink>
        {children}
      </ChakraLink>
    </Link>
  )
}