import theme from '../libs/theme'
import Font from '../components/font'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/provider'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Font/>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
export default Website