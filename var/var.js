//ØVELSE 1
var navn = "Mikkel";
var alder = "200";
var tekst = `Mit navn er ${navn} og jeg er ${alder} år gammel.`;
console.log(tekst);

//ØVELSE 2
var moms = 1.25;
var pris_uden_moms = "400";
var pris_med_moms = pris_uden_moms * moms;
console.log(pris_med_moms);
var pris_uden_moms_02 = pris_med_moms / moms;
console.log(pris_uden_moms_02);

//ØVELSE 3
var forste = 10;
var anden = 20;
anden = forste;
forste = forste + forste;
console.log(forste);
console.log(anden);