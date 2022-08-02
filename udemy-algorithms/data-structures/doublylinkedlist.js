class Node{
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
  };
  
  class DoublyLinkedList{
      constructor(){
          this.head =null;
          this.tail = null;
          this.length = null;
      }
  
      /* Pring all intems in the linked list */
      print(){
          let items = [];
          let current = this.head;
          while(current){
              items.push(current.val)
              current = current.next
          }
          console.log(items.toString());
      }
  
      /* adds a node at the last */
      push(val){
          const node = new Node(val);
          if(!this.head){
              this.head = node;
              this.tail = this.head;
          }else {
              this.tail.next= node;
              node.prev = this.tail;
              this.tail = node;
          }
          this.length++
          return this;
      }
  
      /* removes the last node from the linked list */
      pop(){
          if(this.length === 0){
              return undefined
          }
          let lastNode = this.tail;
          if(this.length === 1){
              this.head = null;
              this.tail = null;
          } else{
              this.tail = lastNode.prev;
              this.tail.next = null;
              lastNode.prev = null;
          }
          this.length--
          return lastNode;
      }
  
  
      /*removes the first node from the beginning */
      shift(){
          if(!this.head ) return undefined;
          if(this.length === 1){
              return this.pop();
          }
          let temp = this.head;
          this.head = temp.next;
          this.head.prev = null
          this.length--;
          return temp;
      }
  
      /*adds the first node from the beginning */
      unshift(val){
          if(this.length === 0){
              return this.push(val);
          }
          let newNode = new Node(val);
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
          this.length++;
          return newNode;
      }
  
      /* get the node by index*/
      lessEfficientget(index){
          if(index < 0 || index >= this.length){
              return undefined
          } 
          if(index === 0) return this.head;
          if(index === this.length-1) return this.tail;
          let current = this.head;
          let i = 0;
          while(i !== index){
              current = current.next;
              i++
          }
          return current;
      }

      get(index){
        if(index < 0 || index >= this.length){
            return undefined
        } 
        if(index === 0) return this.head;
        if(index === this.length-1) return this.tail;
        let i, current;
        if(index <= this.length/2){
            current = this.head;
            i = 0;
            while(i !== index){
                current = current.next;
                i++
            }
        } else{
            current = this.tail;
            i = this.length;
            while(i !== index){
                current = current.prev;
                i--
            }
        }        
        return current;
      }
  
      /* set a value for the given index*/
      set(index, val){
          let node = this.get(index);
          if(node){
              node.val = val;
          }
          return node;
      }
  
      isIndexInValid(index){
            console.log(index, this.length);
          return index < 0 || index >= this.length
      }
  
      /*Insert a new node in the given index */
      insert(index, val){
          if(this.isIndexInValid(index)) return undefined;
          if(index === 0) return this.unshift(val);
          if(index === this.length-1) return this.push(val);
          const newNode = new Node(val);
          const indexNode = this.get(index);
          indexNode.prev.next = newNode;
          newNode.next = indexNode;
          newNode.prev = indexNode.prev;
          indexNode.prev = newNode;
          this.length++;
          return true;         
      }
  
      /*removes a new node in the given index */
      remove(index){
          if(this.isIndexInValid(index)) return undefined;
          if(index === 0) return this.shift();
          if(index === this.length-1) return this.pop();
          const indexNode = this.get(index);
          indexNode.prev.next = indexNode.next;
          indexNode.next.prev = indexNode.prev;
          [indexNode.next, indexNode.prev] = [null, null];
          this.length--;
          return true;      
      }

      /* reverse the linked list */
      reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        for(let i=0; i< this.length; i++) {
            prev = node.prev;
            node.prev = node.next;
            node.next = prev;
            node = node.prev;
        }
      }
  }
  
  const list = new DoublyLinkedList();
  list.push(10).push(11).push(12).push(13).push(14).push(15).push(16).push(17).push(18).push(19).push(20)
      