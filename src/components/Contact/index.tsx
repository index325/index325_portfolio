import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Button,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import ContactInfo from "./ContactInfo";
import { BsPinMap, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Form from "@Components/shared/Form";
import * as Yup from "yup";
import CustomInput from "@Components/shared/Form/Input";
import CustomTextArea from "@Components/shared/Form/TextArea";
import { useEffect } from "react";

import { init, send } from "emailjs-com";
import { useLoading } from "@Hooks/useLoading";

const Contact = () => {
  const { handleLoading } = useLoading();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("This email is invalid"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
    subject: Yup.string()
      .required("Subject is required")
      .min(3, "Subject must be at least 3 characters"),
  });

  const toast = useToast();

  init(process.env.REACT_APP_EMAILJS_USERID!);

  async function onSubmit(data: any) {
    handleLoading(true);

    send(
      process.env.REACT_APP_EMAILJS_SERVICEID!,
      process.env.REACT_APP_EMAILJS_TEMPLATEID!,
      {
        from_name: data.name,
        from_email: data.email,
        to_name: "Gabriel",
        message: data.message,
      },
      process.env.REACT_APP_EMAILJS_USERID!
    )
      .then((data) => {
        toast({
          title: "Message sent successfully",
          description: "I will get back to you as soon as possible",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => {
        handleLoading(false);
      });
  }

  return (
    <Flex w="100%" direction="column">
      <Heading textAlign="center" as="h1" w="100%">
        Contact Me
      </Heading>
      <Text textAlign="center" color="gray.500" w="100%">
        Feel free to contact me
      </Text>
      <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} mt="8">
        <GridItem w="100%">
          <Stack spacing="8" direction="column">
            <ContactInfo
              title="Call Me"
              icon={<BsTelephone size="40" />}
              description="+55 (16) 99770-3341"
            />
            <ContactInfo
              title="Email"
              icon={<MdOutlineEmail size="40" />}
              description="gabriel.moraes.o@hotmail.com"
            />
            <ContactInfo
              title="Location"
              icon={<BsPinMap size="40" />}
              description={
                <>
                  Brazil | Araraquara - SP
                  <br />
                  Street Bahia N 2790 Ap 13 Block J
                </>
              }
            />
          </Stack>
        </GridItem>
        <GridItem w="100%" colSpan={2} mt={["4", "4", "0"]}>
          <Form onSubmit={onSubmit} validationSchema={validationSchema}>
            <SimpleGrid w="100%" columns={[1, 1, 2]} spacing={[0, 0, 4]}>
              <CustomInput name="name" label="Name" backgroundColor="blue.50" />
              <CustomInput
                name="email"
                label="Email"
                backgroundColor="blue.50"
              />
            </SimpleGrid>

            <Flex w="100%">
              <CustomInput
                name="subject"
                label="Subject"
                backgroundColor="blue.50"
              />
            </Flex>

            <Flex w="100%">
              <CustomTextArea
                name="message"
                label="Message"
                backgroundColor="blue.50"
              />
            </Flex>

            <Flex w="100%" style={{ margin: "0px 0.5rem" }}>
              <Button
                mt="4"
                py="4"
                colorScheme="blue"
                size="lg"
                w="200px"
                type="submit"
              >
                Send
              </Button>
            </Flex>
          </Form>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Contact;
