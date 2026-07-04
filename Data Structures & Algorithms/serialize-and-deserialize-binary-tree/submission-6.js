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
    serialize(root) {
        const res = [];
        this.serializeDFS(root, res);
        return res.join(',');
    }

    serializeDFS(node, res) {
        if (!node) {
            res.push('N');
            return;
        }

        res.push(node.val.toString());
        this.serializeDFS(node.left, res);
        this.serializeDFS(node.right, res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const i = { val: 0 };
        return this.deserializeDFS(data.split(','), i)
    }

    deserializeDFS(data, i) {
        if (data[i.val] === 'N') {
            i.val++;
            return null;
        }

        const node = new TreeNode(parseInt(data[i.val]));

        i.val++;

        node.left = this.deserializeDFS(data, i);
        node.right = this.deserializeDFS(data, i)

        return node;
    }
}
