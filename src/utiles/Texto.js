class Texto{

    constructor(params){
        if (params === undefined || !("name" in params && "view" in params)){
            throw new Error("bad params");
        }
        let { name = "" , view = false } = params;
        this.name = name 
        this.view = view 

    }
}

export {Texto}
