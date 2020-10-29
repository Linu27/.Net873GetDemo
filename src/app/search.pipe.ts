import{ Pipe } from "@angular/core";
import {PipeTransform} from "@angular/core";

@Pipe({
    name:'contactfilterpipe' 
})

export class contactfilterpipe implements PipeTransform {
transform(cont: any,searchText: any){
    if (searchText)
        return cont.filter(x=>x.FirstName.toLowerCase().startsWith(searchText.toLowerCase()));

    return cont;
}

}