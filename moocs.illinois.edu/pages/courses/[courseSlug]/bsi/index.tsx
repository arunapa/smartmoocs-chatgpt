import { NextPage } from "next";
import { Layout } from "../../../../components";
import { NodeGraph } from "../../../../components/d3/NodeGraph";

const width = 1000;
const height = 1000;
const nodes = [
  { id: "A", concept: "articles" },
  { id: "B", concept: "content" },
  { id: "C", concept: "document selection" },
  { id: "D", concept: "link information" },
  { id: "E", concept: "quality" },
];
const links = [
  { source: "A", target: "B" },
  { source: "A", target: "C" },
  { source: "B", target: "A" },
  { source: "B", target: "D" },
  { source: "B", target: "E" },
  { source: "C", target: "A" },
  { source: "D", target: "B" },
  { source: "E", target: "B" },
];

const BSI: NextPage = () => {
  return (
    <Layout>
      <NodeGraph width={width} height={height} nodes={nodes} links={links} />
    </Layout>
  );
};

export default BSI;
