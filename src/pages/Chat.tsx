import { ArrowBackIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons"
import {Divider, Flex, Heading, Text } from "@chakra-ui/react"
import InputBox from "../components/InputBox"
import ChatArea from "../components/ChatArea"
import { ApiResponse, ApiResponseContext, Message, MessageContext } from "../utils/MessageProvider";
import { useContext } from "react";
import AvatarCollage from "../components/AvatarCollage";



function Chat() {

    const messages = useContext<Message[] | null>(MessageContext);
  const apiResponse = useContext<ApiResponse | null>(ApiResponseContext);

  if (!apiResponse || !messages) {
    return <div>Loading...</div>;
  }

  const participantImages = messages.map((message) => message.sender.image);

    return (
        <Flex flexDirection={"column"} gap={5} bgColor={"#FAF9F4"} height={"100vh"} maxWidth={"600px"} margin={"auto"} >

            <Flex justify={"space-between"} alignItems={"center"} p={4}   >
                <Flex gap={2} alignItems={"center"} >
                    <ArrowBackIcon fontSize={30} />
                    <Heading>{apiResponse.name}</Heading>
                </Flex>

                <EditIcon fontSize={25} />
            </Flex>

            <Flex justify={"space-between"} alignItems={"center"} p={4}   >
                <Flex gap={4} alignItems={"center"} >
                    <AvatarCollage images={participantImages} />
                    <Flex flexDirection={"column"}>
                        <Flex gap={2} alignItems={"center"}>
                            <Text fontSize={"m"} fontWeight={"light"}> From </Text>
                            <Text as={'b'} fontSize={"xl"}> {apiResponse.from} </Text>
                        </Flex>
                        <Flex gap={2} alignItems={"center"}>
                            <Text fontSize={"m"} fontWeight={"light"} > To </Text>
                            <Text as={'b'} fontSize={"xl"}> {apiResponse.to} </Text>
                        </Flex>
                    </Flex>
                </Flex>

                <HamburgerIcon fontSize={25} />
            </Flex>
            <Divider colorScheme={"blackAlpha"} size={"lg"}/>

            <ChatArea/>
        
        < InputBox/>
        

        </Flex>
    )
}

export default Chat