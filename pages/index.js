import { Container, Box, Heading, Image, useColorModeValue, Button, Icon, SimpleGrid, List, ListItem, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoWhatsapp
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a full-stack developer based in Indonesia!
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Steven Theodore
            </Heading>
            <p>Software Engineer</p>
          </Box>
          <Box 
            flexShrink={0} 
            mt={{ base: 3, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image 
              borderColor="whiteAlpha.800" 
              borderWidth={2} 
              borderStyle="solid" 
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/steven.jpg"
              alt="my images"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Steven theodore is a software enginner, currently working in AIA Singapore. Has keen interest in Web Development and Machine Learning</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Starting Life
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Started professional Career
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Bachelor&apos;s Program in the Graduate School of Computer Science at Institut Teknologi Harapan Bangsa
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Works at AIA Singapore as Software Engineer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Machine Learing, Mobile and Web Development, Playing Apex and Dota2
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/sunakujira98" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@sunakujira98</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/theodoresteven/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>@theodoresteven</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://api.whatsapp.com/send?phone=6287705553241&text=Hi%20Steven.%20Found%20you%20From%20the%20Website." target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoWhatsapp}/>}>+6287705554341</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>  
    </Layout>
  )
}

export default Page