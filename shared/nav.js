
function showResponsiveNav() {
    const x = document.getElementById("topNav");
    if (x.className.includes('responsive')) {
        x.className = "";
    } else {
        x.className = "responsive";
    }
}