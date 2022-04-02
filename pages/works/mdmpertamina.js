import { 
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="PT Jashen Mitra Sinergi">
      <Container>
        <Title>
          MDM My Pertamina <Badge>2021</Badge>
        </Title>
        <P>
          A project that helps for pertamina data cleansing and mass campaign activities
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='#'>Internal access only</Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ExpressJs, Pug, Docker, ElasticSearch, Python</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/mdmPertamina1.png" alt="Mdm My Pertamina"/>
        <WorkImage src="/images/works/mdmPertamina2.png" alt="Mdm My Pertamina"/>
        <WorkImage src="/images/works/mdmPertamina3.png" alt="Mdm My Pertamina"/>
        <WorkImage src="/images/works/mdmPertamina4.png" alt="Mdm My Pertamina"/>
        <WorkImage src="/images/works/mdmPertamina5.png" alt="Mdm My Pertamina"/>
      </Container>
    </Layout>
  )
}

export default Work