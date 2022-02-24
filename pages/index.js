import { Container, Link, Icon, List, ListItem, Box, Heading, useColorModeValue, SimpleGrid, Button, chakra } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import Image from 'next/image'
import Paragraph from "../components/paragraph"
import Section from '../components/section'
import Layout from "../components/layouts/article"
import { BioSection, BioYear } from "../components/bio"
import { GridItem } from "../components/grid-item"
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoDiscord,
    IoLogoGithub,
    IoLogoFacebook,
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="full" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    I&apos;m an aspiring developer located in Denver Colorado!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Ian Church
                        </Heading>
                        <p>Student at Colorado Technical University</p>
                        <p>Languages-{">"} C++/Python/React.js</p>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow='hidden'
                        >
                            <ProfileImage
                                src="/images/ian.jpg"
                                alt="Profile Image"
                                borderRadius='full'
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Projects
                    </Heading>
                    <Paragraph>
                        I am a beginner programmer starting my career in
                        Cyber Security this coming summer. Here is an example
                        of what i've been working on to prepare for this endevour-{">"}{' '}
                        <NextLink href="/projects/example">
                            <Link>Example</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects" scroll={false}>
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
                        <BioYear>2019</BioYear>
                        - Discovered my true love and aspirations for programming
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        - Started Bachelors Program at Colorado Technical University
                        - Majoring in Computer Science focusing on Cyber Security
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Social Media
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.facebook.com/ianjoshua.church/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                                    Facebook
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/shmokin_24v/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    Instagram
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/nexowned" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    Github
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Discord
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                </Section>
            </Container>
        </Layout >
    )
}
export default Home