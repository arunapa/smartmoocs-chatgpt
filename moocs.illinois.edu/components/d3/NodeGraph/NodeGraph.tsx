import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import NodeGraphProps, { Node as GraphNode } from "./NodeGraph.props";
import { Header, Modal } from "semantic-ui-react";

const NodeGraph = ({
  width = 1000,
  height = 1000,
  links,
  nodes,
  draggable = true,
}: NodeGraphProps) => {
  const svgRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Set up the simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(400, 300));

    // Add the links
    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#e5e5e5")
      .attr("stroke-width", 2);

    // Add the nodes
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .attr('data-id', function(d) {
        return d.id;
      });

    node.append("circle").attr("r", 20).attr("fill", "#13294B");

    node
      .append("text")
      .text((d) => d.concept.charAt(0).toUpperCase() + d.concept.slice(1))
      .attr("y", 35)
      .attr("text-anchor", "middle");

    // Update the simulation on each tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    if (draggable) {
      node.call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended) as any
      );

      function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }

    function onclick(event: any) {
      const elem: HTMLElement = event.currentTarget;
      if (elem) {
        const id = elem.dataset.id;
        const concept = nodes.find((node) => node.id === id);
        setSelectedNode(concept);
        setModalOpen(true);
      }
    }

    document.querySelectorAll("g[data-id]").forEach((elem) => {
        elem.addEventListener("click", onclick); 
    });

    return () => {
      // Clean up the simulation on unmount
      simulation.stop();
    };
  }, [width, height, nodes, links, draggable]);

  const getRelatedConcepts = (node: GraphNode) => {
    const relatedNodes: GraphNode[] = [];
    links.forEach((link: any) => {
        console.log(link)
      let relatedNode: GraphNode | undefined = undefined;
      if (link.source.id === node.id) relatedNode = link.target;
      if (link.target.id === node.id) relatedNode = link.source;

      if (relatedNode) {
        relatedNodes.push(relatedNode);
      }
    });

    const uniqueArr = relatedNodes.reduce((unique, item) => {
      return unique.includes(item) ? unique : [...unique, item];
    }, []);

    return uniqueArr;
  }

  return (
    <>
      <svg ref={svgRef} width={width} height={height}>
        {/* SVG content */}
      </svg>
      <Modal
        onClose={() => setModalOpen(false)}
        onOpen={() => setModalOpen(true)}
        open={modalOpen}
        // trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>{selectedNode?.concept}</Modal.Header>
        <Modal.Content image>
          {/* <Image size='medium' src='/images/avatar/large/rachel.png' wrapped /> */}
          <Modal.Description>
            <Header>Related concepts</Header>
            {selectedNode && (
              <ul>
                {getRelatedConcepts(selectedNode).map((node, index) => (
                  <li key={"node-" + index}>{node.concept}</li>
                ))}
              </ul>
            )}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default NodeGraph;
