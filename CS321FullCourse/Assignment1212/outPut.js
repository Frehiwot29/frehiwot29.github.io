let x = 1;
class T {
    constructor() {
        this.f1 = 1;
        this.f2 = 2;
    }
    p() {
        this.f1 = this.f1 + this.r() + x;//3
        this.f1 = this.r();
        return this.f1;
    }
    q() { return this.f1; }
    r() { return this.q(); }
}
class S extends T {
    p() { return super.p(); }
    q() { return 3; }
}
class U extends S {
    p() { return super.p(); }
    q() { return this.f2 + x; }
    r() { return this.q() + x; }
}
function main() {
    let sT = new T();
    let sS = new S();
    let sU = new U();
    console.log(sT.p());//3
    console.log(sS.p());//3
    console.log(sU.p());//4
    console.log(sT.p());//7
    console.log(sS.p());//3
    console.log(sU.p());//4
    console.log(sT.q());//7
    console.log(sS.q());//3
    console.log(sU.q());//3
}
main();