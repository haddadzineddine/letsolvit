import { Box, Progress, Text } from '@chakra-ui/react'
import { useContext } from 'react';
import { ResourceContext } from '../context/resource.context';
import { ResourceContextType } from '../types/Resource';
import { getProgress } from '../utils/helpers';

type TopicProps = {
    id: string;
    name: string;
}


export const Topic = ({ id, name }: TopicProps) => {

    const { resources } = useContext(ResourceContext) as ResourceContextType;



    return (
        <Box bg="rgb(88,101,242)">
            <Text fontSize="small" fontWeight="bold" color="white">{name}</Text>
            <Progress value={getProgress(resources, id)} mt={2} size='sm' borderRadius={4} colorScheme="green" bg={'#282c34'} />
        </Box>
    );
}