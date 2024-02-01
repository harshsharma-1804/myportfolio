window.onscroll = function() { 
    scrollFunction() 
}; 
      
function scrollFunction() { 
    if (document.body.scrollTop > 90 || 
        document.documentElement.scrollTop > 90) 
    { 
        document.getElementById("header") 
                    .style.padding = "25px 10px"; 
              
        // document.getElementById("logo") 
        //         .style.fontSize = "24px"; 
    } 
    else { 
        document.getElementById("navlist") 
                    .style.padding = "90px 10px"; 
                      
        // document.getElementById("logo") 
        //             .style.fontSize = "35px"; 
    } 
} 