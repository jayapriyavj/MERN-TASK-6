class Uber{
     constructor(basicfare,costperkm,distance){
        this.basicfare=basicfare;
        this.costperkm=costperkm;
        this.distance=distance;
    
     }
     getamount(){
           var price= (this.costperkm * this.distance);
           var totalprice=(this.basicfare) + (price)
          console.log(totalprice);
           return`The cost of your trip is ${totalprice}`

     }
}
 var a= new Uber("50","5","15")
console.log(a.getamount());