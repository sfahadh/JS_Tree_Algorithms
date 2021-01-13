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

module.exports = MaxHeap;