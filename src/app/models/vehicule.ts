export class Vehicule {
    matricule: number
    anneeModel: number
    prix : number
    imageVehicule: String

    constructor(
        matricule: number,
        anneeModel: number,
        prix : number,
        imageVehicule: String
    ){
        this.anneeModel = anneeModel
        this.matricule = matricule
        this.prix = prix
        this.imageVehicule = imageVehicule
    }
}
