let index=0;

function start(){

    let colors= ["pink","green", "aqua","purple","yellow","bisque"];

    let background= document.getElementsByTagName("body")[0];

    console.log(background)

    
    background.style.backgroundColor = colors[index ++];
    
    

    if(index == colors.length ){
        index=0;

    }

   
    

}