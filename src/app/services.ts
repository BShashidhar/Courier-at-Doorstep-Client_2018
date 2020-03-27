import { SubCategory } from "./sub-category";
import { Provider } from "./provider";

export class Services {
    id:Number;
    name:string;
    city:string;
    address:string;
    image1:string;
    image2:string;
    image3:string;
    status:string;
    rating:string;
    description:string;
    timing:string;
    peaktime:string;
    priceA:number;
    priceC:number;
    sprovider:Provider;
    subcategory:SubCategory;
}
