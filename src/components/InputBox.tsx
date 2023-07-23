import { Flex, HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { AttachmentIcon, ArrowRightIcon } from '@chakra-ui/icons'
function InputBox() {
  return (


    <Flex p={4} paddingBottom={"6"} position={"fixed"} bottom={"0"} w={"full"} h={"70px"} alignItems={"center"} maxWidth={"600px"} margin={"auto"} >
      <InputGroup bgColor={"white"} >
        <InputRightElement pointerEvents='none'>
          <HStack spacing={3} mr={12}>
            <AttachmentIcon />
            <ArrowRightIcon />
          </HStack>
        </InputRightElement>
        <Input type='text' placeholder='Reply' />
      </InputGroup>
    </Flex>

  )
}

export default InputBox