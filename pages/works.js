import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNetflix from '../public/images/works/thumbNetflix.png'
import thumbJashen from '../public/images/works/thumbJashen.png'
import thumbProshop from '../public/images/works/thumbProshop.png'
import thumbBroko from '../public/images/works/thumbBrokoAtom.jpg'
import thumbMdm from '../public/images/works/thumbMdmPertamina.png'
import thumbUnos from '../public/images/works/thumbUnos.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="netflix" title="Netflix Cloned" thumbnail={thumbNetflix}>
            Developed a cloned version of netlix :)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="mdmpertamina" title="MDM My Pertamina" thumbnail={thumbMdm}>
            A project that helps for pertamina data cleansing and mass campaign activities
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="jashenmitrasinergi" title="Jashen Mitra Sinergi" thumbnail={thumbJashen}>
            A company that provides Experienced and Reliable Supplier of Material and Equipment
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="proshopapp" title="Proshopapp" thumbnail={thumbProshop}>
            A simple one stop solution for electornics e-commerce
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="unosjeanstudio" title="Unosjeanstudio" thumbnail={thumbUnos}>
          A simple web page for Bandung Jeans maker.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="brokoindonesia" title="Broko Indonesia" thumbnail={thumbBroko}>
            A company that provides a solution to  barter loose palm oil with basic necessities between palm oil farmer and shop partner.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works