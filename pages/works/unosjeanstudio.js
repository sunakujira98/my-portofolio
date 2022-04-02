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
          Unosjeanstudio <Badge>2022</Badge>
        </Title>
        <P>
        A simple web page for Bandung Jeans maker
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://unosjeanstudio.com/' target="_blank">https://unosjeanstudio.com/<ExternalLinkIcon mx="2px"/></Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, HTML, CSS, Javascript</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work