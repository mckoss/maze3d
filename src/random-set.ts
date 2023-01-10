export { RandomSet, shuffle, randInt };

// Implement a set from which elemeents can be removed at random.

class RandomSet<T> {
    values: T[] = [];
    init = true;

    add(value: T) {
        this.values.push(value);
    }

    next(): T | undefined {
        // Shuffle on first use
        if (this.init) {
            this.init = false;
            shuffle(this.values);
        }
        return this.values.pop();
    }

    get size(): number {
        return this.values.length;
    }
}

function shuffle<T>(a: T[]) {
    for (let i = 0; i < a.length; i++) {
        const j = randInt(a.length, i);
        // Swap ith and jth elements.
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function randInt(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}

