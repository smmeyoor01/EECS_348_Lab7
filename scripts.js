function alert_paragraph_color(){
    var b_r = document.getElementById("border_R").value;
    var b_g = document.getElementById("border_G").value;
    var b_b = document.getElementById("border_B").value;
    var b_width = document.getElementById("border_width").value;
    var bg_r = document.getElementById("bg_R").value;
    var bg_g = document.getElementById("bg_G").value;
    var bg_b = document.getElementById("bg_B").value;

    var pg = document.getElementById("paragraph");
    pg.style.borderColor = `rgb(${b_r},${b_g},${b_b})`;
    pg.style.backgroundColor = `rgb(${bg_r},${bg_g},${bg_b})`;
    pg.style.borderWidth = b_width;
}