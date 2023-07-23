import { Avatar, Flex } from "@chakra-ui/react";

interface ChatBoxProps {
  id: string;
  image: string;
  message: string;
  self: boolean;
  time: string;
}

const ChatBox: React.FC<ChatBoxProps> = (props) => {
  if (props.self) {
    return (
      <Flex gap={2} justify={"end"} direction={"row-reverse"}>
        <Avatar size={"xs"} src={props.image} />
        <div
          dangerouslySetInnerHTML={{ __html: `<p style="background-color: #1C63D5; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); color: white;">${props.message}</p>` }}
        />
      </Flex>
    );
  } else {
    return (
      <Flex gap={2}>
        <Avatar size={"xs"} src={props.image} />
        <div
          dangerouslySetInnerHTML={{ __html: `<p style="background-color: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">${props.message}</p>` }}
        />
      </Flex>
    );
  }
};

export default ChatBox;
