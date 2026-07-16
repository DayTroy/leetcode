// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const nodes = new Map();
        nodes.set(null, null);

        let curr = head;
        while (curr) {
            const node = new Node(curr.val);
            nodes.set(curr, node);
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const copy = nodes.get(curr);
            copy.next = nodes.get(curr.next);
            copy.random = nodes.get(curr.random);
            curr = curr.next;
        }

        return nodes.get(head);
    }
}
