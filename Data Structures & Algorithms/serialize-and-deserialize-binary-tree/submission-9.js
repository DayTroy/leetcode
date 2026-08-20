/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    // 1,2,N,N,4,5
    serialize(root) {
       const res = [];
       this.dfsSerialize(root, res)
       return res.join(',');
    }

    dfsSerialize(node, res) {
        if (!node) {
            res.push('N');
            return;
        }

        res.push(String(node.val));
        this.dfsSerialize(node.left, res);
        this.dfsSerialize(node.right, res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split(',');
        const index = { val: 0 };
        return this.dfsDeserialize(data, index);
    }

    dfsDeserialize(data, index) {
        if (data[index.val] === 'N') {
            index.val++;
            return null;
        }

        let node = new TreeNode(parseInt(data[index.val]));
        index.val++;

        node.left = this.dfsDeserialize(data, index);
        node.right = this.dfsDeserialize(data, index);

        return node;
    }
}   
