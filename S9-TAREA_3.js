class Ejercicio {
    ejercicio1() {
        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        let r = 0
        console.log("1) Sumar dos numeros siempre cuando el primero sea mayor al segundo")
        console.log("Numero 1 : ", num1)
        console.log("Numero 2 : ", num2)
        if (num1 > num2) {
            r = num1 + num2
            console.log("El resultado de las suma es : " + r)
        } else {
            console.log("No se puede realizar la suma")
        }
    }

    ejercicio2() {

        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        let resul = 0
        console.log("2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
        var mensajes = [
            "+",
            "-",
            "*",
            "/",
            "%",
        ];
        var numeroAleatorio = Math.floor(Math.random() * mensajes.length);
        switch (numeroAleatorio) {
            case 0:
                resul = num1 + num2
                console.log(num1, "+", num2, "=", resul)
                break
            case 1:
                resul = num1 - num2
                console.log(num1, "-", num2, "=", resul)
                break
            case 2:
                resul = num1 * num2
                console.log(num1, "*", num2, "=", resul)
                break
            case 3:
                resul = num1 / num2
                console.log(num1, "/", num2, "=", resul)
                break
            case 4:
                resul = num1 % num2
                console.log(num1, "%", num2, "=", resul)
                break
        }
    }


    ejercicio3() {

        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        console.log("3) Presentar el mayor de dos numeros")
        console.log("Numero 1" + num1)
        console.log("Numero 2" + num2)
        if (num1 > num2) {
            console.log(num1 + ">" + num2)
        } else {
            if (num1 == num2) {
                console.log(num1 + "=" + num2)
            } else {
                console.log(num2 + ">" + num1)
            }

        }
    }

    ejercicio4() {

        console.log("4) Dado un nombre presentarlo n veces ")
        var nombre = [
            "Jefferson",
            "Elias",
            "Jordy",
            "Christopher",
            "Joel"
        ]
        var numeroAleatorio = Math.floor(Math.random() * nombre.length);
        let n = Math.floor(Math.random() * 10)
        for (let index = 0; index < n; index++) {
            console.log(nombre[numeroAleatorio])
        }


    }
    ejercicio5() {

        console.log("5) Dado un valor de compra presentar el total considerando un 12% de iva")
        let num1 = Math.floor(Math.random() * 10)
        let resul = 0
        let Total = 0
        var compras = [
            "Tomates",
            "Huevos",
            "Papas",
            "Limones",
            "Cebolla",
            "Pollo",
            "Manzanas",
            "Peras"
        ];
        var numeroAleatorio = Math.floor(Math.random() * compras.length);
        switch (numeroAleatorio) {
            case 0:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[0], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 1:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[1], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 2:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[2], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 3:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[3], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 4:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[4], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 5:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[5], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 6:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[6], "= $", num1, " Mas el iva el total es: ", Total)
                break
            case 7:
                resul = num1 * 0.12
                Total = num1 + resul
                console.log(compras[7], "= $", num1, " Mas el iva el total es: ", Total)
                break
        }

    }
    ejercicio6() {

        console.log("6) Presentar 5 veces un nombre")
        var nombre = [
            "Jefferson",
            "Elias",
            "Jordy",
            "Christopher",
            "Joel"
        ]
        var numeroAleatorio = Math.floor(Math.random() * nombre.length);
        let n = 5
        for (let index = 0; index < n; index++) {
            console.log(nombre[numeroAleatorio])
        }
    }

    ejercicio7() {

        console.log("7) Presentar los numeros multiplos de 3 del 3 al 21")
        for (let index = 1; index < 22; index++) {
            if (index % 3 === 0) {
                console.log(index)
            }


        }

    }
    ejercicio8() {

        console.log("8) Presentar los numeros multiplos de 3 del 21 al 3")
        for (let index = 21; index >= 3; index--) {
            if (index % 3 === 0) {
                console.log(index)
            }
        }


    }

    ejercicio9() {

        console.log("9) Dados dos nombres indicar si son iguales o diferentes")
        var nombre = [
            "Jefferson",
            "Elias",
            "Jordy",
            "Christopher",
            "Joel"
        ]
        var numeroAleatorio1 = Math.floor(Math.random() * nombre.length);
        var numeroAleatorio2 = Math.floor(Math.random() * nombre.length);
        if (nombre[numeroAleatorio1] == nombre[numeroAleatorio2]) {
            console.log("Los nombres " + nombre[numeroAleatorio1] + " " + nombre[numeroAleatorio2] + " Son iguales")
        } else {
            console.log("Los nombres " + nombre[numeroAleatorio1] + " " + nombre[numeroAleatorio2] + " No son iguales")
        }

    }
    ejercicio10() {

        console.log("10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
        var numero = [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 100000),
            Math.floor(Math.random() * 10000),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 1000)
        ]
        console.log("Arreglo[")
        for (let index = 0; index < numero.length; index++) {
            console.log(numero[index])
        }
        console.log("]")
        console.log("Los numeros menores a 5 digitos son:")
        for (let index = 0; index < numero.length; index++) {

            if (numero[index].toString().length < 5) {

                console.log(numero[index])
            }


        }

    }
    ejercicio11() {
        console.log("11) Dado un arreglo presentar sus elementos")
        console.log(" [ Jefferson,Elias,Jordy,Christopher,Joel ]")
        var nombre = [
            "Jefferson",
            "Elias",
            "Jordy",
            "Christopher",
            "Joel"
        ]
        for (let index = 0; index < nombre.length; index++) {
            console.log(nombre[index])

        }
    }
    ejercicio12() {

        console.log("12) Dado un arreglo de numeros presentar los menores a 10")

        var nombre = [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 10)
        ]
        console.log("Arreglo[")
        for (let index = 0; index < nombre.length; index++) {
            console.log(nombre[index])
        }
        console.log("]")
        console.log("Los numeros menores a 10 son:")
        for (let index = 0; index < nombre.length; index++) {

            if (nombre[index] < 10) {

                console.log(nombre[index])
            }


        }

    }
    ejercicio13() {

        console.log("13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        let suma = 0
        var nombre = [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 100)
        ]
        console.log("Arreglo[")
        for (let index = 0; index < nombre.length; index++) {
            console.log(nombre[index])
        }
        console.log("]")
        console.log("Los numeros impares son")
        for (let index = 0; index < nombre.length; index++) {
            if (nombre[index] % 2 !== 0) {
                console.log(nombre[index])
            } else {
                suma = nombre[index] + suma
            }

        }
        console.log("La suma de los pares es: " + suma)

    }
    ejercicio14() {

        console.log("14) Presentar el primero el medio y el ultimo valor de un arreglo")
        var nombre = [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ]
        console.log("Arreglo[")
        for (let index = 0; index < nombre.length; index++) {
            console.log(nombre[index])
        }
        console.log("]")
        console.log("El primer elemento es : " + nombre[0])
        let medio = nombre[Math.floor(nombre.length / 2)]
        console.log("El elemento medio es : " + medio)
        console.log("El ultimo elemento es : " + nombre[nombre.length - 1])

    }
    ejercicio15() {

        console.log("15)Calcular el vuelto de un a compra dado el costo y el pago")
        let costo = Math.floor(Math.random() * 10)
        let pago = Math.floor(Math.random() * 100)
        let vuel = 0
        if (costo < pago) {
            vuel = pago - costo
            console.log("Tu vuelto es de : $", vuel)
        } else {
            console.log("Pago insuficiente")
        }

    }
    ejercicio16() {
        console.log("16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        let num = Math.floor(Math.random() * 10)
        let resul = 0
        console.log("Tabla de multiplicar del: " + num)
        for (let i = 1; i <= 12; i++) {
            resul = num * i
            console.log(num + "*" + i + "=" + resul)
        }

    }
    ejercicio17() {
        console.log("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        let resul = 0
        let suma = 0
        console.log(num1 + " X " + num2)
        for (let i = 0; i < num2; i++) {
            suma = resul + num1
            console.log(resul + "+" + num1 + "=" + suma)
            resul = resul + num1
        }
        console.log("El resultado de " + num1 + " X " + num2 + " = " + suma)
    }
    ejercicio18() {
        console.log("18)Realizar la division de dos numeros por medio de restas sucesivas")
        let num1 = Math.floor(Math.random() * 10) + 1
        let num2 = Math.floor(Math.random() * 10) + 1
     
        let cont = 0
        if (num1 >= num2) {
            let acu = num1
            let acu1 = num1
            console.log(num1, "/", num2, ":")
            while (acu1 >0) {
                
                acu1 = acu1 - num2
                if(acu1>=0){
                    console.log(acu, "-", num2, "=", acu1)
                    acu = acu - num2
                    cont = cont + 1
                }
                
            }
            console.log("La division de: ", num1, "/", num2, "=", cont," y su residuo es:",acu)
        } else {
            let acu = num2
            let acu1 = num2
            console.log(num2, "/", num1, ":")
            while (acu1 >0) {
                
                acu1 = acu1 - num1
                if(acu1>=0){
                console.log(acu, "-", num1, "=", acu1)
                acu = acu - num1
                cont = cont + 1
                }
                
            }
            console.log("La division de: ", num2, "/", num1, "=", cont," y su residuo es:",acu)
        }
    }
    ejercicio19() {
        console.log("19)Calcular el factorial de un numero")
        let n = Math.floor(Math.random() * 10)
        let pro = 1
        console.log("Los factoriales de " + n + " son: ")
        for (let i = n; i > 0; i--) {
            console.log(i)
            pro = pro * i
        }
        console.log("La multiplicacion de los factoriales es: " + pro)
    }
    ejercicio20() {
        console.log("20)Calcular el exponente de un numero")
        let n1 = Math.floor(Math.random() * 10)
        let ex = Math.floor(Math.random() * 6)
        let c = 1
        let pro = 1
        console.log("Calcular " + n1 + "^" + ex)
        while (c <= ex) {
            pro = pro * n1
            c++

        }
        console.log(pro)
    }
    ejercicio21() {
        console.log("21) Calcular la serie de fibonacci dado un numero")
        let a = 0, b = 1, c = 1, cont = 3, n = Math.floor(Math.random() * 10)
        console.log("Serie de fibonacci dado un numero: " + n)
        console.log(a)
        console.log(b)
        console.log(c)
        while (cont < n) {
            a = b; b = c; c = a + b
            console.log(c)
            cont++
        }
    }
    ejercicio22() {
        console.log("22) Dado un numero invertirlo")
        let n = Math.floor(Math.random() * 1000)
        console.log(n)
        let digito = 0
        console.log("El numero invertido es: ")
        while (n > 0) {
            digito = n % 10
            console.log(digito)
            n = Math.floor(n / 10)
        }
    }
    ejercicio23() {
        console.log("23) Presentar los divisores de un numero")
        let n = Math.floor(Math.random() * 10)
        console.log("Los divisores de " + n + " son: ")
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                console.log(i)
            }
        }
    }
    ejercicio24() {
        console.log("24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero")
        let n = Math.floor(Math.random() * 10)
        let suma = 0
        console.log("Los divisores de " + n + " son: ")
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                suma = suma + i
                console.log(i)
            }
        }
        if (suma == n) {
            console.log("El numero es perfecto")
        } else {
            console.log("El numero no es perfecto")
        }
    }
    ejercicio25(){
        console.log("25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)")
        let num=Math.floor (Math.random() *50), i=1, cont=0
        for (i=1;i<=num;i++){
            if (num%i==0){
                cont=cont+1
            }
        }
        if (cont==2){
            console.log("El numero", num, "es primo")
        }else{
            console.log("El numero", num, "no es primo")
        }
    }

}
let ejer = new Ejercicio()
//ejer.ejercicio2()
//ejer.ejercicio1()
//ejer.ejercicio3()
//ejer.ejercicio4()
//ejer.ejercicio5()
//ejer.ejercicio6()
//ejer.ejercicio7()
//ejer.ejercicio8()
//ejer.ejercicio9()
//ejer.ejercicio10()
//ejer.ejercicio11()
//ejer.ejercicio12()
//ejer.ejercicio13()
//ejer.ejercicio14()
//ejer.ejercicio15()
//ejer.ejercicio16()
//ejer.ejercicio17()
//ejer.ejercicio18()
//ejer.ejercicio19()
//ejer.ejercicio20()
//ejer.ejercicio21()
//ejer.ejercicio22()
//ejer.ejercicio23()
//ejer.ejercicio24()
ejer.ejercicio18()




