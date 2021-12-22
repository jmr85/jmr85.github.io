import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import consultoriaNatali from '../public/images/works/consultorianatali.png'
import thumbEcommerce01 from '../public/images/works/ecommerce_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="consultoria" title="Consultoria" thumbnail={consultoriaNatali}>
            It is a landing page developed for an independent consultancy
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ecommerce"
            title="Ecommerce"
            thumbnail={thumbEcommerce01}
          >
            Ecommerce is specialized in the sale of products for developers such as programming books and laptop sales.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
