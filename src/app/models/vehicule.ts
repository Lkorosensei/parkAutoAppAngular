export class Vehicule {
    matricule: number
    anneeModel: number
    descriptif: String
    prix : number
    imageVehicule: String

    constructor(
        matricule: number,
        anneeModel: number,
        descriptif : String,
        prix : number,
        imageVehicule: String
    ){
        this.anneeModel = anneeModel
        this.matricule = matricule
        this.descriptif = descriptif
        this.prix = prix
        this.imageVehicule = imageVehicule
    }
}
