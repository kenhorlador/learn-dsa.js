

class Graph {
  constructor() {
    this.adjencencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjencencyList[vertex])this.adjencencyList[vertex] = []
  }


}
