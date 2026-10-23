import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from '../composants/liste-cours/liste-cours';

@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(places:number,seuil=5): string {
    if(places==0)return "complet";
    if(places==1)return "derniere place";
    if(places>=2 && places<=seuil) return "plus que " +places
    return places+" places disponibles"
  
  }}
