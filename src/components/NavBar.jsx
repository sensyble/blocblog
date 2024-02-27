import React from 'react';
import { Box, Container, Flex, Spacer, Link, Button, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { BellIcon, Search2Icon } from '@chakra-ui/icons';
import { ConnectWallet } from '@thirdweb-dev/react';

const Navbar = () => {
    return (
      <Flex h="75px" alignItems={"center"} bgColor={'white'} justifyContent={"space-between"} py={0} px={4} overflow={'hidden'} boxShadow="0px 4px 6px -2px rgba(0, 0, 0, 0.5)">
        <Flex alignItems={'center'} gap={'10px'}>
        <Heading as = 'h4' size={'lg'}>BlocBlog.</Heading>
        <Spacer />
          <InputGroup>
          <InputLeftElement>
            <Flex alignItems={'center'} px={7} alignContent={'center'}>
            <Search2Icon color='gray.500' boxSize={5}/>
            </Flex>
         
          </InputLeftElement>
       <Input borderRadius={"20px"} placeholder='Search' alignContent={'center'} size='lg' width='auto'  _placeholder={{ color: 'gray.500' }} />
          </InputGroup>
        </Flex>
          
         
          <Flex alignItems={'center'} gap={'8px'}><Tabs  colorScheme='blackAlpha' variant={'soft-rounded'}>
         
          <TabList>
                <Tab >Feed</Tab>
                <Tab>Following</Tab>
                <Tab><BellIcon />Notifications</Tab>
                
                
            </TabList>
            
            </Tabs>
            <ConnectWallet
        switchToActiveChain={true}
        modalSize={"compact"}
        showThirdwebBranding={false}
        modalTitleIconUrl={""}
        
        hideTestnetFaucet={false}
        hideReceiveButton={true}
        hideSendButton={true}
      />
          </Flex>
            
      </Flex>

    );
  };

  export default Navbar;
