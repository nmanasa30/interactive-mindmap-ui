export function transformData(data) {
  const nodes = [];
  const edges = [];

  function walk(node, x = 0, y = 0, parentId = null) {
    nodes.push({
      id: node.id,
      data: { label: node.title },
      position: { x, y }
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${node.id}`,
        source: parentId,
        target: node.id
      });
    }

    node.children?.forEach((child, index) => {
      walk(child, x + 250, y + index * 120, node.id);
    });
  }

  walk(data, 0, 0);
  return { nodes, edges };
}
