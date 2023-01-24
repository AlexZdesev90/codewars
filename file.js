//hello!

// function Stack() {
//     this.arr = [];
//     this.count = 0

//     this.add = function (value) {
//         this.arr.push(value);
//         this.count++;
//     }

//     this.getElement = function () {
//         this.arr.pop();
//         this.count--;
//     }

//     this.arrayLenght = function () {
//         return this.count;
//     }

//     this.print = function () {
//         return this.arr;
//     }

// }

// const stack = new Stack();
// stack.add(12)
// stack.add("second")
// console.log(stack.arrayLenght())
// console.log(stack.print())
// console.log(stack.getElement())
// console.log(stack.print())


// class Queue {
//     #queue = [];

//     enqueue(el) {
//         this.#queue.push(el);
//     }

//     dequeue() {
//         this.#queue.shift();
//     }

//     print() {
//         return this.#queue;
//     }

// }


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToEnd(value) {
        const node = new Node(value);

        if (this.tail) {
            this.tail.next = node;
        }
        if(!this.head) {
            this.head = node
        }

        this.tail = node;
    }

    addToStart(value) {
        const node = new Node(value, this.head);

        if(!this.tail) {
            this.tail = node
        }
        this.head = node
    }

    appendAfter(after, x) {
        const found = this.find(after);
        if(!found) {
            return "not found"
        }
        found.next = new Node(x, found.next)
    }

    toArray () {
        let arr = []
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next
        }
        return arr
    }

    find(value){
        let current = this.head
        while (current) {
            if(current.value === value) {
                return current
            }
            current = current.next
        }
    }

}


// const link = new LinkedList();
// link.addToEnd("3")
// link.addToStart("2")
// link.addToStart("1")
// console.log(link.find("2"))
// console.log(link.find("4"))
// link.appendAfter("1", "1.1")

// console.log(link.toArray())



class Set {
    #array = []
    add(value) {
        if(this.#array.includes(value)) {
            return this
        }
        this.#array.push(value);
        return this
    }

    size(){
        return this.#array.length;
    }

    has(value){
        return this.#array.includes(value)
    }

    print(){
        return this.#array
    }
}

const set = new Set()
set.add(1).add(2).add(2).add(3)
console.log(set.has(2))
console.log(set.has(1023242))
console.log(set.size())
console.log(set.print())


///////////////////////////////////////////////////////////////////




function HashTable (size = 13) {
    const _store = [];
    const _size = size;

    function hash(string){
        let res = 0;
        for (let i = 0; i < string.length; i++) {
            res += string.charCodeAt(i) * (i+1);
        }
        return res % 13
        
    }

    function findMatchingIndex(arr, key) {
        for(let k = 0; k < arr.length; k++) {
            if(arr[k][0] === key) return k;
        }
    }

    return {
        setElement(key, value) {
            const i = hash(key);
            if(!_store[i] ) {
                _store[i] = [
                    [key, value]
                ];
            }
            else {
                const arr = _store[i]
                const matchingIndex = findMatchingIndex(arr, key)

                if(matchingIndex) {
                    arr[matchingIndex] = [key, value]
                    return
                }

                arr.push([key, value])
            }
        },
        getElement(key) {
            const i = hash(key);
            if(_store[i]){
                const arr = _store[i]
                const matchingIndex = findMatchingIndex(arr, key);
                if(matchingIndex) {
                    return arr[matchingIndex][1]
                }
            }
        },
        dump() {
            return _store;
        }
    }
}

const rr = new HashTable();
rr.setElement("Ma", "898-0f-54")
rr.setElement("Iko", "534-52-089")
rr.setElement("rerererew", "534-52-089")
rr.setElement("trtre", "534-52-089")
rr.setElement("reryeyeyeyeeкукуrerew", "534-52-089")
rr.setElement("34343rwwrwerwtwt", "534-52-089")

console.log(rr.getElement("Ma"))
// console.log(rr.getElement("534-52-089"))
// console.log(rr.getElement("534-52-089"))
console.log(rr.dump())