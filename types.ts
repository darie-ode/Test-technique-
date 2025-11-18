import type { WebGraph, GraphNode } from "./type.js";

export async function crawler(urlDepart: string, profondeurMax: number = 2): Promise<WebGraph> {
  const graphe: WebGraph = { nodes: new Map() };

  async function visiterPage(url: string, profondeur: number) {
    if (profondeur > profondeurMax) return;
    if (graphe.nodes.has(url)) return;

    const liens: string[] = [];

    if (url === "A") liens.push("B", "C");
    if (url === "C") liens.push("D");

    const noeud: GraphNode = { url, depth: profondeur, links: liens };
    graphe.nodes.set(url, noeud);

    for (const lien of liens) {
      await visiterPage(lien, profondeur + 1);
    }
  }

  await visiterPage(urlDepart, 0);
  return graphe;
}

(async () => {
  const webGraph = await crawler("A");
  console.log(webGraph);
})();
