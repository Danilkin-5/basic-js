module.exports = class DepthCalculator {    
    calculateDepth(arr) {
        var depth = 1
        arr.forEach(element => {
            if (Array.isArray(element)) {
                depth = Math.max(this.calculateDepth(element) + 1, depth)
            }
            else return 0
        });
        return depth;
    }
};