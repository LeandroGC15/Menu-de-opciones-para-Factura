let opc, ac;
let mc, des, tc, interes, nombre, rif, dir;

console.log("*****TELARES DE ORIENTE*****") //MENU DE OPCIONES
console.log("[1]CONTADO\n" +
"[2] CREDITO\n " +
"[3] SALIR\n " + 
"OPCION 1 SELECCIONADA:");
opc=1 //VA A SELECCIONAR POR DEFECTO LA OPCION 1 QUE CORRESPONDE A CONTADO
switch(opc) {
    case 1: 
    nombre= "DISTRIBUIDORA CENTRAL CA";
    rif= "J-000020202";
    dir= "LOS FLORES";
    mc=1500000;
    ac=3
    if((mc > 10000) && (ac > 2)){
        des=mc*10/100
        tc=mc-des
    } 
    else{
        tc=mc
    }
    console.log("CLIENTE:" + nombre)
    console.log("RIF:" + rif)
    console.log("DIRECCION:" + dir)
    console.log("TOTAL A PAGAR:" + tc)
    break;
    case 2:
        nombre= "DISTRIBUIDORA MULTIMARCA";
        rif="J-000020202";
        dir="LOS FLORES";
        mc=3000000;
        ac=3
        if((mc>2000000) && (ac>4)){
            tc=mc
        }
        else {
            interes=mc*10/100
            tc=mc+interes;
        }
        console.log("CLIENTE:" + nombre)
        console.log("RIF:" + rif)
        console.log("DIRECCION:" + dir)
        console.log("TOTAL A PAGAR:" + tc)
        break;
        case 3:
            break;
            default:
                console.log("VALORES ENTRE 1 Y 3");
                break;
}

