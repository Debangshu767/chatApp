import { createContext, useState, useEffect} from "react";
import axios from "axios";

export interface Message {
  id: string;
  message: string;
  time: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
}

export interface ApiResponse {
  chats: Message[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

const MessageContext = createContext<Message[] | null>(null);
const ApiResponseContext = createContext<ApiResponse | null>(null);

const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const apiUrl = "https://qa.corider.in/assignment/chat?page=0";

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setMessages(response.data.chats);
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  return (
    <MessageContext.Provider value={messages}>
      <ApiResponseContext.Provider value={apiResponse}>
          {children}
      </ApiResponseContext.Provider>
    </MessageContext.Provider>
  );
};

export { MessageContext, ApiResponseContext, MessageProvider };
