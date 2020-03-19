const chainMaker = {
  chns: [],
  getLength() {
    return this.chns.length;
  },
  addLink(value) {
    this.chns.push(String(value));
    return this;
  },
  removeLink(position) {
    if (!(--position >= 0 && position < this.chns.length)) {
      this.chns.length = 0;
      throw Error();
    }
    this.chns.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chns.reverse();
    return this;
  },
  finishChain() {
    let result = (this.chns.map(item => "( " + item + " )")).join('~~');
    this.chns = [];
    return result;
  }
};

module.exports = chainMaker;
