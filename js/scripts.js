$(document).ready( function() {

    setInterval(showWaldo, (waldoTimeInterval * 1000));

    $("img#waldo").mouseover(function() {
        hoverOverValue = hoverOverValue + 1; //For the first three time a user hovers waldo, hide him, after that allow to click
        // console.log("Mouse Over Amnt: " + hoverOverValue);
        if(hoverOverValue <= maxHoverAmountBeforeWaldoIsClickable) {
            $(this).hide();
        } else {
            alert("You found me!");
            location.reload();
        }
        return;
    });

});

var hoverOverValue = 0;
var maxHoverAmountBeforeWaldoIsClickable = 2;
var waldoTimeInterval = 5;
var hideWaldoAfterSeconds = 2;

var positionBottom = {"height": "0","bottom": "0", "right": "", "left":"" , "top":""};
var positionLeft = {"width": "0","left": "0", "top": "", "bottom": "", "right": ""};
var positionRight = {"width": "0","right": "0", "top": "", "bottom": "", "left": ""};
var positionTop = {"height": "0","top": "0", "right": "", "bottom": "", "left": ""};

function showWaldo() {
    var randNum = rand();
    var randLocation = randLocal();
    // console.log("Screen Location: " + randNum);
    // console.log("Relative Location: " + randLocation);

    switch(true) {
        //Position bottom of screen
        case (randNum < 3):
            $("img#waldo").attr('src', 'images/waldo-bottom.png');
            $("img#waldo").css(positionBottom); //This will set the image location to one of the 4 screen sides
            $("img#waldo").show(function(){
                $("img#waldo").css({"right": randLocation}); //This will set the image location to a random generated value
                $("img#waldo").animate({height: "35px"}); //Show Waldo and animate
                hideWaldo();
            });
            break;
        //Position left side of screen
        case (randNum >= 3 && randNum < 6):
            $("img#waldo").attr('src', 'images/waldo-left.png');
            $("img#waldo").css(positionLeft); //This will set the image location to one of the 4 screen sides
            $("img#waldo").show(function() {
                $("img#waldo").css({"top": randLocation}); //This will set the image location to a random generated value
                $("img#waldo").animate({width: "35px"}); //Show Waldo and animate
                hideWaldo();    
            });
            break;
        //Position right side of screen                
        case (randNum >= 6 && randNum < 9):
            $("img#waldo").attr('src', 'images/waldo-right.png');
            $("img#waldo").css(positionRight); //This will set the image location to one of the 4 screen sides
            $("img#waldo").show(function() {
                $("img#waldo").css({"top": randLocation}); //This will set the image location to a random generated value
                $("img#waldo").animate({width: "35px"}); //Show Waldo and animate
                hideWaldo();
            });
            break;
        //Position top of screen    
        case (randNum >= 9 && randNum < 12):
            $("img#waldo").attr('src', 'images/waldo-top.png');
            $("img#waldo").css(positionTop); //This will set the image location to one of the 4 screen sides
            $("img#waldo").show(function() {
                $("img#waldo").css({"right": randLocation}); //This will set the image location to a random generated value
                $("img#waldo").animate({height: "35px"}); //Show Waldo and animate
                hideWaldo();                
            });
            break;                                                
    }
}

//Returns value that will be used to determine which side of the screen waldo will appear
function rand() {
    return Math.floor(Math.random() * 11);
}

//Give a random value to be used for relative location on the side of the screen waldo is on
function randLocal() {
    return (Math.round(Math.random() * (95 - 1) + 1)).toFixed(2) + "%";
}   

//After Waldo shows up, hide him after set amount of seconds
function hideWaldo() {
    setTimeout(function() {
        $("img#waldo").hide();
    }, (hideWaldoAfterSeconds * 1000));
} 