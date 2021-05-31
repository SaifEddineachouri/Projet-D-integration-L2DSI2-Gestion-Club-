export class ListToDo {

    public id: number;
    public titre: string;
    public DatePj : string;
    

    constructor(id: number, titre: string,  DPj: string) {
        this.id = id;
        this.titre = titre;
        this.DatePj=DPj;
    }

}