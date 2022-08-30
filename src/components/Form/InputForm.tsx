import { Input, InputProps } from "@chakra-ui/react";

interface InputFormProps extends InputProps {
  name: string
}



export default function InputForm({ name, ...rest }: InputFormProps, ref: any) {
  return (
    <Input
      id={name}
      name={name}
      variant='outline'
      focusBorderColor='Blue.800'
      {...rest}
      bgColor='white' />
  )
}