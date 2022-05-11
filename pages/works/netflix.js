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
          Netflix-Cloned <Badge>2022</Badge>
        </Title>
        <P>
        Made a cloned version of netflix
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://netflix-indie.vercel.app/' target="_blank">https://netflix-indie.vercel.app/<ExternalLinkIcon mx="2px"/></Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Test Account</Meta>
            <span>steven.history@gmail.com / history123</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbNetflix.png" alt="Netflix Thumb"/>
        <WorkImage src="/images/works/netflix-1.png" alt="Netflix 1"/>
        <WorkImage src="/images/works/netflix-2.png" alt="Netflix 2"/>
        <WorkImage src="/images/works/netflix-3.png" alt="Netflix 3"/>
      </Container>
    </Layout>
  )
}

export default Work