document.getElementById('currentNumber').innerText =1;

function greenColorChange ()
{
    if (Number(document.getElementById('currentNumber').innerText) > 0) {
        document.getElementById('currentNumber').style.color = "red"
    }

}

function click(){
    document.getElementById('currentNumber').style.color = "red"
}