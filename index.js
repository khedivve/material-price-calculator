const tirazhInput = document.getElementById("tirazh");
const raportInput = document.getElementById("raport");
const selectElement = document.getElementById("val");
const pm1Input = document.getElementById("pm1");
const material_width = document.getElementById("material_width");
const meter_square = document.getElementById("meter_square");
const coefficent = document.getElementById("coefficent");
const material_price = document.getElementById("material_price");
const eticet_price = document.getElementById("eticet_price");
const self_price = document.getElementById("self_price");
const material_width_print = document.getElementById("material_width_print");
const print_form = document.getElementById("print_form");
const print_val = document.getElementById("print_val");
const print_price = document.getElementById("print_price");
const complect_price = document.getElementById("complect_price");
const tiraj_add = document.getElementById("tiraj_add");
const eticet_add = document.getElementById("eticet_add");
const aditional_wrapper = document.getElementById("aditional_wrapper");



const lamination_checbox = document.getElementById("lamination_checbox");
const tis_checbox = document.getElementById("tis_checbox");
const mat_checbox = document.getElementById("mat_checbox");
const glans_checbox = document.getElementById("glans_checbox");
const print_checbox = document.getElementById("print_checbox");

const kppInput = document.getElementById("kpp");
const krpInput = document.getElementById("krp");
const formResult = document.getElementById("formResult");
const kpoInput = document.getElementById("kpo");
const kroInput = document.getElementById("kro");

function calculatePM1() {
  const tirazh = parseFloat(tirazhInput.value) || 0;
  const raport = parseFloat(raportInput.value) || 0;
  const select = parseFloat(selectElement.value) || 0;
  const pm1Result = (tirazh / raport) * select;
  pm1Input.value = pm1Result.toFixed(2);
}

function showForm1() {
  if (document.getElementById("pc").style.display == "none") {
    document.getElementById("pc").style.display = "flex";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "#fff";
    document.getElementById("button1").style.marginTop = "50px";
    document.getElementById("button2").style.background = "transparent";
    document.getElementById("button2").style.marginTop = "50px";
  } else {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";
    document.getElementById("button1").style.marginTop = "20px";
    document.getElementById("button2").style.marginTop = "20px";
  }
}
function showAditional() {
  if (document.getElementById("aditional").style.display == "flex") {
    document.getElementById("aditional").style.display = "none";
    document.getElementById("aditional_wrapper").style.background = "transparent";
    document.getElementById("aditional_wrapper").style.padding = "0";
    
  } else {
    document.getElementById("aditional").style.display = "flex";
    document.getElementById("aditional_wrapper").style.background = "#fff";
    document.getElementById("aditional_wrapper").style.padding = "30px";

  }
}

function showForm2() {
  if (document.getElementById("oc").style.display == "none") {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "flex";
    document.getElementById("button2").style.background = "#fff";
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button1").style.marginTop = "50px";
    document.getElementById("button2").style.marginTop = "50px";
  } else {
    document.getElementById("pc").style.display = "none";
    document.getElementById("oc").style.display = "none";
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";
    document.getElementById("button1").style.marginTop = "20px";
    document.getElementById("button2").style.marginTop = "20px";
  }
}

function calculate() {
  calculatePM1();

  const kpp = parseFloat(kppInput.value) || 0;
  const krp = parseFloat(krpInput.value) || 0;

  const kppResult = kpp * 150;
  const krpResult = krp === 0 ? 0 : krp === 1 ? 0 : krp * 50 - 50;
  const pm1Result = parseFloat(pm1Input.value) || 0;

  const totalResult = kppResult + krpResult + pm1Result;
  if (totalResult.toFixed(2) != 0) {
    formResult.value = totalResult.toFixed(2);
  }
}

function calculate2() {
  calculatePM1();

  const kpo = parseFloat(kpoInput.value) || 0;
  const kro = parseFloat(kroInput.value) || 0;

  const kpoResult = kpo * 50;
  const kroResult = kro === 0 ? 0 : kro === 1 ? 0 : kro * 50 - 50;
  const pm1Result = parseFloat(pm1Input.value) || 0;

  const totalResult = kpoResult + kroResult + pm1Result;
  if (totalResult.toFixed(2) != 0) {
    formResult.value = totalResult.toFixed(2);
  }
}

function calculating() {
  calculatePM1();

  const kpo = parseFloat(kpoInput.value) || 0;
  const krp = parseFloat(kroInput.value) || 0;

  const kpoResult = kpo * 150;
  const kroResult = kro === 0 ? 0 : krp === 1 ? 0 : krp * 50 - 50;
  const pm2Result = parseFloat(pm1Input.value) || 0;

  const totalResult = kpoResult + kroResult + pm1Result;
  formResult.value = totalResult.toFixed(2);
  console.log(totalResult);
}

function square() {
  const material_width_item = parseFloat(material_width.value) || 100;
  meter_square.value = pm1Input.value * (material_width_item / 1000);
}
function coefficentFunc() {
  tiraj_price.value =
    meter_square.value * coefficent.value * material_price.value;
  eticet_price.value = Number(tiraj_price.value) / tirazh.value;
  self_price.value = material_price.value * meter_square.value;
}

function print_func() {
  print_price.value =
    print_val.value * (material_width_print.value / 100 + 1) * 2.5;
  complect_price.value = print_price.value * print_form.value;
}

function aditionally() {
  const lamination_ch = lamination_checbox.checked
    ? meter_square.value * 10 * 2.5
    : 0;
  const tis_ch = tis_checbox.checked ? meter_square.value * 20 * 2.5 : 0;
  const mat_ch = mat_checbox.checked ? tirazhInput.value * 0.2 : 0;
  const glans_ch = glans_checbox.checked ? tirazhInput.value * 0.05 : 0;

  const print_ch = print_checbox.checked ? 10000 : 0;

  tiraj_add.value =
    lamination_ch +
    tis_ch +
    mat_ch +
    glans_ch +
    print_ch +
    Number(tiraj_price.value);
  eticet_add.value = Number(tiraj_add.value / tirazhInput.value);
  if (!lamination_ch && !tis_ch && !mat_ch && !glans_ch && !print_ch) {
    tiraj_add.value = null;
    eticet_add.value = null;
  }
}

tirazhInput.addEventListener("input", calculate);
raportInput.addEventListener("input", calculate);
selectElement.addEventListener("input", calculate);
kppInput.addEventListener("input", calculate);
krpInput.addEventListener("input", calculate);
kpoInput.addEventListener("input", calculate2);
kroInput.addEventListener("input", calculate2);
material_width.addEventListener("input", square);
coefficent.addEventListener("input", coefficentFunc);
material_width_print.addEventListener("input", print_func);

lamination_checbox.addEventListener("input", aditionally);
tis_checbox.addEventListener("input", aditionally);
mat_checbox.addEventListener("input", aditionally);
glans_checbox.addEventListener("input", aditionally);
print_checbox.addEventListener("input", aditionally);

calculate();
