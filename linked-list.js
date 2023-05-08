class LinkedList {
  constructor(fhead) {
    this.fhead = fhead;
  }

  append(value, node = this.fhead) {
    let newNode = new Node(value, null);
    if (node.next === null) {
      node.next = newNode;
    } else {
      this.append(value, node.next);
    }
  }

  prepend(value) {
    let newNode = new Node(value, this.fhead);
    this.fhead = newNode;
  }

  size(node = this.fhead, count = 0) {
    while (node !== null) {
      count++;
      node = node.next;
    }

    return count;
  }

  head() {
    return this.fhead;
  }

  tail(node = this.fhead) {
    while (node.next !== null) {
      node = node.next;
    }

    return node;
  }

  at(index, i = 0, node = this.fhead) {
    while (i !== index) {
      node = node.next;
      i++;
    }

    return node;
  }

  pop(node = this.fhead) {
    while (node !== this.at(this.size() - 2)) {
      node = node.next;
    }

    node.next = null;
  }

  contains(value, node = this.fhead) {
    while (node.value !== value && node.next !== null) {
      node = node.next;
    }
    if (node.value === value) return true;

    return false;
  }

  find(value, node = this.fhead, i = 0) {
    while (node.value !== value && node.next !== null) {
      node = node.next;
      i++;
    }
    if (node.value === value) return i;

    return null;
  }

  toString(str = "", node = this.fhead) {
    while (node.next !== null) {
      str += `${node.value} -> `;
      node = node.next;
    }

    return str + `${node.value} -> null`;
  }

  insertAt(value, index) {
    if (index >= this.size()) this.append(value);
    else {
      let newNode = new Node(value, this.at(index));
      this.at(index - 1).next = newNode;
    }
  }

  removeAt(index) {
    if (index >= this.size()) return 0;

    this.at(index - 1).next = this.at(index + 1);
  }
}

class Node {
  constructor(value, next) {
    (this.value = value), (this.next = next);
  }
}
