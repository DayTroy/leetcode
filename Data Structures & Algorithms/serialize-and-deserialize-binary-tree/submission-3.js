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
    // [1,2,3,null,null,4,5]

    serialize(root) {
        const vals = [];
        this.serializeDFS(root, vals);
        return vals.join(',');
    }

    serializeDFS(node, vals) {
        if (node === null) {
            vals.push('N');
            return;
        };

        vals.push(node.val.toString());

        this.serializeDFS(node.left, vals);
        this.serializeDFS(node.right, vals);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const val = { i : 0 };
        const vals = data.split(',');
        return this.deserializeDFS(vals, val);
    }

    deserializeDFS(data, val) {
        if (data[val.i] === 'N') {
            val.i++;
            return null;
        }

        const node = new TreeNode(parseInt(data[val.i]));
        val.i++;
        node.left = this.deserializeDFS(data, val);
        node.right = this.deserializeDFS(data, val);
        return node;
    }
}
