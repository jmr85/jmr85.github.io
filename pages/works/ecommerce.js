import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="ecommerce">
    <Container>
      <Title>
        Ecommerce <Badge>2021</Badge>
      </Title>
      <P>
        Ecommerce is specialized in the sale of products for developers such as programming books and laptop sales.
      </P>
      <P>
        Built with 🛠️
      </P>
      <P>
        ReactJS - Library for the development of complete client-side web applications.
      </P>
      <P>
        React Router Web - React Router is a collection of navigation components that are composed declaratively in the web application.
      </P>
      <P>
        React Bootstrap - Rebuilt front-end framework for React.
      </P>
      <P>
        Animate css - It is a library of css animations.
      </P>
      <P>
        Sweetalert - It is a library that allows you to create all kinds of customized alert messages.
      </P>
      <P>
        Formik - It is a library of forms for React. It is responsible for keeping track of the values, errors, which fields we visit, validate and handle the shipment. Formik does not use external state management libraries like Redux or MobX. This makes Formik easy to adopt gradually and keeps pack size to a minimum.
      </P>
      <P>
        Yup - It is a library to validate the form fields, used to validate the Formik form fields.
      </P>
      <P>
        Firebase - Firebase is Google&apos;s mobile app development platform. In this project it is used as a backend.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://developerbookstore.netlify.app/" target="_blank">
            https://developerbookstore.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/ecommerce_01.png" alt="ecommerce" />
        <WorkImage src="/images/works/ecommerce_02.png" alt="ecommerce" />
      </SimpleGrid> */}
      <WorkImage src="/images/works/ecommerce.gif" alt="ecommerce" />
      <WorkImage src="/images/works/ecommerce_02.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecommerce_03.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecommerce_04.png" alt="ecommerce" />
      <WorkImage src="/images/works/ecommerce_05.png" alt="ecommerce" />
    </Container>
  </Layout>
)

export default Work
