export class Meeting {

    id: number;
    titre: string="";
    Date_Deb: string="";
    Date_Fin: string="";

    constructor(id: number, titre: string, Date_Deb: string, Date_Fin: string) {
        this.id = id;
        this.titre = titre;
        this.Date_Deb = Date_Deb;
        this.Date_Fin = Date_Fin;

    }

}