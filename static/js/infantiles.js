class Infantiles extends Libro{
    static contadorInfantiles= 0;
    constructor(nombre, autor, descripcion){
        super(nombre, autor, descripcion);
        this._id = ++Infantiles.contadorInfantiles;
    }

    get id(){
        return this._id;
    }
}