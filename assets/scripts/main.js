// var btn = [];
var btn = document.getElementsByClassName("plan__btn");
var backdrop = document.getElementsByClassName("backdrop");
var rem_bdrop = document.getElementsByClassName("modal--no");
var modal = document.getElementById("modal");
var mobut = document.getElementsByClassName("hamburger");
var mobnav = document.getElementsByClassName("mobile-nav");
// var navz = document.getElementsByClassName("main-header");
// console.log(rem_bdrop[0]);
// console.log(modal);

/*for (var i=0; i<= 2; i++){
   btn.push(list[i]);
   console.log(list[i]);
}

for (var i=0; i< btn.length; i++){
    console.log(btn[i]);
    (function(index){
        btn[index].addEventListener("click", function(){
            backdrop[0].style.display = "block";
            modal.style.display = "block";
            console.log("I tried master");
          });
    })(i);
    
};*/
// Hamburger Mobile menu

mobut[0].addEventListener("click",function(){
    mobnav[0].style.display = "block";
    backdrop[0].style.display = "block";
    // navz[0].style.zIndex = "100"
})

backdrop[0].addEventListener("click",function(){
    this.style.display = "none";
    mobnav[0].style.display = "none";
    modal.style.display = "none";
    // backd();

});

// if(modal.style.display != "block"){
    // function backd(){
    //     backdrop[0].addEventListener("click",function(){
    //         this.style.display = "none";
    //     });
    // }
// }

// CHOOSE PLAN + BACKDROP
for (var i=0; i<btn.length; i++){
        btn[i].addEventListener("click", function(){
            backdrop[0].style.display = "block";
            modal.style.display = "block";
          });

    
};


rem_bdrop[0].addEventListener("click",function(){
    backdrop[0].style.display ="none";
    modal.style.display = "none";
    // backd();
});
