import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer',
})
export class TronquerPipe implements PipeTransform {
  transform(text: string , long=10): string {
    if(text.length<long)return text
    return text.substring(0,long)+"..."
  }
}
