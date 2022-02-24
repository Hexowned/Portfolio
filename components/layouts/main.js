import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import VoxelDog from '../voxel-dog.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-wdith, initial-scale=1" />
                <title>Ian Church - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={15}>
                <VoxelDog />
                {children}
            </Container>
        </Box>
    )
}

export default Main