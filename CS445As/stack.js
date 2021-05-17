function a() {
    console.log("In fun a")
    function b() {
        console.log("In fun b")
        function c() {
            console.log("In fun c")
        }
        c()
    }
    b()
}
a()