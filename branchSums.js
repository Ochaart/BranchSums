
// O(logN) | O(n)
// O(n) | O(n)
function branchSums(root) {
  // Write your code here.
	let result = [];
	function collectSums(node, sum) {
		if (!node.left && !node.right) {
			result.push(sum);
		}
		if (node.left) {
			collectSums(node.left, sum + node.left.value);
		}
		if (node.right) {
			collectSums(node.right, sum + node.right.value);
		}
	}
  collectSums(root, root.value);
	return result;
}