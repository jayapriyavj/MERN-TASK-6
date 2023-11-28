class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return `${this.radius}`
    }
    set changeRadius(modifyradius) {
        this.mradius = modifyradius;
    }
    getColor() {
        return `${this.color}`
    }

    set changeColor(modifycolor) {
        this.mcolor = modifycolor;
    }
    getArea() {
        return Math.PI * this.mradius * this.mradius;
    }
    getCircumference() {
        return 2 * Math.PI * this.mradius;
    }

}
var C1 = new Circle("1.0", "red");
console.log(C1.getRadius());
C1.changeRadius = "1.2";
console.log(C1.mradius);
console.log(C1.getColor());
C1.changeColor = "blue";
console.log(C1.mcolor);
var C2=C1.toString(); 
console.log(C2);

console.log(C1.getArea());
console.log(C1.getCircumference());


