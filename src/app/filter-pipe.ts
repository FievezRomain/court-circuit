import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: String): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        //return items.filter(item => item.title.indexOf(filter) !== -1);
        return items.filter(item => item.libelle.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    }

}
