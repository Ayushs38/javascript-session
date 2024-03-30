function printingFun(){
    console.log("Hellow World This is Web Dev")
}

function secondInnerFunction(){
    console.log("This is second inner function")
}

function outerFun(){
    console.log("This is outer function")
    console.log("This is outer functions second line")
    printingFun();
    printingFun();
    printingFun();  
    printingFun();
    printingFun();
    printingFun();
  
}

outerFun();