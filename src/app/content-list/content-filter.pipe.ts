import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentFilter',
})
export class ContentFilterPipe implements PipeTransform {
 
  transform(contentList: Content[]) {

    const types = contentList.map((content) => content.type);
    const uniqueTypes = types.filter(
      (type, index) => types.indexOf(type) === index
    );
    const typeArrays = uniqueTypes.map((type) =>
      contentList.filter((content) => content.type === type)
    );
    const typeObjects = typeArrays.map((typeArray) => {
      return {
        type: typeArray[0].type,
        content: typeArray,
      };
    });
    return typeObjects;
  }
}