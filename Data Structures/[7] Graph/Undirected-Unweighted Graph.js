

class Graph {
  constructor() {
    this.adjencencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjencencyList[vertex])this.adjencencyList[vertex] = []
  }


  addEdge(v1, v2) {
    this.adjencencyList[v1].push(v2)
    this.adjencencyList[v2].push(v1)
  }


}
