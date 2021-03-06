import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
    <Spinner
        size="x1"
        position="fixed"
        left="50%"
        top="50%"
        m1="calc(0px-var(--spinner-size)/2)"
        m2="calc(0px-var(--spinner-size))"
    />
)

export const DogContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="voxel-dog"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
    >
        {children}
    </Box>
))

const Loader = () => {
    return (
        <DogContainer>
            <DogSpinner />
        </DogContainer>
    )
}
export default Loader