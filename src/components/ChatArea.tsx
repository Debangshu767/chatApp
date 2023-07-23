
import React, { useContext} from "react";
import { Flex,Text, Divider } from "@chakra-ui/react";
import ChatBox from "./ChatBox";
import { Message, MessageContext } from "../utils/MessageProvider";

function ChatArea() {
  const messages = useContext<Message[] | null>(MessageContext);

  if (!messages) {
    return <div>Loading...</div>;
  }


  const groupMessagesByDate = (messages: Message[]) => {
    const groupedMessages: { [date: string]: Message[] } = {};

    messages.forEach((message) => {
      const date = message.time.split(" ")[0]; 
      if (groupedMessages[date]) {
        groupedMessages[date].push(message);
      } else {
        groupedMessages[date] = [message];
      }
    });

    return groupedMessages;
  };

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <Flex flexDir={"column-reverse"} gap={"4"} overflow={"scroll"} p={4} marginBottom={"80px"}>
      {Object.entries(groupedMessages).map(([date, messagesForDate]) => (
        <React.Fragment key={date}>
          {messagesForDate.map((message) => (
            <ChatBox
              key={message.id}
              id={message.id}
              image={message.sender.image}
              message={message.message}
              self={message.sender.self}
              time={message.time}
            />
          ))}
          <Divider mt={4} mb={2} borderColor="gray.400" />
          <Text fontSize="lg" color="gray.600" textAlign="center">
            {date}
          </Text>
        </React.Fragment>
      ))}
    </Flex>
  );
}

export default ChatArea;

