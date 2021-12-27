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
    <Layout title="Mede Almond Bandung">
      <Container>
        <Title>
          Mede Almond Bandung <Badge>2021</Badge>
        </Title>
        <P>
          A company that provides various nuts
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://medealmondbandung.herokuapp.com/' target="_blank">https://medealmondbandung.herokuapp.com/<ExternalLinkIcon mx="2px"/></Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work