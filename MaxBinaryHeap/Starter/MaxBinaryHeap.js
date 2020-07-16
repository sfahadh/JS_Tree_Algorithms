function MaxBinaryHeap() {
    this.values = [];
}

MaxBinaryHeap.prototype.insert = function (data) {
    this.values.push(data);
    this.bubbleUp();
}

MaxBinaryHeap.prototype.bubbleUp = function () {
    let index = this.values.length - 1;
    let parentIndex;
    let temp;

    while (index > 0) {
        parentIndex = Math.floor((index - 1) / 2);
        temp = this.values[parentIndex];

        this.values[parentIndex] = this.values[index];
        this.values[index] = temp;
        index = parentIndex;
    }
}

module.exports = MaxBinaryHeap;