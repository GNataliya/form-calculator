let form = document.forms.calculate;
let putResalt = document.querySelector('.res');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.target);

    let year = Number( formData.get('year'));
    let price = Number( formData.get('price'));
    let kindOfAuto = Number (formData.get('radiobuttons'));

    let summ = function () {
            let getResult = (kindOfAuto * year * price)/100;
            return (getResult);
        }
        let getSumm =summ (); 
        
    putResalt.innerHTML = getSumm;
})