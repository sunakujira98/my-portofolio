import { 
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="PT Jashen Mitra Sinergi">
      <Container>
        <Title>
          PT Jashen Mitra Sinergi <Badge>2021</Badge>
        </Title>
        <P>
          A company that provides Experienced and Reliable Supplier of Material and Equipment
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.jashenmitrasinergi.com/' target="_blank">https://www.jashenmitrasinergi.com/<ExternalLinkIcon mx="2px"/></Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>MySQL, Laravel, PHP</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbJashen.png" alt="Jashen Mitra Sinergi Image"/>
        <WorkImage src="/images/works/jashen1.png" alt="Jashen Mitra Sinergi Image"/>
        <WorkImage src="/images/works/jashen2.png" alt="Jashen Mitra Sinergi Image"/>
        <WorkImage src="/images/works/jashen3.png" alt="Jashen Mitra Sinergi Image"/>
      </Container>
    </Layout>
  )
}

export default Work