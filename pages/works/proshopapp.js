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
    <Layout title="Proshop App">
      <Container>
        <Title>
          Proshop <Badge>2021</Badge>
        </Title>
        <P>
          A simple one stop solution for electornics e-commerce
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://proshopapp98.herokuapp.com/' target="_blank">https://proshopapp98.herokuapp.com/<ExternalLinkIcon mx="2px"/></Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>MongoDB, Express, ReactJS, NodeJS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbProshop.png" alt="Proshop Image"/>
        <WorkImage src="/images/works/proshop1.png" alt="Proshop Image"/>
        <WorkImage src="/images/works/proshop2.png" alt="Proshop Image"/>
        <WorkImage src="/images/works/proshop3.png" alt="Proshop Image"/>
      </Container>
    </Layout>
  )
}

export default Work