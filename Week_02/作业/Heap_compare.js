/**
 * @name Heap
 * @author Zhao Yanwei
 * @createdTime 2020-09-20
 */

class Heap {
  constructor (isMin) {
    this.heap = []
    this.k = 2
    // 用来设置是否为小根堆 默认为大根堆
    this.isMin = isMin
  }

  getLeftIndex (index) {
    return index * this.k + 1
  }

  getRightIndex (index) {
    return index * this.k + 2
  }

  getParentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  size () {
    return this.heap.length
  }

  needChange (preIndex, curIndex) {
    // 在不同情况下 根据两个节点的index来判断
    if (this.isMin) {
      return this.heap[curIndex] < this.heap[preIndex]
    } else return this.heap[curIndex] > this.heap[preIndex]
  }

  isEmpty () {
    return this.size() === 0
  }

  insert (val) {
    if (val !== null) {
      this.heap.push(val)
      this.shiftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  shiftUp (index) {
    let parentIndex = this.getParentIndex(index)
    while (index > 0 && this.needChange(parentIndex, index)) {
      this.swap(index, parentIndex)
      index = parentIndex
      parentIndex = this.getParentIndex(index)
    }
  }

  swap (index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }

  extract () {
    if (!this.size()) return undefined
    else if (this.size() === 1) return this.heap.shift()
    else {
      let res = this.heap.shift()
      this.heap.unshift(this.heap.pop())
      this.shiftDown(0)
      return res
    }
  }

  shiftDown (index) {
    let element = index, left = this.getLeftIndex(index), right = this.getRightIndex(index)
    if (left < this.size() && this.needChange(element, left)) {element = left}
    if (right < this.size() && this.needChange(element, right)) {element = right}
    if (element !== index) {
      this.swap(element, index)
      this.shiftDown(element)
    }
  }
}