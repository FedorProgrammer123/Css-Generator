function gen_width(){
    let width = document.getElementById("width");
    let width_p = document.getElementById("width-p");
    width_p.innerHTML = width.value;
    let generator = document.getElementById('generator');
    generator.style.width = width.value + 'px';
}
function gen_height(){
    let height = document.getElementById('height');
    let height_p = document.getElementById('height-p');
    height_p.innerHTML = height.value;
    let generator = document.getElementById('generator');
    generator.style.height = height.value + 'px';
}
function gen_border_left(){
    let border_left_radius = document.getElementById('border-Top-left-radius');
    let border_left_radius_p = document.getElementById('border-Top-left-radius-p');
    border_left_radius_p.innerHTML = border_left_radius.value;
    let generator = document.getElementById('generator');
    generator.style.borderTopLeftRadius = border_left_radius.value + 'px';
}
function gen_border_Right(){
    let border_right_radius = document.querySelector('#border-Top-Right-radius');
    let border_right_radius_p = document.querySelector('#border-Top-right-radius-p');
    let generator = document.querySelector('#generator');
    border_right_radius_p.innerHTML = border_right_radius.value;
    generator.style.borderTopRightRadius = border_right_radius.value + 'px';
}
function gen_color(){
    let color = document.getElementById("color");
    let generator = document.getElementById("generator");
    generator.style.backgroundColor = color.value;
}