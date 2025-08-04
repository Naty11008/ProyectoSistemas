import { ModelDesempleados, ModeloEmpleados } from "../models/empleados.model.js";

ModeloEmpleados.create({
    name:"Panchito",
    edad:23,
    sueldo:24000
},
{
    name:"Rosa",
    edad:50,
    sueldo:70000
})

export const test = ()=>{
    console.log("Funcion para llamar al controlador desde app.js")
}

ModelDesempleados.create({
    name:"Juan",
    edad:22,
    sueldo:10000
})
