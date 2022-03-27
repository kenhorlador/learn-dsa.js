

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  // add nodes function
  addVertex(vertex) {
    if (!this.adjacencyList[vertex])this.adjacencyList[vertex] = []
  }

  // add connection
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
  }

  // remove connection
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => {
      v !== vertex2
    })
  }

  // remove node function
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(adjacentVertex, vertex)
    }

    delete this.adjacencyList[vertex]
  }
}
