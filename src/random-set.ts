export { RandomSet, randInt };

// Implement a set from which elements can be removed at random.

class RandomSet<T> {
    values: T[] = [];
    init = true;

    add(value: T) {
        this.values.push(value);
    }

    next(): T | undefined {
        let result = this.peek();
        this.deleteLast();
        return result;
    }

    peek(): T | undefined {
        let i = randInt(this.values.length);
        [this.values[i], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[i]];
        return this.values[this.values.length - 1];
    }

    deleteLast() {
        this.values.pop();
    }

    get size(): number {
        return this.values.length;
    }
}

function randInt(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}

