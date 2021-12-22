import React, {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import axios from "axios";
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'

const Contact = () => {

  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xoqyblrz",
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        console.log("Message sent: ", response);
        handleServerResponse(true, "Thanks!");
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error);
        // handleServerResponse(false, error.response.data.error);
      });
  };

  const validateName = (value) => {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.length <= 3) {
      error = "Enter name greater than 3 characters 😱"
    }
    return error
  }
  const validateSubject = (value) => {
    let error
    if (!value) {
      error = 'Subject is required'
    } else if (value.length <= 4) {
      error = "Enter name greater than 4 characters 😱"
    }
    return error
  }
  const validateEmail = (value) => {
    let error
    if (!value) {
      error = 'E-mail is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Invalid email address 😱"
    }
    return error
  }
  const validateQuestion = (value) => {
    let error
    if (!value) {
      error = 'Question is required'
    } else if (value.length < 35) {
      error = "Enter name greater than 34 characters 😱"
    }
    return error
  }

  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact
        </Heading>
        <Section delay={0.1}>
          <Formik
            initialValues={{ name: '', subject: '', email: '', question: '' }}
            onSubmit={handleOnSubmit}
          >
            {(props) => (
              <Form>
                <Field name='name' validate={validateName}>
                  {({ field, form }) => (
                    <FormControl id='name' isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                      <Input {...field} placeholder='name' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='subject' validate={validateSubject}>
                  {({ field, form }) => (
                    <FormControl id='subject' isInvalid={form.errors.subject && form.touched.subject}>
                      <FormLabel htmlFor='subject'>Subject</FormLabel>
                      <Input {...field} placeholder='subject' />
                      <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email' validate={validateEmail}>
                  {({ field, form }) => (
                    <FormControl id='email' isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor='email'>Email</FormLabel>
                      <Input {...field} placeholder='test@test.com' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='question' validate={validateQuestion}>
                  {({ field, form }) => (
                    <FormControl id='question' isInvalid={form.errors.question && form.touched.question}>
                      <FormLabel htmlFor='subject'>Question</FormLabel>
                      <Textarea {...field} placeholder='Write your question' />
                      <FormErrorMessage>{form.errors.question}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme='teal'
                  isLoading={props.isSubmitting}
                  type='submit'
                >
                  Submit
                </Button>
                {serverState && (
                  <p className={!serverState.ok ? "errorMsg" : ""}>
                    {serverState.msg}
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </Section>
      </Container>
    </Layout>
  );
};
export default Contact
