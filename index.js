function gameover(btns){
    let count=0;

    btns.forEach((btn)=> {
            
            if(btn.innerText=="X" | btn.innerText=="O"){
                count++;
                
            }

    });
    let h1= document.querySelector("h1");

    if(btns[0].innerText!=="" &btns[0].innerText==btns[1].innerText & btns[0].innerText==btns[2].innerText){
        // console.log("It works"); 
        h1.innerText=`${btns[0].innerText} Wins`;
        
    }
    else if(btns[3].innerText!=="" &btns[3].innerText==btns[4].innerText & btns[3].innerText==btns[5].innerText){
        // console.log("It works");
        h1.innerText=`${btns[3].innerText} Wins`;
        
    }
    else if(btns[6].innerText!=="" &btns[6].innerText==btns[7].innerText & btns[6].innerText==btns[8].innerText){
        // console.log("It works");
        h1.innerText=`${btns[6].innerText} Wins`;
        
    }
    else if(btns[0].innerText!=="" &btns[0].innerText==btns[3].innerText & btns[0].innerText==btns[6].innerText){
        // console.log("It works");
        h1.innerText=`${btns[0].innerText} Wins`;
        
    }
    else if(btns[1].innerText!=="" &btns[1].innerText==btns[4].innerText & btns[1].innerText==btns[7].innerText){
        // console.log("It works");
        h1.innerText=`${btns[1].innerText} Wins`;
        
    }
    else if(btns[2].innerText!=="" &btns[2].innerText==btns[5].innerText & btns[2].innerText==btns[8].innerText){
        // console.log("It works");
        h1.innerText=`${btns[2].innerText} Wins`;
        
    }
    else if(btns[0].innerText!=="" &btns[0].innerText==btns[4].innerText & btns[0].innerText==btns[8].innerText){
        // console.log("It works");
        h1.innerText=`${btns[0].innerText} Wins`;
        
    }
    else if(btns[2].innerText!=="" &btns[2].innerText==btns[4].innerText & btns[2].innerText==btns[6].innerText){
        // console.log("It works");
        h1.innerText=`${btns[2].innerText} Wins`;
        
    }
    else if(count==9){
    h1.innerText="Draw";
        
    }

    if(count==9){
        count=0;
    }
}

function game(){
    
    let h1=document.querySelector("h1");
    let btns = document.querySelectorAll(".btn");
    let turn="x";
        btns.forEach((btn) => {
        btn.addEventListener("click",()=>
        {   if(turn=="x"){
            btn.innerText="X";
            turn="o";   
            gameover(btns);} 
    
            else if(turn=="o"){
            btn.innerText="O";
            turn="x"; 
            gameover(btns);        }          
        })
                });
                let reset = document.querySelector("#reset");
    
          btns.forEach((btn) => {
            reset.addEventListener("click",()=>
             {
                     btn.innerText="";
                     
                 h1.innerText="Tic Tac Toe";
             
                 })
                 });
                 
            }
            
             
                

                
              
            
game();
    

        