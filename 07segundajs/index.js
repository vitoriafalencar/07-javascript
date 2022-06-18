const cep = document.querySelector('#cep');
const resultado = document.querySelector('#resultado');
cep.addEventListener('input', teste);


 cep.addEventListener('input', teste);
 cep.addEventListener('keyup', testkey);

 let evento = cep.addEventListener('keycode',testecode);

function teste() {
    if (isNaN(cep.value)) {
        cep.value = cep.value.slice(0, -1);
    }
}

function testkey() {
    if (cep.value.length >=9){
        let cont = cep.value.length - (cep.value.length -8);
        console.log(cont);
        
        cep.value = cep.value.slice(0, cont);j
    }
}

function testecode(){

}
