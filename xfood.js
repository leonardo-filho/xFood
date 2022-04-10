//Leonardo Rodrigues do Nascimento Filho e Luciano Silva Alves Junior

alert("bem-vindo ao xfood")
//limite de 45 itens
//se a conta der mais de 75, o fete passa de 7 reais para 0
var frutas=["maca", "banana", "melancia"]
var verduras=["alface", "rucula", "brocolis"]
var legumes= ['abobora', 'pepino', 'tomate']
var proteinas= ['carne', 'frango', 'peixe']
var congelados=["queijo", "salame", "batata frita"]
var bebidas=["refrigerante", "suco", "agua"]
var bebidasalc=[ "cerveja", "vinho","ice"]
var panificadora=[ "pastel", "pao frances", "croissamte"]
var conta=[]
var extrato=[[]]
var total_de_itens

//secao de frutas //maca, banana e melancia
var a 
var esc1
var quant=[]
var preco1= [2, 3, 6]
a=prompt("vc deseja comprar nessa secao? (frutas)")
if(a=="sim" || a=="s"){
    esc1=prompt("escolha um desses, e preste atencao ao limite: (0)maca - 2 reais - 10 unidades; (1)banana - 3 reais - 12 unidades; (2)melancia - 6 reais - 10 unidades")
    quant[0]=Number(prompt("quantas unidades vc quer?"))
    if(quant[0]<10){
        conta[0]=preco1[esc1]*quant[0]
        document.write("vc escolheu ", frutas[esc1], ",com uma quantia de: ", quant[0], ", total gasto na secao= ", conta[0], "<hr>")
        extrato=[[frutas[esc1], quant[0]]]
        total_de_itens=quant[0]
}else if(quant[0]>=10){
        conta[0]=preco1[esc1]*quant[0]*0.95
        document.write("por comprar acima de 10 itens vc ganhou 5% de desconto", ". Escolheu ", quant[0], " itens de ", frutas[esc1], "<hr>")
        extrato=[[frutas[esc1], quant[0]]]
        total_de_itens=quant[0]
}else{
    document.write("erro na secao", "<hr>")
}
}else if(a=="n"||a=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
    frutas[esc1]="n/a"
    conta[0]=0
    quant[0]=0
    extrato=[[frutas[esc1], quant[0]]]
    total_de_itens=quant[0]
}

//secao de verduras //alface, rucula, brocolis
var b
var esc2
var preco2= [5, 8, 4]
b=prompt("vc deseja comprar nessa secao? (verduras)")
if(b=="sim" || b=="s"){
    esc2=prompt("escolha um desses, e preste atencao ao limite: (0)alface - 5 reais - 10 unidades; (1)rucula - 8 reais - 15 unidades; (2)brocolis - 4 reais - 9 unidades")
    quant[1]=Number(prompt("quantas unidades vc quer?"))
    if(quant[1]<8){
        conta[1]=preco2[esc2]*quant[1]
        document.write("vc escolheu ", verduras[esc2], ",com uma quantia de: ", quant[1], ", total gasto na secao= ", conta[1], "<hr>")
        extrato=[[frutas[esc1], quant[0]], [verduras[esc2], quant[1]]]
        total_de_itens=quant[0]+quant[1]
}else if(quant[1]>=8){
        conta[1]=preco2[esc2]*quant[1]*0.93
        document.write("por comprar acima de 8 itens vc ganhou 7% de desconto", ". Escolheu ", quant[1], " itens de ", verduras[esc2], "<hr>")
        extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]]]
        total_de_itens=quant[0]+quant[1]
}else{
    document.write("erro na secao", "<hr>")
}
}else if(b=="n"||b=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
    verduras[esc2]="n/a"
    conta[1]=0
    quant[1]=0
    extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]]]
    total_de_itens=quant[0]+quant[1]
}

//secao dos legumes //abobora, pepino, tomate
var c
var esc3
var preco3= [7, 4, 3]
c=prompt("vc deseja comprar nessa secao? (legumes)")
if(c=="sim" || c=="s"){
    esc3=prompt("escolha um desses, e preste atencao ao limite: (0)abobora - 7 reais - 8 unidades; (1)pepino - 4 reais - 10 unidades; (2)tomate - 3 reais - 10 unidades")
    quant[2]=Number(prompt("quantas unidades vc quer?"))
    if(quant[2]<8){
        conta[2]=preco3[esc3]*quant[2]
        document.write("vc escolheu ", legumes[esc3], ",com uma quantia de: ", quant[2], ", total gasto na secao= ", conta[2], "<hr>")
        extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]]]
        total_de_itens=quant[0]+quant[1]+quant[2]
}else if(quant[2]>=8){
        conta[2]=preco3[esc3]*quant[2]*0.93
        document.write("por comprar acima de 8 itens vc ganhou 7% de desconto", ". Escolheu ", quant[2], " itens de ", legumes[esc3], "<hr>")
        extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]]]
        total_de_itens=quant[0]+quant[1]+quant[2]
}else{
    document.write("erro na secao", "<hr>")
}
}else if(c=="n"||c=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
    legumes[esc3]="n/a"
    conta[2]=0
    quant[2]=0
    extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]]]
    total_de_itens=quant[0]+quant[1]+quant[2]
}

//secao de proteinas   //carne bovina, frango, peixe
var d
var esc4
var preco4=[20, 15, 25]
d=prompt("vc deseja comprar nessa secao? (proteinas)")
if(d=="sim"||d=="s"){
    Number(total_de_itens= quant[0]+quant[1]+quant[2]+quant[3])
    esc4=prompt("escolha um desses, e preste atencao ao limite: (0)carne bovina - 20 reais - 15 unidades; (1)frango - 15 reais - 10 unidades  ; (2)peixe - 25 reais - 20 unidades")
    quant[3]=Number(prompt("quantas unidades vc quer?"))
    if( total_de_itens <= 45){
                conta[3]=preco4[esc4]*quant[3]
                document.write("vc escolheu ", proteinas[esc4], ",com uma quantia de: ", quant[3], ", total gasto na secao= ", conta[3], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]]]
        } if(esc4==2){
                conta[3]=preco4[esc4]*quant[3]*0.90
                document.write("por comprar peixe, vc ganhou 10% de desconto", ". Escolheu ", quant[3], " itens de ", proteinas[esc4], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]]]
}else{
    alert("vc bateu o limite do carrinho(45): "+ total_de_itens )
    quant[4]=Number(prompt("quantos itens deseja? se nao quer nada digite '0' "))
    conta[3]=preco4[esc4]*quant[3]
    document.write("depois de corrigido, sua secao ficou com total de "+ quant[3]+" itens para o produto: "+proteinas[esc4], "<hr>")
    extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]]]
}
}else if(d=="n"||d=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
proteinas[esc4]="n/a"
conta[3]=0
quant[3]=0
extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]]]
}

//secao dos congelados  //queijo, salame, batata frita
var e
var esc5
var preco5=[4, 3, 10]
e=prompt("vc deseja comprar nessa secao? (congelados)")
if(e=="sim"||e=="s"){
    esc5=prompt("escolha um desses, e preste atencao ao limite: (0)queijo - 4 reais - 9 itens ; (1)salame - 3 reais - 10 itens; (2)batata frita - 10 reais - 9 itens")
    quant[4]=Number(prompt("quantas unidades vc quer?"))
    Number(total_de_itens= quant[0]+quant[1]+quant[2]+quant[3]+quant[4])
    if( total_de_itens <= 45){
                conta[4]=preco5[esc5]*quant[4]
                document.write("vc escolheu ", congelados[esc5], ",com uma quantia de: ", quant[4], ", total gasto na secao= ", conta[4], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]]]
        } else{
    alert("vc bateu o limite do carrinho(45): "+ total_de_itens )
    quant[4]=Number(prompt("quantos itens deseja? se nao quer nada digite '0' "))
    conta[4]=preco5[esc5]*quant[4]
    document.write("depois de corrigido, sua secao ficou com total de "+ quant[4]+" itens para o produto: "+congelados[esc5], "<hr>")
    extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]]]
}
}else if(e=="n"||e=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
congelados[esc5]="n/a"
conta[4]=0
quant[4]=0
extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]]]
}

//secao de bebidas //coca cola , suco, agua
var f
var esc6
var preco6=[2, 3, 2]
f=prompt("vc deseja comprar nessa secao? (bebidas)")
if(f=="sim"||f=="s"){
    esc6=prompt("escolha um desses, e preste atencao ao limite: (0)coca cola- 2 reais - 15 garrafas 1.5l; (1)suco - 3 reais - 10 unidades; (2)agua - 2 reais - 20 unidades")
    quant[5]=Number(prompt("quantas unidades vc quer?"))
    Number(total_de_itens= quant[0]+quant[1]+quant[2]+quant[3]+quant[4]+quant[5])
    if( total_de_itens <= 45){
                conta[5]=preco6[esc6]*quant[5]
                document.write("vc escolheu ", bebidas[esc6], ",com uma quantia de: ", quant[5], ", total gasto na secao= ", conta[5], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]]]
        } else{
    alert("vc bateu o limite do carrinho(45): "+ total_de_itens )
    quant[5]=Number(prompt("quantos itens deseja? se nao quer nada digite '0' "))
    conta[5]=preco6[esc6]*quant[5]
    document.write("depois de corrigido, sua secao ficou com total de "+ quant[5]+" itens para o produto: "+bebidas[esc6], "<hr>")
    extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]]]
}
}else if(f=="n"||f=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
bebidas[esc6]="n/a"
conta[5]=0
quant[5]=0
extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]]]
}

//secao de bebidas alcolicas //cerveja, vinho, ice
var g 
var esc7
var preco7=[3,14,4]
g=prompt("vc deseja comprar nessa secao? (bebidas alcoolicas)")
if(g=="sim"||g=="s"){
    var idade= prompt("vc  eh maior de idade?")
    if(idade=="sim"||idade=="s"){
    esc7=prompt("escolha um desses, e preste atencao ao limite: (0)cerveja - 3 reais - 20 unidades; (1)vinho - 14 reais - 7 unidades; (2)ice - 4 reais - 21 unidades")
    quant[6]=Number(prompt("quantas unidades vc quer?"))
    Number(total_de_itens= quant[0]+quant[1]+quant[2]+quant[3]+quant[4]+quant[5]+quant[6])
    if( total_de_itens <= 45){
                if(quant[6]>0 && quant[6]<6){
                conta[6]=preco7[esc7]*quant[6]
                document.write("vc escolheu ", bebidasalc[esc7], ",com uma quantia de: ", quant[6], ", total gasto na secao= ", conta[6], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], quant[6]]]
            }
                if(quant[6]>=6 && quant[6]<=11){
                conta[6]=preco7[esc7]*quant[6]
                alert("a cada 6 bebidas alcoolicas vc ganha uma bebida de graca")
                document.write("vc escolheu ", bebidasalc[esc7], ",com uma quantia de: ", quant[6]+1, ", total gasto na secao= ", conta[6], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], (quant[6]+1)]]
                quant[6]=quant[6]+1
            }
                if(quant[6]>=12 && quant[6]<=17){
                conta[6]=preco7[esc7]*quant[6]
                alert("a cada 6 bebidas alcoolicas vc ganha uma bebida de graca")
                document.write("vc escolheu ", bebidasalc[esc7], ",com uma quantia de: ", quant[6]+2, ", total gasto na secao= ", conta[6], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], (quant[6]+2)]]
                quant[6]=quant[6]+2
            }
                if(quant[6]>=18 && quant[6]<=23){
                conta[6]=preco7[esc7]*quant[6]
                alert("a cada 6 bebidas alcoolicas vc ganha uma bebida de graca")
                document.write("vc escolheu ", bebidasalc[esc7], ",com uma quantia de: ", quant[6]+3, ", total gasto na secao= ", conta[6], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], (quant[6]+3)]]
                quant[6]=quant[6]+3
                }
                
        } else{
    alert("vc bateu o limite do carrinho(45): "+ total_de_itens )
    quant[6]=Number(prompt("quantos itens deseja? se nao quer nada digite '0' "))
    if(quant[6]>=6 && quant[6]<=11){
        document.write("depois de corrigido, sua secao ficou com total de "+ quant[6]+1+" itens para o produto: "+bebidasalc[esc7], "<hr>")
        conta[6]=preco7[esc7]*quant[6]
        extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], quant[6]+1]]
        quant[6]=quant[6]+1
    }else if(quant[6]>=12 && quant[6]<=17){
        document.write("depois de corrigido, sua secao ficou com total de "+ quant[6]+2+" itens para o produto: "+bebidasalc[esc7], "<hr>")
        conta[6]=preco7[esc7]*quant[6]
        extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], quant[6]+2]]
        quant[6]=quant[6]+2
    }else{
        document.write("depois de corrigido, sua secao ficou com total de "+ quant[6]+" itens para o produto: "+bebidasalc[esc7], "<hr>")
    extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], quant[6]]]
    conta[6]=preco7[esc7]*quant[6]
    }
}}else if(idade=="nao"||idade=="n"){
    alert("vc sera repassado a proxima secao")
    document.write("menor de idade")
    bebidasalc[esc7]="n/a"
conta[6]=0
quant[6]=0
extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]], [bebidasalc[esc7], quant[6]]]
}
}else if(g=="n"||g=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
bebidasalc[esc7]="n/a"
conta[6]=0
quant[6]=0
extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]], [bebidasalc[esc7], quant[6]]]
}

//panificadora //pastel, pao frances, croissant
var h
var esc8
var preco8=[4, 0.5, 5]
h=prompt("vc deseja comprar nessa secao? (panificadora)")
if(h=="sim"||h=="s"){
    esc8=prompt("escolha um desses, e preste atencao ao limite: (0)pastel - 4 reais ; (1)pao frances - 50 rentavos - 20 unidades; (2)croissant - 5 reais - 6 unidades")
    quant[7]=Number(prompt("quantas unidades vc quer?"))
    Number(total_de_itens= quant[0]+quant[1]+quant[2]+quant[3]+quant[4]+quant[5]+quant[6]+quant[7])
    if( total_de_itens <= 45){
                conta[7]=preco8[esc8]*quant[7]
                document.write("vc escolheu ", panificadora[esc8], ",com uma quantia de: ", quant[7], ", total gasto na secao= ", conta[7], "<hr>")
                extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], quant[6]],[panificadora[esc8], quant[7]]]
        } else{
    alert("vc bateu o limite do carrinho(45): "+ total_de_itens )
    quant[7]=Number(prompt("quantos itens deseja? se nao quer nada digite '0' "))
    conta[7]=preco8[esc8]*quant[7]
    document.write("depois de corrigido, sua secao ficou com total de "+ quant[7]+" itens para o produto: "+panificadora[esc8],"<hr>")
    extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], quant[6]],[panificadora[esc8], quant[7]]]
}
}else if(h=="n"||h=="nao"){
    document.write("nao houve compras nessa secao", "<hr>")
panificadora[esc8]="n/a"
conta[7]=0
quant[7]=0
extrato=[[frutas[esc1], quant[0]],[verduras[esc2], quant[1]],[legumes[esc3], quant[2]], [proteinas[esc4], quant[3]], [congelados[esc5], quant[4]],[bebidas[esc6], quant[5]],[bebidasalc[esc7], quant[6]],[panificadora[esc8], quant[7]]]
}

if(Number(conta[0]+conta[1]+conta[2]+conta[3]+conta[4]+conta[5]+conta[6]+conta[7])<75){
    document.write("essa eh sua conta: "+ conta[0]+conta[1]+conta[2]+conta[3]+conta[4]+conta[5]+conta[6]+conta[7] + " ,mais 7 reais de frete fica: "+ conta[0]+conta[1]+conta[2]+conta[3]+conta[4]+conta[5]+conta[6]+conta[7]+7,"<hr>")
}else{
    document.write("sua conta passou dos 75 reais, por isso, seu frete de 7 reais sera de graca. sua conta: "+ Number(conta[0]+conta[1]+conta[2]+conta[3]+conta[4]+conta[5]+conta[6]+conta[7]),"<hr>")
}
//extrato impresso no console.log
console.table(extrato)
document.write("obrigado pela preferencia, volte sempre.")
