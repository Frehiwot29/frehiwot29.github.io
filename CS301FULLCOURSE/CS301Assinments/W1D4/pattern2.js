let row = " ";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    row += "\n"
}
console.log(row);
