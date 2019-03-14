import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'titleCase'
})
export class TitleCase implements PipeTransform {

     transform(value:string, args:any){
          
        let words = value.split(' ');

        for (let i=0; i<words.length; i++) {
           if ( i>0 && this.isPrePosition(words[i]))
            words[i] = words[i].toLowerCase();
           else 
            words[i] = this.toTitleCase(words[i]);           
        }

        return words.join(' ');
    }

    private isPrePosition(word:string) : boolean {
        let prepositions = ['of', 'the'];
        return prepositions.includes(word.toLowerCase());
    }

    private toTitleCase(word:string) : string {
      return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
    }
}