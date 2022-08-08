

// Find parent = (n-1)/2
// find left child = 2n+1
// find right child = 2n+2



class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(item){
        this.values.push(item);
        let i = this.values.length-1;
        while(i > 0){
            let parentNode = Math.floor((i-1)/2);
            if(this.values[parentNode] < this.values[i]){
                [this.values[parentNode], this.values[i]] = [this.values[i], this.values[parentNode]];
                i = parentNode;
            } else{
                return;
            }
        }
    }

   extractMax(){
        if(!this.values.length) return null;
        let max = this.values[0];
        this.values[0] = this.values.pop();
        if(this.values.length > 0) {
            this.sinkDown()
        }
        return max;
    }

    sinkDown(){
        let parentIdx = 0;
        while(true){
            let leftChildIdx = 2 * parentIdx +1
            let rightChildIdx = leftChildIdx +1;
            let parent = this.values[parentIdx];
            let left = this.values[leftChildIdx] ?? -Infinity;
            let right = this.values[rightChildIdx] ?? -Infinity;
            if(left > parent || right > parent){
                if(right > left){
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

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values.toString())
heap.extractMax();
console.log(heap.values.toString())
heap.extractMax();
console.log(heap.values.toString())
heap.extractMax();
console.log(heap.values.toString())
heap.extractMax();
console.log(heap.values.toString())
heap.extractMax();
console.log(heap.values.toString())
heap.extractMax();
console.log(heap.values.toString())
heap.extractMax();
console.log(heap.values.toString())