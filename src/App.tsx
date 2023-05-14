import { useState } from "react";
import ReactFlow, { Edge, Node, NodeChange } from "reactflow";
import { initialEdges } from "./utils/edges";
import { SideBar } from "./components/SideBar";
import { useDisclosure } from "@chakra-ui/react";
import { initialNodes } from "./utils/nodes";
import { TopicService } from "./services/topic.service.";
import { ResourceContext } from "./context/resource.context";

import "reactflow/dist/style.css";
import { Resource } from "./types/Resource";

function Flow() {

  const [nodes] = useState<Node[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);


  const [resources, setResources] = useState<Resource>(TopicService.getResources());
  const [topicTitle, setTopicTitle] = useState<string>('');


  const { isOpen, onOpen, onClose } = useDisclosure();


  const onNodesChange = (nodes: unknown) => {
    const nodesArray = nodes as (NodeChange & { id: string })[];

    if (nodesArray.length == 1) {
      const node = nodesArray[0];

      if (node.type === 'position') {
        setTopicTitle(node.id);
        onOpen();
      }
    }
  };


  return (
    <div className="main">
      <ResourceContext.Provider value={{ resources, setResources, topicTitle }}>
        <SideBar isOpen={isOpen} onClose={onClose} />
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} fitView />
      </ResourceContext.Provider>
    </div>
  );
}

export default Flow;
