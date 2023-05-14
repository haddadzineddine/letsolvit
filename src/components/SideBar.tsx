import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Link,
    Badge,
    Checkbox,
} from '@chakra-ui/react'

import { ResourceContextType, TopicResource } from '../types/Resource';
import { correspondingDifficultyColor, numberOfCompleted } from '../utils/helpers';
import { StarIcon, ViewIcon } from '@chakra-ui/icons';
import { TopicService } from '../services/topic.service.';
import { useContext, useEffect, useState } from 'react';
import { ResourceContext } from '../context/resource.context';


type SideBarProps = {
    isOpen: boolean;
    onClose: () => void;
}


export const SideBar = ({ isOpen, onClose }: SideBarProps) => {

    const { resources, setResources, topicTitle } = useContext(ResourceContext) as ResourceContextType;
    const [topicResources, setTopicResources] = useState<TopicResource[]>([]);


    const tableHeaders: string[] = TopicService.getHeaders();

    const toggleComplete = (resourceId: string) => {
        TopicService.toggleComplete(resourceId);

        topicResources.forEach((resource) => {
            if (resource.problem === resourceId) {
                resource.isCompleted = !resource.isCompleted;
            }
        });

        setTopicResources([...topicResources]);
    };

    const toggleFavorite = (resourceId: string) => {
        TopicService.toggleFavorite(resourceId);

        topicResources.forEach((resource) => {
            if (resource.problem === resourceId) {
                resource.start = !resource.start;
            }
        });

        setTopicResources([...topicResources]);

        setResources({ ...resources, [topicTitle]: topicResources });
    };

    useEffect(() => {
        const TopicResources = TopicService.getResoucesOfTopic(topicTitle);
        setTopicResources(TopicResources);
    }, [topicTitle]);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size="full"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton mt={2} bg={'red.700'} color={'white'} _hover={{ bg: "red.800" }} />
                <DrawerHeader fontSize={'2xl'}>
                    {TopicService.getTitle(topicTitle) + ' ( ' + numberOfCompleted(topicResources) + '/' + topicResources.length + ' ) '}
                </DrawerHeader>

                <DrawerBody>
                    <TableContainer mt={8}>
                        <Table variant='striped'>
                            <Thead>
                                <Tr>
                                    {
                                        tableHeaders.map((header, index) => (
                                            <Th key={index}>{header}</Th>
                                        ))
                                    }
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    topicResources?.map((resource, index) => (
                                        <Tr key={index}>
                                            <Td>
                                                <Checkbox colorScheme='green' onChange={() => toggleComplete(resource.problem)} defaultChecked={resource.isCompleted}></Checkbox>
                                            </Td>
                                            <Td>
                                                <StarIcon cursor="pointer" onClick={() => toggleFavorite(resource.problem)} w={4} h={4} color={resource.start ? 'yellow.400' : 'gray.400'} />

                                            </Td>
                                            <Td>
                                                <Link href={resource.problemLink} isExternal fontWeight={'bold'} color={'blue.700'}>
                                                    {resource.problem}
                                                </Link>
                                            </Td>
                                            <Td>
                                                <Link href={resource.solutionLink} isExternal>
                                                    <ViewIcon color="gray.400" w={6} h={6} />
                                                </Link>
                                            </Td>
                                            <Td>
                                                <Badge colorScheme={correspondingDifficultyColor[resource.difficulty]}>
                                                    {resource.difficulty}
                                                </Badge>

                                            </Td>
                                            <Td>
                                                <Badge colorScheme='yellow' variant='outline'>
                                                    <Link href={resource.code} isExternal>
                                                        Python
                                                    </Link>
                                                </Badge>
                                            </Td>

                                        </Tr>
                                    ))
                                }

                            </Tbody>

                        </Table>
                    </TableContainer>
                </DrawerBody>
            </DrawerContent>
        </Drawer>

    )
}