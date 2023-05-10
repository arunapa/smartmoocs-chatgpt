export interface Node {
  id: string;
  concept?: string;
}

export interface Link {
  source: string;
  target: string;
}

interface NodeGraphProps {
  nodes: Node[];
  links: Link[];
  width?: number;
  height?: number;
  draggable?: boolean;
}

export default NodeGraphProps;