class Ficcion extends Libro{
    static contadorFiccion = 0;
    constructor(nombre, autor, descripcion){
        super(nombre, autor, descripcion);
        this._id = ++Ficcion.contadorFiccion;
    }

    get id(){
        return this._id;
    }
}