abstract class Company {
    public title : string;
    constructor(title : string) {
        this.title = title;
    }

    public abstract setLineOfBusiness(input : string[]) : void;
    public abstract GetLineOfBusiness() : string[];
}

export class XYZBank extends Company {
    private location : string;
    private lineofBusiness : string[];
    constructor(title : string, location : string) {
        super(title);
        this.location = location;
    }
    public setLineOfBusiness(input : string[]) : void {
        this.lineofBusiness = input;
    }
    public GetLineOfBusiness() : string[] {
        return this.lineofBusiness;
    }

}