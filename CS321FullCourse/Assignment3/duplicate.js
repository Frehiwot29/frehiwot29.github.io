"use strict";
/*eslint-disable*/
const Iter = require('./sequance');
function removeDuplcate(List) {
    for (let i = 0; i < List.size(); i++) {
        let current = List.elemAtRank(i);
        for (let j = i + 1; j < List.size(); j++) {
            if (current === List.elemAtRank(j)) {
                List.removeAtRank(j);
                j--;
            }
        }
    }
    return List;
}
let list = new Iter.Sequence()
list.insertFirst(4)
list.insertFirst(4)
list.insertFirst(6)
list.insertFirst(4)
list.insertFirst(9)
list.insertFirst(4)
removeDuplcate(list)
console.log(list)








