let i, j;

for (i = 0; i <= 4; i++) {
    for (j = 4; j >= i; j--) {
        process.stdout.write("* ")
    }
    console.log()
}
 
let n = 5;
for (i = 1, p = 1; i <= n; i++, p++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(p + " ");
    }
    console.log();
}


for (i = 1, p = 0; i <= n; i++, p+=2) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(p + " ");
    }
    console.log();
}

for (i = 1, p = 5; i <= n; i++, p--) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(p + " ");
    } 
    console.log();
}

for (i = 1, p=5; i <= n; i++, p--) {
    for (j = 5; j >= i; j--) {
        process.stdout.write(p+" ");
    }
    console.log()
}











