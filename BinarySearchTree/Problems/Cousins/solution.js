const cousins = (root, n1, n2) => {
    if (!root || !root.left || !root.right) return false;
    const left = bfs(root.left);
    const right = bfs(root.right);

    for (let i = 0; i < left.length; i++) {
        if (left[i] && right[i]) {
            if (left[i].includes(n1) && right[i].includes(n2) || 
                left[i].includes(n2) && right[i].includes(n1)) {
                    return true;
            }
        } else {
            return false;
        }
    }
    return false;
}

const bfs = root => {
    const results = [[]]
    const queue = [root, "level"];

    while (queue.length > 1) {
        const branch = queue.shift();
        results[results.length - 1].push(branch.data);
        if (branch.left && branch !== "level") queue.push(branch.left);
        if (branch.right && branch !== "level") queue.push(branch.right);
        if (!queue.includes("level")) {
            queue.push("level")
            results.push([])
        }
    }
    return results;
}