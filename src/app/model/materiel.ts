export interface Materiel {
    id : string,
    categorie: string,
    marque: string,
    serie: string,
    date: Date,
    inventaire : string,
    prix: number
    etat: string
    valide: string
}


export const champs = ["Categorie","Marque","Serie","Date","Inventaire","Prix","Etat"]
export const etat = ["Nuef" , "Utilisable"]