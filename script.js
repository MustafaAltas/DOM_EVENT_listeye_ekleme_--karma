// değişken oluşturma

const formVeri = document.querySelector(".form");
const inputText = document.querySelector(".isim");
const inputYas = document.querySelector(".yaş");

kaydet();

function kaydet() {
    formVeri.addEventListener("submit",veriAlma);
}

function veriAlma(event) {
    console.log(inputText.value);
    console.log(inputYas.value);
    event.preventDefault();

    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.setAttribute("class","sağ_div2_ul_li_span1");
    span2.setAttribute("class","sağ_div2_ul_li_span2");

    span1.appendChild(document.createTextNode(inputText.value));
    span2.appendChild(document.createTextNode(inputYas.value));

    console.log(span1);
}


