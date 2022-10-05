window.onload = function () {
    var box=document.getElementsByClassName('review');
    var btn=document.getElementById('review__button');
    for (let i=6;i<box.length;i++) {
        box[i].style.display = "none";
    }

    var countD = 6;
    btn.addEventListener("click", function() {
        var box=document.getElementsByClassName('review');
        countD += 6;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }
    })
}

$(".review__button").click(function() {
    $(this).hide();
})


