

import { Box, Progress, Text } from '@chakra-ui/react'

type TopicProps = {
    name: string;
    progress: number;
}


export const Topic = (props: TopicProps) => {
    return (
        <Box bg="rgb(88,101,242)">
            <Text fontSize="small" fontWeight="bold" color="white">{props.name}</Text>
            <Progress value={props.progress} mt={2} size='sm' borderRadius={4} colorScheme="whiteAlpha" bg="inherit" />
        </Box>
    )
}