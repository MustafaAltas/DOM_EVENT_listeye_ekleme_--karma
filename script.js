// değişken oluşturma

const formVeri = document.querySelector(".form");
const inputText = document.querySelector(".isim");
const inputYas = document.querySelector(".yaş");
const liste = document.querySelector(".sağ_div2_ul");
const hepsiniSil = document.querySelector(".sağ_div1_img")

kaydet();

function kaydet() {
    //listeye eleman eklemek için event
    formVeri.addEventListener("submit",veriAlma);
    //listeden eleman silmek için event
    liste.addEventListener("click",veriSilme);
    //listeden hepsini silmek için
    hepsiniSil.addEventListener("click",tümVeriSil);
}

function veriAlma(event) {
    console.log(inputText.value);
    console.log(inputYas.value);


    //***Span Tag */
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.setAttribute("class","sağ_div2_ul_li_span1");
    span2.setAttribute("class","sağ_div2_ul_li_span2");

    span1.appendChild(document.createTextNode(inputText.value));
    span2.appendChild(document.createTextNode(inputYas.value));

    ///*** a tag */

    const a = document.createElement("a");
    a.setAttribute("href","#");
    a.setAttribute("class","sağ_div2_ul_li_a");

    //***img oluşturma */

    const img = document.createElement("img");
    img.setAttribute("class","sağ_div2_ul_li_img");
    img.setAttribute("src","https://img.icons8.com/wired/30/000000/cancel--v1.png");

    //******** */
    a.appendChild(img);

    console.log(a);

    //**li tag */

    const li = document.createElement("li");
    li.setAttribute("class","sağ_div2_ul_li");

    //****ul tag */

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(a);
    console.log(li);

    liste.appendChild(li);
    inputText.value = "";
    inputYas.value = "";
    event.preventDefault();

}

function veriSilme(event) {
    if (event.target.className === "sağ_div2_ul_li_a") {
        event.target.parentElement.parentElement.remove();
    }
    event.preventDefault();
}

function tümVeriSil(event) {
    if(event.target.className === "sağ_div1_img"){
        // liste.innerHTML = "";

        for (let i = 0; i < liste.children.length; i++) {
            liste.children[i].parentElement.remove();

            
        }
    }
}


