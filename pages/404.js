import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading>
                <Text>The page you&apos;re looking for is not available.</Text>
                <Text>Please try again later.</Text>
                <Divider my={6} />
                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Return To Home</Button>
                    </NextLink>
                </Box>
            </Heading>
        </Container>
    )
}
export default NotFound