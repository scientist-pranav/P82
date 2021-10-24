canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave);
var mouseEvent = "";

// canvas.addEventListener('click', canvasClicked, false);
//     function canvasClicked(e) {
//         alert("Clicked");
//     }

function my_mouseleave(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseLeave";
}

function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseUp";
}

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        //console.log("Current position of x and y cordinates = ");
        //console.log("x = " + current_position_of_mouse_x + "y = " +current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0, 2 * Math.PI)
        ctx.stroke();
    }
    mouseEvent = "mouseLeave";
}