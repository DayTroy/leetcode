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
        const data = new Map();
        data.set(null, null);

        let curr = head;
        while (curr) {
            data.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const copy = data.get(curr);
            copy.next = data.get(curr.next);
            copy.random = data.get(curr.random);
            curr = curr.next
        }

        return data.get(head);
    }
}
