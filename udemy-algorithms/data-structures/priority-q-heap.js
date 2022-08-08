class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}
// Implemented based on MinBinaryHeap for practice
class PriorityQ{
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        console.log(this.values[0])
        this.bubbleUp();
    }

    bubbleUp(){
        let i = this.values.length-1;
        while(i > 0){
            let parentNode = Math.floor((i-1)/2);
            if(this.values[parentNode].priority > this.values[i].priority){
                [this.values[parentNode], this.values[i]] = [this.values[i], this.values[parentNode]];
                i = parentNode;
            } else{
                return;
            }
        }
    }

   dequeue(){
        if(!this.values.length) return null;
        let min = this.values[0];
        this.values[0] = this.values.pop();
        if(this.values.length > 0) {
            this.sinkDown()
        }
        return min;
    }

    sinkDown(){
        let parentIdx = 0;
        while(true){
            let leftChildIdx = 2 * parentIdx +1
            let rightChildIdx = leftChildIdx +1;
            let parent = this.values[parentIdx];
            let left = leftChildIdx < this.values.length 
                        ? this.values[leftChildIdx].priority : Infinity
            let right = rightChildIdx < this.values.length 
                    ? this.values[rightChildIdx].priority : Infinity
            if(left < parent.priority || right < parent.priority){
                if(right < left){
                    [this.values[parentIdx], this.values[rightChildIdx]] = [this.values[rightChildIdx], this.values[parentIdx]];
                    parentIdx = rightChildIdx;
                } else{
                    [this.values[parentIdx], this.values[leftChildIdx]] = [this.values[leftChildIdx], this.values[parentIdx]];
                    parentIdx = leftChildIdx;
                }
            } else {
                break;
            }
        }
    }
}

const ER = new PriorityQ();
ER.enqueue('common cold', 5)
ER.enqueue('Gunshot wound', 1)
ER.enqueue('High Fever', 4)
ER.enqueue('Broken Arm', 2)
ER.enqueue('Glass in foot', 3)
console.log(ER)
console.log(ER.dequeue())
console.log(ER)
console.log(ER.dequeue())
console.log(ER)
console.log(ER.dequeue())
console.log(ER)
console.log(ER.dequeue())
console.log(ER)
console.log(ER.dequeue())
console.log(ER)
console.log(ER.dequeue())