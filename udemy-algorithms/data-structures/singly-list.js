

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const node = new Node(val);
        if(!this.head){
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }

    pop() {
       if(!this.head) return undefined
        if(this.length === 1){
            const returnValue = this.head;
            this.head = null;
            this.tail = null
            this.length --;
            return returnValue;
        }
        let current = this.head;
        let pre = this.head
        while(current.next){
            pre = current;
            current = current.next;
        }
        this.tail = pre;
        this.tail.next= null;
        this.length --;
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let headNode =  this.head;
        this.head = headNode.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return headNode;
    }

    unshift(val){
        if(!this.head){
            return this.push(val);
        }
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
        
    }

    get(position){
        let value;
        if(position < 0 || position > this.length)
            return undefined
        else if(position === 0)
            value=this.head;
        else if(position === this.length)
            value=this.tail;
        else {
            let i = 0;
            let k = this.head;
            while(i !== position){
                 k = k.next;
                 i++;
            }   
            value = k;
        }
        return value;
    }

    set(i, value){
        const node = this.get(i);
        if(node){
            node.val = value;
        }
        return node;
    }


    insert(i, val){
       if(i < 0 || i > this.length) return false;
       if(i === this.length) return this.push(val);
       if(i === 0) return this.unshift(val) 
       const newNode = new Node(val)
       const prev = this.get(i-1);
       const next = prev.next;
       prev.next = newNode;
       newNode.next = next
       this.length++;
       return true;
    }

    remove(index){
        if(index < 0 || index > this.length){
            return undefined
        } if(index === 0) {
            return this.shift();
        }
        const prev = this.get(index-1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return remove;
    }

    reverse(){
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let prev = null;
        let next;
        for(let i=0; i< this.length;i++){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;            
        }
        return this;
    }

    print(){
        const items = [];
        let current = this.head;
        while(current){
            items.push(current.val)
            current = current.next;
        }
        console.log(items.toString())

    }
}

const list = new SinglyLinkedList();
list.push(11);
list.push(12);
list.push(13);
list.push(14);
list.push(15);
list.push(16);
list.push(17);
list.push(18);
list.push(19);
list.push(20);