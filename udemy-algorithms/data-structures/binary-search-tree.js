class Node {
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        const newNode = new Node(val)
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        addNode(this.root);
        function addNode(node) {
            if(node.value < newNode.value){
                if(!node.right) node.right = newNode;
                else addNode(node.right)
            } else if(node.value > newNode.value) {
                if(!node.left) node.left = newNode;
                else addNode(node.left)
            } else{
                return;
            }
        }
        return this;
    }

    find(val){
        function findNode(node) {
            if(node.value < val){
                return node.right ? findNode(node.right) : false;
            } else if(node.value > val) {
                return node.left ? findNode(node.left) :  false;
            } else {
                return node;
            }
        }
        return this.root ? findNode(this.root) : false;
    }

    contains(value){
        if(!this.root) return false;
        let node = this.root, contains;
        while(node && !contains){
            if(value > node.value){
                node= node.right;
            } else if(value < node.value){
                node = node.left;
            } else{
                return true;
            }
        }
        return false;
    }

    bfs(){
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);
        while(queue.length > 0){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log(data.toString());
    }

    dfsPreOrder(){
        let visited = []
        helper(this.root);
        function helper(node){ 
            visited.push(node.value);
            if(node.left) helper(node.left)
            if(node.right) helper(node.right)
        }
        console.log(visited.toString());
    }

    dfsPostOrder(){
        let visited = []
        helper(this.root);
        function helper(node){ 
            if(node.left) helper(node.left)
            if(node.right) helper(node.right)
            visited.push(node.value);
        }
        console.log(visited.toString());
    }

    dfsInOrder(){
        let visited = []
        helper(this.root); 
        function helper(node){ 
            if(node.left) helper(node.left)
            visited.push(node.value);
            if(node.right) helper(node.right)
        }
        console.log(visited.toString());
    }

    // Leet code
    hasSum(node, sum){
        if(!this.node) return false;
        if(!node.right && !node.left){
            console.log(node.value, sum);
            return node.value === sum;
        }
        sum = sum - node.value; // 0 -1 = -1 
        const leftSum = this.hasSum(node.left, sum);
        const rightSum = this.hasSum(node.right, sum);
        return rightSum || leftSum;
    }
}

const tree = new BinarySearchTree();
// tree.insert(100).insert(50).insert(50).insert(70).insert(20).insert(10).insert(30).insert(200).insert(170).insert(220)
tree.insert(1).insert(2)
console.log(tree.hasSum(tree.root, 0));
// tree.bfs()
// tree.dfsPreOrder()
// tree.dfsPostOrder()
// tree.dfsInOrder()