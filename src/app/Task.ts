export interface Task {
    id?: number; //Cuando creamos una task puede tener un id
    text: string;
    day: string;
    reminder: boolean;
}
export const num = 250; //tuve que agregar esto porque no me dejaba importar este archivo Task.ts porque no lo tomaba como modulo... 
//googlee que cualquier file que tenga al menos un import o export default es considerado modulo y con eso se arregló la compilación. 