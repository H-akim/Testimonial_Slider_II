var slide = document.getElementById("slide");
var up_arrow = document.getElementById("up_arrow");
var down_arrow = document.getElementById("down_arrow");
var review = document.getElementById("dd");
var title = document.getElementById("title")

let x = 0;
up_arrow.onclick = function(){
    if(x > "-900"){
        x = x - 300;
        slide.style.top = x + "px";
    }
}
down_arrow.onclick = function(){
    if(x < "0"){
        x = x + 300;
        slide.style.top = x + "px";
    }
}

function orientaion(){
    if(screen.width <= 480){
        review.style.opacity = "1";
        let x = 0;
        up_arrow.onclick = function(){
            if(x > "-2000"){
                x = x - 700;
                slide.style.top = x + "px";
            }
        }
        down_arrow.onclick = function(){
            if(x < "0"){
                x = x + 700;
                slide.style.top = x + "px";
            }
        }
        document.body.style.backgroundImage = "url(images/phone_1.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        title.style.color = "#fff";
        
    }else if(screen.width > 480){
        document.body.style.backgroundImage = "none";
        title.style.color = "#000";
    }
    }


addEventListener("load", orientaion);
addEventListener("orientationchange", orientaion);
      





