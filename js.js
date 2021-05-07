
function hoverIn(){
    $("#background").addClass("backgroundOut");
    
};

function hoverOver (){ 	
    $("#background").removeClass("backgroundOut");
};

function hiddenOut (){
    $(".conteiner_h-button").css({
        "display" : "none",
    })
    $(".moon").css({
        "display" : "none",
    })
};
function openRegistr(){
    $("#registr").addClass("form_registr_on");
};
function openLogIn(){
    $("#logIn").addClass("form_logIn_on")
};
function openForm (){
    $(".registr-logIn").css({
        "display": "flex",
    })
};
function openForm2 (){
    $(".logIn-registr").css({
        "display": "flex",
    })
};

$(".button_login").hover(hoverIn,hoverOver);
$(".button_registr").hover(hoverIn,hoverOver);

$(".button_login").click(function(){
    $("#moon").addClass("moonOut");
    $("#h").addClass("hOut");
    $(".wallaper").addClass("backgroundImgOut");
    $("#background").addClass("backgroundOutClick");
    $(".button_conteiner").css({
        "opacity" : "0",
    });
    setTimeout(hiddenOut, 1400);
    setTimeout(openLogIn, 1400);
    setTimeout(openForm2, 1300);
})
$(".button_registr").click(function(){
    $("#moon").addClass("moonOut");
    $("#h").addClass("hOut");
    $(".wallaper").addClass("backgroundImgOut");
    $("#background").addClass("backgroundOutClick");
    $(".button_conteiner").css({
        "opacity" : "0",
    });
    setTimeout(hiddenOut, 1400);
    setTimeout(openRegistr, 1400);
    setTimeout(openForm, 1300);
     
})





