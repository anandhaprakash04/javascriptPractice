// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
// function PaginationHelper(collection, itemsPerPage){
//
// }

class PaginationHelper {
    collection = []
    itemsPerPage ;
    pages = [];

    constructor(collection, itemsPerPage){
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.setPages();
    }

    pageCount() {
        return Math.ceil(this.collection.length/this.itemsPerPage);
    }

    itemsCount() {
        return this.collection.length;
    }

    setPages() {
        let [start , end ] = [0 , this.itemsPerPage];
        while(start< this.collection.length){
            this.pages.push(this.collection.slice(start, end));
            start = end;
            end += this.itemsPerPage;
        }
        console.log(this.pages);
    }

    pageItemCount(pageNo) {
        return pageNo > this.pages.length-1 || pageNo < 0 ? -1 : this.pages[pageNo].length;
    }

    pageIndex(itemIndex) {
       const value = itemIndex/this.itemsPerPage;
       return itemIndex > this.collection.length || itemIndex < 0 ? -1 :
           value > 1 ? Math.ceil(value) : Math.floor(value)
    }
}

const helper = new PaginationHelper(['a','b','c','d','e','f','a','b','c','d','e','f','a','b','c','d','e','f'], 4);
console.log(helper.pageIndex(15))
