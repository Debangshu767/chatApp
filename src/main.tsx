import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { MessageProvider } from './utils/MessageProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    <MessageProvider>
      <App />
    </MessageProvider>
    </ChakraProvider>   
  </React.StrictMode>,
)
