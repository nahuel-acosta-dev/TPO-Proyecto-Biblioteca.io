class Terror extends Libro{
    static contadorTerror = 0;
    constructor(nombre, autor, descripcion){
        super(nombre, autor, descripcion);
        this._id = ++Terror.contadorTerror;
    }

    get id(){
        return this._id;
    }
}