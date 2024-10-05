
//let name = "sushant";
function outerfunction() {
    {
        let name = "pachory";
    }
    var name = "Parakram"; 
    function innerfunction() {
      //let name = "kanishk";
      console.log(name); 
    }
    innerfunction();
  }
  outerfunction() ;
   