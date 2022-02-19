import {
    Button,
    ButtonGroup,
    Flex,
    HStack,
    Icon,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
  import React from "react";
  import { FiMenu } from "react-icons/fi";
  import { useNavigate } from "react-router-dom";
//   import { useDisclosure } from "@chakra-ui/react";
  
  const buttonStyles = {
    borderRadius: "15px",

  };
  
  const navLinksStyles = {
    color: "black",
    variant: "link",
    fontWeight: "semibold",
  };
  
  const Header = () => {
    const navigate = useNavigate();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="12vh"
          width="100vw"
          px="5vw"
        >
          <HStack spacing="5vw" display={["none", "none", "flex", "flex"]}>
            <Button fontSize={18} onClick={() => navigate("/")} {...navLinksStyles} _hover={{ textDecoration: 'underline', textDecorationColor: 'brand.300' }}>
              Home
            </Button>
            <Button fontSize={18} onClick={() => navigate("/about")} {...navLinksStyles} _hover={{ textDecoration: 'underline', textDecorationColor: 'brand.300' }}>
              About Us
            </Button>
            <Button fontSize={18} onClick={() => navigate("/contact")} {...navLinksStyles} _hover={{ textDecoration: 'underline', textDecorationColor: 'brand.300' }}>
              Contact Us
            </Button>
          </HStack>
          <ButtonGroup
            alignItems="end"
            display={["none", "none", "flex", "flex"]} >

            <Button fontSize={18} onClick={() => navigate("/login")}
              variant="ghost"
              {...buttonStyles}
              _hover={{ bg: "brand.500", color: "white", boxShadow: 'dark-lg', }}>
              Register / Sign in
            </Button>
          </ButtonGroup>
  
          <Menu>
            <MenuButton display={["flex", "flex", "none", "none"]}>
              <Icon as={FiMenu} h={7} w={7} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
              <MenuItem onClick={() => navigate("/about")}>About Us</MenuItem>
              <MenuItem onClick={() => navigate("/contact")}>Contact Us</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
              <MenuItem onClick={() => navigate("/client/signup")}>Sign Up</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </>
    );
  };
  
  export default Header;