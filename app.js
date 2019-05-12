var colors=["rgb(255, 0, 0)", 
"rgb(255, 0, 0)", 
"rgb(255, 200, 0)", 
"rgb(255, 150, 20)",
"rgb(255, 0, 220)", 
"rgb(255, 0, 132)",
];
var squares= document.querySelectorAll(".box");
for(var i=0;i<squares.length;i++){
    //to add colors t the squares
    squares[i].style.backgroundColor=colors[i];
    //to  add click listeners to square
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor ===correctColor){
        this.style.background=("pink");
            
            
        }
        else {
            this.style.backgroundColor=("black");
        };
        
    });
}
var correctColor=colors[3];
var pickColor=document.getElementById("colorDisplay");
pickColor.textContent=correctColor;

for (var i=0;i<squares.length;i++){
    

}
