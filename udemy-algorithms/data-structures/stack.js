class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first =  newNode;
            this.first = this.last;
        } else{
            const temp = this.first;
            newNode.next = temp;
            this.first = newNode;
        }
        return ++this.size;
    }
}