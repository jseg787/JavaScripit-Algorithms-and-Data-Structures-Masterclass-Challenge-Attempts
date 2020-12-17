class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}

	/***************************
	 * Traversal
	 */

	depthFirstRecursive(vertex) {
		const results = []; // Keep track of the order
		const visited = {}; // Keep track of the places we've been
		const adjacencyList = this.adjacencyList;

		DFS(vertex);

		function DFS(vertex) {
			if (adjacencyList[vertex].length === 0) {
				return null;
			}

			visited[vertex] = true;
			results.push(vertex);

			for (let neighbor of adjacencyList[vertex]) {
				if (!visited[neighbor]) {
					DFS(neighbor);
				}
			}
		}

		return results;
	}

	depthFirstIterative(start) {
		const stack = [ start ];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return result;
	}

	breadthFirst(start) {
		const queue = [ start ];
		const result = [];
		const visited = {};

		visited[start] = true;

		while (queue.length) {
			let currentVertex = queue.shift();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					queue.push(neighbor);
					visited[neighbor] = true;
				}
			});
		}

		return result;
	}
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
