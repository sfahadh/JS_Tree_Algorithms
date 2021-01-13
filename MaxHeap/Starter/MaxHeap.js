function MaxHeap() {
    this.values = [];
}

MaxHeap.prototype.insert = function (data) {
    this.values.push(data);
    this.bubbleUp();
}

MaxHeap.prototype.bubbleUp = function () {
    let index = this.values.length - 1;
    const element = this.values[index];
    let parentIndex;
    let parent;

    while (index > 0) {
        parentIndex = Math.floor((index - 1) / 2);
        parent = this.values[parentIndex];
        if (element <= parent) break;

        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
    }
}

const heap = new MaxHeap();
[48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41].forEach(node => {
    heap.insert(node);
})
console.log(heap);

module.exports = MaxHeap;