import { useState } from "react";
import ReactFlow, { Edge, Node, NodeChange } from "reactflow";
import { initialEdges } from "./utils/edges";
import { SideBar } from "./components/SideBar";
import { useDisclosure } from "@chakra-ui/react";
import { initialNodes } from "./utils/nodes";
import { Resource } from "./assets/types/Resource";
import { getResouces, getTopicTitle } from "./utils/resources";

import "reactflow/dist/style.css";

function Flow() {

  const [nodes] = useState<Node[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);

  const [topicResources, settopicResources] = useState<Resource[]>([]);
  const [topicName, setTopicName] = useState<string>('');


  const { isOpen, onOpen, onClose } = useDisclosure();


  const onNodesChange = (nodes: unknown) => {
    const nodesArray = nodes as (NodeChange & { id: string })[];

    if (nodesArray.length == 1) {
      const node = nodesArray[0];

      if (node.type === 'position') {
        const topic = node.id;
        const resources = getResouces(topic);
        const topicTitle = getTopicTitle(topic);
        settopicResources(resources);
        setTopicName(topicTitle);

        onOpen();
      }
    }
  };


  return (
    <div className="main">
      <SideBar isOpen={isOpen} onClose={onClose} resources={{ topicResources, topicName }} />
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} fitView />
    </div>
  );
}

export default Flow;
