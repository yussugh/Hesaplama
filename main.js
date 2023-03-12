var harcamainput = document.getElementById("harcama")
var fiyatinput = document.getElementById("fiyat")
var hesaplardiv = document.getElementById("hesaplar")


hesaplardiv.addEventListener("click", handleDelete)


function ekle(){
// input alanlarını kontrol ettik
    if(harcamainput.value === '' || fiyatinput.value === ''){
        alert('input alanlarını doldurun');
        return;
    }



// eleman oluşturma
var hesapdiv = document.createElement('div');
// elemana class ekleme
hesapdiv.classList.add('hesap');
// elemanın içindeki htmli değiştirme
hesapdiv.innerHTML = `
<h1>${harcamainput.value}</h1>
<h3>${fiyatinput.value} TL</h3>
<img id="silbtn" src="trash-solid.svg" >
`;

// oluşturduğumuz elemanı hesaplar divinin içine atar
hesaplardiv.appendChild(hesapdiv);

// inputları temizleme
harcamainput.value=""
fiyatinput.value=""

}


function handleDelete(e){
var element = e.target
if(element.id === "silbtn"){
    element.parentElement.remove()
}

}
