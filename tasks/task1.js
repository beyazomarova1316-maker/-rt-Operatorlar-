let bal = prompt("Balınızı daxil edin");

if (bal >= 90 && bal <= 100) {
    alert(" İmtahan nəticəniz: A");
}
else if (bal >= 75 && bal <= 89) {
    alert(" İmtahan nəticəniz: B");
}
else if (bal >= 60 && bal <= 74) {
    alert(" İmtahan nəticəniz: C");
}
else if (bal >= 40 && bal <= 59) {
    alert(" İmtahan nəticəniz: D");
}
else if (bal >= 0 && bal <= 39) {
    alert(" İmtahan nəticəniz: F");
}
else {
    alert("Yanlış bal daxil edilib");
}
