import { BrowserRouter,Routes,Route } from "react-router-dom"
import Chat from "./pages/Chat"
import { Box } from "@chakra-ui/react"

function App() {

  return (
      <BrowserRouter>
      <Box>
      <Routes>
      <Route path = "/" element = {< Chat/>}  />
      </Routes>
      </Box>
      
      </BrowserRouter>
  )
}

export default App
