
// Either of the below work

$(document).ready(function(){
   var shown= localStorage.getItem('isshow');
    if(shown !="t"){
        setTimeout(function(){ $('#Welcome').modal('show'); }, 5000);
        localStorage.setItem('isshow', "t");
    }
});

// $(document).ready(function(){
//         if(sessionstorage && !sessionStorage.getItem('isshow')){
//             setTimeout(function(){ $('#Welcome').modal('show'); }, 5000);
//             sessionStorage.setItem('isshow', true);
//         }
//  });