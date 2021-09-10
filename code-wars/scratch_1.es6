// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    // console.log('collection', collection)
    // console.log('itemsPerPage', itemsPerPage)

}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    console.log('pageItemCount')
    let [start , end , pages] = [0 , this.itemsPerPage, []];
    while(start< this.collection.length){
        pages.push(this.collection.slice(start, end));
        start = end;
        end += this.itemsPerPage;
    }
    console.log(pages)
    return pageIndex >= this.pageCount()  || pageIndex < 0 ? -1 :
        pageIndex === this.pageCount()-1 ? this.collection.length%this.itemsPerPage || this.itemsPerPage : this.itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    const value = itemIndex/this.itemsPerPage;
    return this.collection.length === 0 || itemIndex > this.collection.length || itemIndex < 0 ? -1 :
         Math.floor(value)
}

// var helper = new PaginationHelper([1,2,3,4,5,6,7,8], 4);
var helper = new PaginationHelper([1,2,3,4,5,6,], 4);
console.log(helper.pageItemCount(1)); // 0 .. which is not correct at all


/*var helper = new PaginationHelper([ 1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24 ], 10);
console.log(helper.pageItemCount(2))
console.log(helper.pageIndex(25))*/

