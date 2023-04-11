export interface ProductTemplate {
    id: string;
    owner_Org:string;
    transferTo_Org: string;
    //Batch_id: string;
    type: string;
    location: string;
    weight: Number;
    temperature: Number;
    useByDate:Date;
    linkedExperiments: Array<String>;
}
