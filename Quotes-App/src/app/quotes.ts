export class Quotes {
    showInfo!: boolean;
    constructor(public author: string, public genre: string, public quote: string, public moreInfo: string){
        this.showInfo=false;
    }
    //author!: string;
    //genre!: string;
    //quote!: string;
    //moreInfo!: string;
}
