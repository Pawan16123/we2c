var btn = [];
var list = document.getElementsByClassName("plan__btn");
var backdrop = document.getElementsByClassName("backdrop");
var rem_bdrop = document.getElementsByClassName("modal--no");
var modal = document.getElementById("modal");
console.log(rem_bdrop[0]);
console.log(modal);

for (var i=0; i<= 2; i++){
   btn.push(list[i]);
   console.log(list[i]);
}
// console.log(btn);
// console.log(backdrop[0]);
// console.log(btn.length);
for (var i=0; i< btn.length; i++){
    console.log(btn[i]);
    (function(index){
        btn[index].addEventListener("click", function(){
            backdrop[0].style.display = "block";
            modal.style.display = "block";
            console.log("I tried master");
          });
    })(i);
    
};

// backdrop[0].addEventListener("click",function(){
//     this.style.display = "none";
// });

rem_bdrop[0].addEventListener("click",function(){
    backdrop[0].style.display ="none";
    modal.style.display = "none";
    console.log("is it working")
});