import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/poppins";
import {
  ThirdwebProvider,
  embeddedWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";


const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },

})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="1e27452cd6b9bffb8c1fa89453f20691"
      supportedWallets={[embeddedWallet({
        auth: {
          options: ["email", "google"],
        }
      }),metamaskWallet()]}>

      <ChakraProvider theme={theme}>

      <App />
   </ChakraProvider>
    </ThirdwebProvider>
    
  </React.StrictMode>,
)
