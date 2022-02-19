import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
// import { useForm } from "../../utils/useForm";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import loginImage from "../../assets/Loginpicture.svg";
// import illustration from "../../assets/Mobile login-bro.svg";
// import AuthLeftContainer from "../../components/PageSections/AuthLeftContainer";
// import API from "../../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };

  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm({
    validations: {
      username: {
        custom: {
          isValid: (value) => value.length > 1,
          message: "The username needs to be at least 1 characters long.",
        },
        // pattern: {
        //   value: "^[A-Za-z]*$",
        //   message:
        //     "You're not allowed to use special characters or numbers in your name.",
        // },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 4,
          message: "The password needs to be at least 6 characters long.",
        },
      },
    },

    onSubmit: async () => {
      setLoading(true);
      if (!user.username || !user.password) {
        toast({
          title: "Please fill all the fields",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
        return;
      }

      // console.log(email, password);

      try {
        const { data } = await API.loginUser({
          username: user.username,
          password: user.password,
        });

        console.log("Submit has been pressed");
        // console.log(JSON.stringify(data));
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        const current_user = JSON.parse(localStorage.getItem("userInfo"));

        if (current_user.session_status === "client") {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      } catch (error) {
        if (error.response.status === 400) {
          setError("Unable to Log in with provided credentials");
        }
        toast({
          title: "Error Occured!",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        console.log(error.request.status);
        console.log(error.response.data);
        setLoading(false);
      }
    },
  });

  return (
    <SimpleGrid columns={[null, null, null, 2]} height="100vh">
      {/* Left side */}

      <AuthLeftContainer image={loginImage} illustration={illustration} />

      {/* Right side */}
      <Box pl="3vw">
        <HStack mt="3vh" ml="57%" mb="3vh">
          <Button
            color="#555555"
            variant="link"
            onClick={() => navigate(`/signup`)}
          >
            <Text>Don't have an account? </Text>
            <Text ml="0.3vw" color="brand.300" fontWeight="500">
              Sign up
            </Text>
          </Button>
        </HStack>
        <Stack width="70%">
          <Text align="left" fontSize="2rem">
            Login to your account
          </Text>
          <Text align="left" color="gray.300" fontSize="0.8rem">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
          </Text>
          <form id="login-form" onSubmit={handleSubmit}>
            <FormControl id="username" mt="5vh" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={user.username || ""}
                onChange={handleChange("username")}
              />
            </FormControl>
            <FormControl id="password" mt="3vh" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  value={user.password || ""}
                  onChange={handleChange("password")}
                />
                <InputRightElement>
                  {show ? (
                    <Icon as={FiEye} onClick={handleShowPassword} />
                  ) : (
                    <Icon as={FiEyeOff} onClick={handleShowPassword} />
                  )}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {errors && (
              <Text mt="1vh" align="left" color="red">
                {errors.password || errors.username}
              </Text>
            )}
            {error && (
              <Text mt="1vh" align="left" color="red">
                {error}
              </Text>
            )}
            <HStack mt="1.5vh" width="inherit">
              <Checkbox>Remember Me</Checkbox>
              <Spacer />
              <Button variant="link" color="brand.300">
                Forgot password?
              </Button>
            </HStack>
            <Button
              mt="3vh"
              mb="2vh"
              // type="submit"
              width="100%"
              isDisabled={!user.password || !user.username}
              bg={!user.password || !user.username ? "brand.200" : "brand.300"}
              color={
                !user.password || !user.username ? "brand.300" : "brand.200"
              }
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
              isLoading={loading}
              onClick={handleSubmit}
            >
              Log into your account
            </Button>
            <HStack>
              <Divider />
              <Text>Or</Text>
              <Divider />
            </HStack>
            <Button
              leftIcon={<FaGoogle />}
              mt="3vh"
              mb="2vh"
              width="100%"
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
            >
              Sign in with Google
            </Button>
          </form>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default Login;