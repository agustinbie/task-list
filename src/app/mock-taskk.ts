import {Task} from "./Task"

export const TASKS: Task[] = [
    {
        id:1,
        text: "Terminar primer modulo de Angular",
        day: 'Agosto 5 a las 12:00',
        reminder: true
    },
    {
        id:2,
        text: "HAcer las compras",
        day: 'Agosto 5 a las 16:00',
        reminder: true
    },
    {
        id:3,
        text: "Investigar sobre Boostrap",
        day: 'Agosto 5 a las 19:00',
        reminder: false
    },
    {
        id:4,
        text: "Leer un libro de bolsa",
        day: 'Agosto 6 a las 19:00',
        reminder: false
    }
]//esto emula una base de datos que despues se tiene que hacer con mongoDB o cualquier manager, es un array json