"use strict";

window.onload = function () {
    var increasefont = function () {
        var font_size = 2 + parseInt(txtbox.style.fontSize || 0);
        txtbox.style.fontSize = font_size + "pt";
    };
    
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        setInterval(increasefont, 500);
    };
    
    var chkbox = document.getElementById("chkbox");
    var body = document.getElementsByTagName("body")[0];
    chkbox.onchange = function() {
        if(txtbox.style.fontWeight == "bold") {
            txtbox.style.fontWeight = "";
            txtbox.style.color = "";
            txtbox.style.textDecoration = "";
            body.style.backgroundImage = "none";
        } 
        else {
            txtbox.style.fontWeight = "bold"
            txtbox.style.color = "green";
            txtbox.style.textDecoration = "underline";
            body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }
        
    };
};