interface WebNode {
  url: string;
  out: string[];
}

interface WebGraph {
  root: string;
  nodes: Record<string, WebNode>;
}

const graph: WebGraph = {
  root: 'https://volume-2.com/',
  nodes: {
    'https://volume-2.com/': { 
      url: 'https://volume-2.com/', 
      out: [] 
    },
    'https://volume-2.com/a-propos': { 
      url: 'https://volume-2.com/a-propos', 
      out: [] 
    },
    'https://volume-2.com/contact': { 
      url: 'https://volume-2.com/contact', 
      out: [] 
    }
  }
};

console.log(graph);
