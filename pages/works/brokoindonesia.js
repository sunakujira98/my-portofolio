import { 
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Broko Indonesia">
      <Container>
        <Title>
          Broko Indonesia <Badge>2021</Badge>
        </Title>
        <P>
          A company that provides a solution to  barter loose palm oil with basic necessities between palm oil farmer and shop partner. Based in windows and android platform.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PostgreSQL, Docker, Laravel, ReactNative, Firebase</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbBroko.jpg" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko1.jpg" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko2.jpg" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko3.jpg" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko4.jpg" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko5.jpg" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko6.png" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko7.png" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko8.png" alt="Broko Indonesia"/>
        <WorkImage src="/images/works/broko9.png" alt="Broko Indonesia"/>
      </Container>
    </Layout>
  )
}

export default Work