function areaOfRectangle(length, breadth){
    let area = length*breadth;
//    console.log(area)
    return area
}

function controllerFun(l, b, callback){
    let areaStr = `The area of The rectangle is: ${areaOfRectangle(l,b)}`
    console.log(areaStr)
}

controllerFun(50, 2, areaOfRectangle());