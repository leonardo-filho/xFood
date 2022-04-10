var pedidos= [["banana", "abacaxi",'goiaba',    "alface", "rucula", "brocolis",   'abobora', 'pepino', 'tomate',   'carne', 'frango', 'peixe' , "    queijo", "salame", "batata frita",    "refrigerante", "suco", "agua",   "cerveja", "vinho","ice",    "pastel", "pao frances", "croissamte"]];
        var s1, s2, s3, s4, s5, s6, s7, s8
        var conta = []
        var j1, j2, j3, j4, j5, j6, j7, j8 
        const i  =  0
        console.table(pedidos)
        const frete = 7 //sera gratuito caso carrinho ter 75 ou mais itens
        var finalconta = conta[0] + conta[1] + conta[2] + conta[3] + conta[4] + conta[5] + conta[6] + conta[7]
        //lembrar de usar var finalquantia =  quantia1 + quantia2 + quantia3 + quantia4 + quantia5 + quantia6 + quantia7 + quantia8 

        alert(`bem vindo ao xFood`)
        alert("o limite de seu carrinho eh 45 itens")

        //secao de frutas
        var a 
        var preco1= [5,6,2]
        var quantia1
        a= prompt("deseja comprar na secao de frutas? digite sim ou nao")
        if(a=="sim"||a=='s'){
            j1= Number(prompt("insira aqui o codigo da secao de frutas- (0)banana - 5 REAIS - 12 itens; (1)abacaxi - 6 REAIS - 8 itens; (2)goiaba - 2 REAIS - 9 itens"))
            quantia1= prompt('dps de escolher, vc precisa decidir quantos vai levar')
            if(quantia1<10){ 
                conta[0]= preco1[j1]*quantia1
                document.write("vc escolheu ", pedidos[i][j1], " com uma quantia de ", quantia1," itens", ", total gasto na secao: ", conta[0], "<br>" )
            }
            if(quantia1>12 && j1 ==0){
                alert("seu pedido excedeu o limite")
                quantia1= prompt("escolha por favor, um valor abaixo ou igual a 12")
                conta[0]= preco1[j1]*quantia1
                document.write("vc escolheu ", pedidos[i][j1], " com uma quantia de ", quantia1," itens", ", total gasto na secao: ", conta[0], "<br>")
            }
            if(quantia1>8 && j1==1){
                alert("seu pedido excedeu o limite")
                quantia1= prompt("escolha por favor, um valor abaixo ou igual a 8")
                conta[0]= preco1[j1]*quantia1
                document.write("vc escolheu ", pedidos[i][j1], " com uma quantia de ", quantia1," itens", ", total gasto na secao: ", conta[0], "<br>")
            }
            if(quantia1>9 && j1==2){
                alert("seu pedido excedeu o limite")
                quantia1= prompt("escolha por favor, um valor abaixo ou igual a 9")
                conta[0]= preco1[j1]*quantia1
                document.write("vc escolheu ", pedidos[i][j1], " com uma quantia de ", quantia1," itens", ", total gasto na secao: ", conta[0], "<br>")
            }
            if(quantia1>=10 && quantia1<13){
                alert("por comprar acima de 10 itens, vc ganhou 5% de desconto")
                conta[0]= preco1[j1]*quantia1*0.95
                document.write("vc escolheu ", pedidos[i][j1], " com uma quantia de ", quantia1," itens", ", total gasto na secao: ", conta[0], "<br>")}
                
             }else if(a=="nao"||a=="n"){
            document.write("nao houve compras na secao de frutas", "<br>")
            conta[0]=0
            quantia1=0
        }
        
        //secao de verduras
        var b 
        var preco2=[5,6,2,   3,5,13]
        var quantia2 //usar j2 agora
        b= prompt("deseja comprar na secao de verduras?")
        if(b=="sim"||b=='s'){
            j2= Number(prompt("insira aqui o codigo da secao de verduras- (3)ramo de alface - 3 REAIS - 15 itens; (4)ramo de rucula - 5 REAIS - 7 itens; (5)porcao de brocolis - 13 REAIS - 6 itens"))
            quantia2= prompt('dps de escolher, vc precisa decidir quantos vai levar')
            if(quantia2<8){ 
                conta[1]= preco2[j2]*quantia2
                document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>" )
            }
            if(quantia2>15 && j2 ==3){
                alert("seu pedido excedeu o limite")
                quantia2= prompt("escolha por favor, um valor abaixo ou igual a 15")
                conta[1]= preco2[j2]*quantia2
                document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>")
                if(quantia2>=8 && quantia2<15){
                    alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                    conta[1]= preco2[j2]*quantia2*0.93
                    document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>" )}
            }
            if(quantia2>7 && j2==4){
                alert("seu pedido excedeu o limite")
                quantia2= prompt("escolha por favor, um valor abaixo ou igual a 7")
                conta[1]= preco2[j2]*quantia2
                document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>")
                if(quantia2>=8 && quantia2<15){
                    alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                    conta[1]= preco2[j2]*quantia2*0.93
                    document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>" )}
            }
            if(quantia2>6 && j2==5){
                alert("seu pedido excedeu o limite")
                quantia2= prompt("escolha por favor, um valor abaixo ou igual a 6")
                conta[1]= preco2[j2]*quantia2
                document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>")
                if(quantia2>=8 && quantia2<15){
                    alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                    conta[1]= preco2[j2]*quantia2*0.93
                    document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>" )}
            }
            if(quantia2>=8 && quantia2<=15){
                alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                conta[1]= preco2[j2]*quantia2*0.93
                document.write("vc escolheu ", pedidos[i][j2], " com uma quantia de ", quantia2," itens", ", total gasto na secao: ", conta[1], "<br>" )}
                
             }else if(b=="nao"||b=="n"){
            document.write("nao houve compras na secao de verduras", "<br>")
            conta[1]=0
            quantia2=0
        }

        //secao de legumes
        var c
        var preco3=[5,6,2,3,5,13,    8,5,2]
        var quantia3 //usar j3 agora
        c= prompt("deseja comprar na secao de legumes")
        if(c=="sim"||c=='s'){
            j3= Number(prompt("insira aqui o codigo da secao de legumes- (6)abobora - 8 REAIS - 4 unidades; (7)Pepino - 5 REAIS - 7 unidades; (8)Tomate - 2 REAIS - 13 unidades"))
            quantia3= prompt('dps de escolher, vc precisa decidir quantos vai levar')
            if(quantia3<8){ 
                conta[2]= preco3[j3]*quantia3
                document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>" )
                if(quantia3>=8 && quantia3<15){
                    alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                    conta[2]= preco3[j3]*quantia3*0.93
                    document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>" )}
            }
            if(quantia3>4 && j3 ==6){
                alert("seu pedido excedeu o limite")
                quantia3= prompt("escolha por favor, um valor abaixo ou igual a 4")
                conta[2]= preco3[j3]*quantia3
                document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>")
                if(quantia3>=8 && quantia3<=4){
                    alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                    conta[2]= preco3[j3]*quantia3*0.93
                    document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>" )}
            }
            if(quantia3>7 && j3==7){
                alert("seu pedido excedeu o limite")
                quantia3= prompt("escolha por favor, um valor abaixo ou igual a 7")
                conta[2]= preco3[j3]*quantia3
                document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>")
                if(quantia3>=8 && quantia3<=7){
                    alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                    conta[2]= preco3[j3]*quantia3*0.93
                    document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>" )}
            }
            if(quantia3>13 && j3==8){
                alert("seu pedido excedeu o limite")
                quantia3= prompt("escolha por favor, um valor abaixo ou igual a 13")
                conta[2]= preco3[j3]*quantia3
                document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>")
                if(quantia3>=8 && quantia3<=13){
                    alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                    conta[2]= preco3[j3]*quantia3*0.93
                    document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>" )}
            
            if(quantia3>=8 && quantia3<=13){
                alert("por comprar acima de 8 itens, vc ganhou 7% de desconto")
                conta[2]= preco3[j3]*quantia3*0.93
                document.write("vc escolheu ", pedidos[i][j3], " com uma quantia de ", quantia3," itens", ", total gasto na secao: ", conta[2], "<br>" )}
            }
             }else if(c=="nao"||c=="n"){
            document.write("nao houve compras na secao de legumes", "<br>")
            conta[2]=0
            quantia3=0
        }

        //secao de proteinas
        var d
        var preco4=[5,6,2,3,5,13,8,5,2,  25, 20, 30]
        var quantia4 //usar j4 agora
        d=prompt("deseja comprar na secao de proteinas")
        if(d=="sim"||d=='s'){
            j4= Number(prompt("insira aqui o codigo da secao de proteinas- (9)quilo de carne - 25 REAIS - 10 unidades; (10)quilo do frango - 20 REAIS - 15 uniades; (11)quilo do peixe - 30 REAIS - 20 unidades"))
            quantia4= prompt('dps de escolher, vc precisa decidir quantos vai levar')
            if(quantia1+quantia2+quantia3+quantia4<45){
            if(quantia4<20 && j4!==11){ 
                conta[3]= preco4[j4]*quantia4
                document.write("vc escolheu ", pedidos[i][j4], " com uma quantia de ", quantia4," itens", ", total gasto na secao: ", conta[3], "<br>" )
            }
            if(quantia4>10 && j4 ==9){
                alert("seu pedido excedeu o limite")
                quantia4= prompt("escolha por favor, um valor abaixo ou igual a 10")
                conta[3]= preco4[j4]*quantia4
                document.write("vc escolheu ", pedidos[i][j4], " com uma quantia de ", quantia4," itens", ", total gasto na secao: ", conta[3], "<br>")
            }
            if(quantia4>15 && j4==10){
                alert("seu pedido excedeu o limite")
                quantia4= prompt("escolha por favor, um valor abaixo ou igual a 15")
                conta[3]= preco4[j4]*quantia4
                document.write("vc escolheu ", pedidos[i][j4], " com uma quantia de ", quantia4," itens", ", total gasto na secao: ", conta[3], "<br>")
            }
            if(quantia4<=20 && j4==11){
                alert("por comprar peixe, vc ganhou 10% de desconto")
                conta[3]= preco4[j4]*quantia4*0.90
                document.write("vc escolheu ", pedidos[i][j4], " com uma quantia de ", quantia4," itens", ", total gasto na secao: ", conta[3], "<br>" )}
            }
            else if(quantia1+quantia2+quantia3+quantia4>45){
                alert("vc excedeu o limite do carrinho ", quantia1+quantia2+quantia3+quantia4)
            }
             }else if(d=="nao"||d=="n"){
            document.write("nao houve compras na secao de proteinas", "<br>")
            conta[3]=0
            quantia4=0
        }

        //secao de congelados
        var e 
        var preco5= [5,6,2,3,5,13,8,5,2,25,15,30,  15, 8, 20]
        var quantia5 //usar j5 agora
        e= prompt("deseja comprar na secao de congelados? digite sim ou nao")
        if(e=="sim"||e=='s'){
            j5= Number(prompt("insira aqui o codigo da secao de congelados- (12)porcao de queijo - 15 REAIS - 20 unidades; (13)porcao de salame - 8 REAIS - 10 unidades ; (14)batata frita - 20 REAIS - 18 unidades"))
            quantia5= prompt('dps de escolher, vc precisa decidir quantos vai levar')
            if(quantia5<20){ 
                conta[4]= preco5[j5]*quantia5
                document.write("vc escolheu ", pedidos[i][j5], " com uma quantia de ", quantia5," itens", ", total gasto na secao: ", conta[4], "<br>" )
            }
            if(quantia5>20 && j5 ==12){
                alert("seu pedido excedeu o limite")
                quantia5= prompt("escolha por favor, um valor abaixo ou igual a 20")
                conta[4]= preco5[j5]*quantia5
                document.write("vc escolheu ", pedidos[i][j5], " com uma quantia de ", quantia5," itens", ", total gasto na secao: ", conta[4], "<br>")
            }
            if(quantia5>10 && j5==13){
                alert("seu pedido excedeu o limite")
                quantia5= prompt("escolha por favor, um valor abaixo ou igual a 10")
                conta[4]= preco5[j5]*quantia5
                document.write("vc escolheu ", pedidos[i][j5], " com uma quantia de ", quantia5," itens", ", total gasto na secao: ", conta[4], "<br>")
            }
            if(quantia5>18 && j5==14){
                alert("seu pedido excedeu o limite")
                quantia5= prompt("escolha por favor, um valor abaixo ou igual a 18")
                conta[4]= preco5[j5]*quantia5
                document.write("vc escolheu ", pedidos[i][j5], " com uma quantia de ", quantia5," itens", ", total gasto na secao: ", conta[4], "<br>")
            }   
             }else if(e=="nao"||e=="n"){
            document.write("nao houve compras na secao de congelados", "<br>")
            conta[4]=0
        }

        //secao de bebidas
        var f 
        var preco6= [5,6,2,3,5,13,8,5,2,25,15,30,15,8,20,   4, 3, 2]
        var quantia6 //usar j6 agora
        f= prompt("deseja comprar na secao de bebidas? digite sim ou nao")
        if(f=="sim"|f=='s'){
            j6= Number(prompt("insira aqui o codigo da secao de bebidas- (15)refrigerante 2L - 4 REAIS - 20 unidades; (16)300ml Suco - 3 REAIS - 15 unidades;(17)200ml agua - 2 REAIS - 30 unidades"))
            quantia6= prompt('dps de escolher, vc precisa decidir quantos vai levar')
            if(quantia6<10){ 
                conta[5]= preco6[j6]*quantia6
                document.write("vc escolheu ", pedidos[i][j6], " com uma quantia de ", quantia6," itens", ", total gasto na secao: ", conta[5], "<br>" )
            }
            if(quantia6>20 && j6 ==15){
                alert("seu pedido excedeu o limite")
                quantia6= prompt("escolha por favor, um valor abaixo ou igual a 20")
                conta[5]= preco6[j6]*quantia6
                document.write("vc escolheu ", pedidos[i][j6], " com uma quantia de ", quantia6," itens", ", total gasto na secao: ", conta[5], "<br>")
            }
            if(quantia6>15 && j6==16){
                alert("seu pedido excedeu o limite")
                quantia6= prompt("escolha por favor, um valor abaixo ou igual a 15")
                conta[5]= preco6[j6]*quantia6
                document.write("vc escolheu ", pedidos[i][j6], " com uma quantia de ", quantia6," itens", ", total gasto na secao: ", conta[5], "<br>")
            }
            if(quantia6>30 && j6==17){
                alert("seu pedido excedeu o limite")
                quantia6= prompt("escolha por favor, um valor abaixo ou igual a 30")
                conta[5]= preco6[j6]*quantia6
                document.write("vc escolheu ", pedidos[i][j6], " com uma quantia de ", quantia6," itens", ", total gasto na secao: ", conta[5], "<br>")
            }   
             }else if(f=="nao"||f=="n"){
            document.write("nao houve compras na secao de bebidas", "<br>")
            conta[5]=0
        }

        //secao de bebidas alcoolicas
        var g
        var preco7=[5,6,2,3,5,13,8,5,2,25,15,30,15,8,20,4,3,2,  4, 12, 4]
        var quantia7 //usar j7 agora
        g= prompt("deseja comprar na secao de bebidas alcolicas")
        if(g=="sim"||g=='s'){
            j7= Number(prompt("insira aqui o codigo da secao de bebidas alcolicas- (18)lata de cerveja - 4 REAIS - 40 unidades; (19)garrafa de vinho - 12 REAIS - 9 unidades; (20)garrafa de ice - 4 REAIS - 20 unidades"))
            quantia7= Number(prompt('dps de escolher, vc precisa decidir quantos vai levar'))
            if(quantia7>0 && quantia7<6){ 
                conta[6]= preco7[j7]*quantia7
                if(quantia7>=12 && quantia7<17){
                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                    conta[6]= preco7[j7]*quantia7
                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+2," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                    if(quantia7>=18 && quantia7<23){
                        alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                        conta[6]= preco7[j7]*quantia7
                        document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+3," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                        if(quantia7>=24 && quantia7<29){
                            alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                            conta[6]= preco7[j7]*quantia7
                            document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+4," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                            if(quantia7>=30 && quantia7<35){
                                alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                conta[6]= preco7[j7]*quantia7
                                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+5," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                                if(quantia7>=36 && quantia7<40){
                                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                    conta[6]= preco7[j7]*quantia7
                                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+6," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7," itens", ", total gasto na secao: ", conta[6], "<br>" )
            }
            if(quantia7>40 && j7==18){
                alert("seu pedido excedeu o limite")
                quantia7= prompt("escolha por favor, um valor abaixo ou igual a 4")
                conta[6]= preco7[j7]*quantia7
                if(quantia7>=12 && quantia7<17){
                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                    conta[6]= preco7[j7]*quantia7
                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+2," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                    if(quantia7>=18 && quantia7<23){
                        alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                        conta[6]= preco7[j7]*quantia7
                        document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+3," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                        if(quantia7>=24 && quantia7<29){
                            alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                            conta[6]= preco7[j7]*quantia7
                            document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+4," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                            if(quantia7>=30 && quantia7<35){
                                alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                conta[6]= preco7[j7]*quantia7
                                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+5," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                                if(quantia7>=36 && quantia7<40){
                                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                    conta[6]= preco7[j7]*quantia7
                                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+6," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7," itens", ", total gasto na secao: ", conta[6], "<br>")
            }
            if(quantia7>9 && j7==19){
                alert("seu pedido excedeu o limite")
                quantia7= prompt("escolha por favor, um valor abaixo ou igual a 7")
                conta[6]= preco7[j7]*quantia7
                if(quantia7>=12 && quantia7<17){
                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                    conta[6]= preco7[j7]*quantia7
                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+2," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                    if(quantia7>=18 && quantia7<23){
                        alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                        conta[6]= preco7[j7]*quantia7
                        document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+3," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                        if(quantia7>=24 && quantia7<29){
                            alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                            conta[6]= preco7[j7]*quantia7
                            document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+4," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                            if(quantia7>=30 && quantia7<35){
                                alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                conta[6]= preco7[j7]*quantia7
                                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+5," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                                if(quantia7>=36 && quantia7<40){
                                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                    conta[6]= preco7[j7]*quantia7
                                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+6," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7," itens", ", total gasto na secao: ", conta[6], "<br>")
            }
            if(quantia7>20 && j7==20){
                alert("seu pedido excedeu o limite")
                quantia7= prompt("escolha por favor, um valor abaixo ou igual a 13")
                conta[6]= preco7[j7]*quantia7
                if(quantia7>=12 && quantia7<17){
                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                    conta[6]= preco7[j7]*quantia7
                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+2," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                    if(quantia7>=18 && quantia7<23){
                        alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                        conta[6]= preco7[j7]*quantia7
                        document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+3," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                        if(quantia7>=24 && quantia7<29){
                            alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                            conta[6]= preco7[j7]*quantia7
                            document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+4," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                            if(quantia7>=30 && quantia7<35){
                                alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                conta[6]= preco7[j7]*quantia7
                                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+5," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                                if(quantia7>=36 && quantia7<40){
                                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                    conta[6]= preco7[j7]*quantia7
                                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+6," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7," itens", ", total gasto na secao: ", conta[6], "<br>")
            }
            if(quantia7>=6 && quantia7<11){
                alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                conta[6]= preco7[j7]*quantia7
                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+1," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                if(quantia7>=12 && quantia7<17){
                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                    conta[6]= preco7[j7]*quantia7
                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+2," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                    if(quantia7>=18 && quantia7<23){
                        alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                        conta[6]= preco7[j7]*quantia7
                        document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+3," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                        if(quantia7>=24 && quantia7<29){
                            alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                            conta[6]= preco7[j7]*quantia7
                            document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+4," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                            if(quantia7>=30 && quantia7<35){
                                alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                conta[6]= preco7[j7]*quantia7
                                document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+5," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                                if(quantia7>=36 && quantia7<40){
                                    alert("a cada 6 bebidas alcoolicas, vc ganhou 1 de graca")
                                    conta[6]= preco7[j7]*quantia7
                                    document.write("vc escolheu ", pedidos[i][j7], " com uma quantia de ", quantia7+6," itens", ", total gasto na secao: ", conta[6], "<br>" )}
                
             }else if(g=="nao"||g=="n"){
            document.write("nao houve compras na secao de bebidas alcoolicas", "<br>")
            conta[6]=0
        }

        //secao da panificadora
        var h 
        var preco8= [5,6,2,3,5,13,8,5,2,25,15,30,15,8,20,4,3,2,4,12,4,   4, 0.30, 5]
        var quantia8 //usar j8 agora
        h= prompt("deseja comprar na panificadora? digite sim ou nao")
        if(h=="sim"||h=='s'){
            j8= Number(prompt("insira aqui o codigo da panificadora- (21)pastel - 4 REAIS - 6 unidades; (22)pao frances - 0.30 reais - 20 unidades; (23)croissant - 5 REAIS - 15 unidades "))
            quantia8= prompt('dps de escolher, vc precisa decidir quantos vai levar')
            if(quantia8<20){ 
                conta[7]= preco8[j8]*quantia8
                document.write("vc escolheu ", pedidos[i][j8], " com uma quantia de ", quantia8," itens", ", total gasto na secao: ", conta[7], "<br>" )
            }
            if(quantia8>20 && j8 ==21){
                alert("seu pedido excedeu o limite")
                quantia8= prompt("escolha por favor, um valor abaixo ou igual a 20")
                conta[7]= preco8[j8]*quantia8
                document.write("vc escolheu ", pedidos[i][j8], " com uma quantia de ", quantia8," itens", ", total gasto na secao: ", conta[7], "<br>")
            }
            if(quantia8>20 && j8==22){
                alert("seu pedido excedeu o limite")
                quantia8= prompt("escolha por favor, um valor abaixo ou igual a 20")
                conta[7]= preco8[j8]*quantia8
                document.write("vc escolheu ", pedidos[i][j8], " com uma quantia de ", quantia8," itens", ", total gasto na secao: ", conta[7], "<br>")
            }
            if(quantia8>15 && j8==23){
                alert("seu pedido excedeu o limite")
                quantia8= prompt("escolha por favor, um valor abaixo ou igual a 15")
                conta[7]= preco8[j8]*quantia8
                document.write("vc escolheu ", pedidos[i][j8], " com uma quantia de ", quantia8," itens", ", total gasto na secao: ", conta[7], "<br>")
            }   
             }else if(h=="nao"||h=="n"){
            document.write("nao houve compras na panificadora", "<br>")
            conta[7]=0
        }
