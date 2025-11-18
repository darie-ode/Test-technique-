Description

Ce projet implémente un web crawler simple qui visite les pages d’un site web et construit un graphe des pages sous forme de WebGraph. Chaque page visitée est représentée par un GraphNode contenant son URL, sa profondeur depuis la page de départ et les liens sortants internes.

Structure des données

GraphNode

interface GraphNode {
  url: string;       // URL de la page
  depth: number;     // Profondeur depuis la page de départ
  links: string[];   // URLs des pages liées
}

Chaque page du site est un nœud du graphe.
depth permet de limiter le crawl et d’éviter les boucles.
links contient tous les liens internes présents sur la page.

WebGraph

interface WebGraph {
  nodes: Map<string, GraphNode>; // Toutes les pages uniques
}

nodes est une Map où la clé = URL de la page et la valeur = le GraphNode.
La Map permet de retourner rapidement chaque page et d’éviter les doublons.

Fonctionnement

1. Démarrage : le crawler commence par une URL de départ (startUrl).
2. Récursion : pour chaque page visitée :
   - Récupère les liens internes vers le même domaine.
   - Crée un GraphNode avec URL, depth et links.
   - Ajoute le nœud dans le WebGraph.
   - Appelle récursivement la fonction sur chaque lien trouvé.
3. Limitation de profondeur : la récursion s’arrête lorsque la profondeur dépasse maxDepth.
4. Gestion des erreurs : si une page est inaccessible, elle est ignorée sans interrompre le crawl.

Choix techniques

- GraphNode : permet de stocker toutes les informations utiles pour chaque page.
- Map dans WebGraph : pour accéder rapidement aux pages et éviter les doublons.
- Récursion + depth : parcours complet des pages tout en limitant la profondeur.
- Filtrage des liens : le crawler reste sur le même domaine, évitant de sortir du site.
- Try/catch + maxDepth : robustesse face aux pages cassées et contrôle du crawl.

Exemple de graphe généré

Pour un site fictif :

Page A → Page B, Page C
Page C → Page D

Le WebGraph contiendra :

Map {
  "A" => { url: "A", depth: 0, links: ["B","C"] },
  "B" => { url: "B", depth: 1, links: [] },
  "C" => { url: "C", depth: 1, links: ["D"] },
  "D" => { url: "D", depth: 2, links: [] }
}
