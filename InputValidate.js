$('#input1').on('input', function(event){
    let input = $(this);
    let val = input.val();
  
    if (input.data("lastval") != val) {
      input.data("lastval", val);
  
      //your change action goes here 
      console.log(val);
    }
});

$('#input1').on("keypress", function(e) {
    /* ENTER PRESSED*/
    if (e.keyCode == 13) {
        let val = input.val();
        
          if (input.data("lastval") != val) {
            input.data("lastval", val);
        
            //your change action goes here 
            console.log(val);
          }
        }
        return false;
    }
});