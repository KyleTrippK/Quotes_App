export class Quotes {
    public showInfo!: boolean;
    constructor(public author: string, public name: string,public genre: string, public quote: string, public moreInfo: string, public datePost: Date){
        this.showInfo=false;
    }
    //author!: string;
    //genre!: string;
    //quote!: string;
    //moreInfo!: string;
}
