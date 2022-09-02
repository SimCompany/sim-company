import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface MenuItem extends LinkProps {
  children: ReactNode,
  link: any,
}

export default function MenuItem({ children, link, ...rest }: MenuItem) {
  return (
    <Link href={link} >
      <ChakraLink {...rest}>
        {children}
      </ChakraLink>
    </Link>
  )
}