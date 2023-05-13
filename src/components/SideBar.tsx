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
    Checkbox
} from '@chakra-ui/react'

import { Resource } from '../assets/types/Resource';
import { correspondingDifficultyColor, resourceHeaders } from '../utils/resources';
import { ExternalLinkIcon, StarIcon, ViewIcon } from '@chakra-ui/icons';


type SideBarProps = {
    isOpen: boolean;
    resources: {
        topicResources: Resource[];
        topicName: string;
    };
    onClose: () => void;
}


export const SideBar = ({ isOpen, onClose, resources }: SideBarProps) => {

    const tableHeaders: string[] = resourceHeaders;
    const tableContent: Resource[] = resources.topicResources;

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size="xl"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>
                    {resources?.topicName} (0/12)
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
                                    tableContent?.map((resource, index) => (
                                        <Tr key={index}>
                                            <Td>
                                                <Checkbox checked={resource.isCompleted}></Checkbox>
                                            </Td>
                                            <Td>

                                                {
                                                    resource.start ? <StarIcon w={4} h={4} color='yellow.400' /> : <StarIcon w={4} h={4} color='gray.400' />
                                                }
                                            </Td>
                                            <Td>
                                                <Link href={resource.problemLink} isExternal>
                                                    {resource.problem} <ExternalLinkIcon mx='2px' />
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