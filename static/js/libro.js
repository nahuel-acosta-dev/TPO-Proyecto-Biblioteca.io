class Libro{
    constructor(nombre, autor, descripcion){
        this._nombre = nombre;
        this._autor = autor;
        this._descripcion = descripcion;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._descripcion = nombre;
    }

    get autor(){
        return this._autor;
    }
    set autor(autor){
        this._autor = autor;
    }

    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

}