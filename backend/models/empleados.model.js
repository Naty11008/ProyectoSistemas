import {Schema, model} from "mongoose"

const EsquemaEmpleados = new Schema({
    name:String,
    edad:Number,
    sueldo:Number
})

export const ModeloEmpleados = new model("Tabla Empleados", EsquemaEmpleados)
export const ModelDesempleados = new model("Tabla desempleados", EsquemaEmpleados)