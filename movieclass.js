 class Movie{
     constructor(title,studio,rating,movielist){
         this.title=title;
         this.studio=studio;
         this.rating=rating;
         this.movielist=[];

     }
     getarrayMovie(){
         var M=this.movielist.filter((value)=>value.rating=="PG")
         console.log(M)
     }
 }
  var M1= new Movie("Casino Royale","Eon Productions","PG­13",[{title:"leo",studio:"lyca production",rating:"PG"},
  {title:"king",studio:"lyca production",rating:"PG12"}]);
  console.log(M1.getarrayMovie());