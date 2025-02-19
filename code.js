function calcular(){
    var num = document.getElementById('numero')
    var moedaEntrada = document.getElementById('moeda01')
    var opcaoEntrada = moedaEntrada.options[moedaEntrada.selectIndex]
    var moedaSaida = document.getElementById('moeda02')
    var res = document.getElementById('res')

    if(Number(num.value) == 0){
        window.alert(`Número inválido. Por favor, insira novamente!`)
    }else{
        res.innerHTML = (opcaoEntrada)
        //res.innerHTML = (`Conversão realizada de S para ${moedaSaida}`)
    }
}