import { HStack, Stack, StackProps } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

interface SetMenuItemProps extends StackProps {
  mb?: string
}

export default function SetMenuItem({ mb, ...rest }: SetMenuItemProps) {

  return (
    <Stack {...rest}>
      <MenuItem link='/' >
        Inicio
      </MenuItem>
      <MenuItem link='/servicos'>
        Serviços
      </MenuItem>
      <MenuItem link='/contato'>
        Contato
      </MenuItem>

    </Stack>
  )
}