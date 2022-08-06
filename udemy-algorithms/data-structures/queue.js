class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
  };
  
  class Q{
      constructor(){
          this.first =null;
          this.last = null;
          this.length = null;
      }

      enqueue(val){
          const node = new Node(val);
          if(!this.first){
              this.first = node
              this.last = node
          } else {
              this.last.next = node;
              this.last = node;
          }
          this.length++;
          return this;
      }

      dequeue(){

          if(this.length === 0) return null;
          let retunValue = this.first;
          if(this.length === 1){
              this.first = null;
              this.last = null;
          } else{
             this.first= this.first.next;
          }
          this.length--;
          return retunValue;
      }

      printq(){
          const items = [];
          let current = this.first;
          while(current){
              items.push(current.val);
              current = current.next;
          }
          console.log(items.toString());
      }
  }

const qu = new Q();

qu.enqueue(1).enqueue(2).enqueue(3).enqueue(4)