class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /* Pring all intems in the linked list */
    print(){
        let items = [];
        let current = this.head;
        while(current){
            items.push(current.data)
            current = current.next
        }
        console.log(items.toString());
    }

    /* Insert a new data at the end of linked list   */
    push(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return node;
    }

    /* Removes the last items from the linked list*/
    pop(){
        let returnValue;
        if(!this.size){
            return null
        }
        if(this.size === 1 ){
            returnValue = this.head;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return returnValue;
        }
        let current = this.head;
        let pre = current;
        while(current.next){
            pre = current;
            current = current.next;
        }
        returnValue = this.tail;
        this.tail = pre;
        this.tail.next = null;
        this.size--;
        return returnValue;
    }

    /*Removes the first element from the linked list */
    shift(){
        let returnValue;
        if(!this.head){
            return undefined;
        }
        if(this.size ===1 ){
            return this.pop();
        }
        returnValue = this.head;
        this.head = this.head.next;
        this.size--;
        return returnValue;
    }

    /*adds an element to the first*/
    unshift(val){
        const node = new Node(val);
        if(!this.head){
            return this.push(val);
        }
        node.next = this.head;
        this.head = node;
        return this.head;
    }

    /* Get a node by index */ 
    get(index){
        if(index < 0 || index > this.size){
            return undefined;
        } else if(index === 0){
            return this.head;
        } else if(index === this.size){
            return this.tail;
        } else {
            let i = 0;
            let current = this.head;
            while(i !== index){
                current = current.next;
                i++;
            }
            return current;
        }
    }

    /* set a value for a node by its index */ 
    set(data, index){
        let node = this.get(index)
        if(node){
            node.data = data;
        }
        return node;
    }

    /* Insert a node in the linked list */
    insert(data, index ){
        if(index < 0 || i > this.size) return false;
        if(index === this.size) return this.push(data);
        if(index === 0) return this.unshift(data) 
        let newNode = new Node(data);
        let prevNode = this.get(index-1);
        let next = prevNode.next;
        prevNode.next = newNode;
        newNode.next = next;
        this.size++;
        return newNode;
    }

    /* Removes a node in the linked list */
    remove(index ){
        if(index < 0 || i > this.size) return false;
        if(index === this.size) return this.pop();
        if(index === 0) return this.shift() 
        let prevNode = this.get(index-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.size--;
        return removed;
    }

    /*reverse a linked list*/
    reverse(){
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let prev = null;
        let next;
        for(let i=0; i< this.size; i++){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
    }
    
}

const list = new SinglyLinkedList();
list.push(10)
list.push(11)
list.push(12)
list.push(13)
list.push(14)
list.push(16)