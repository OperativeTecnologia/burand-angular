import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe para filtrar um array de objetos, com base em um termo de pesquisa.
 * As propriedades dos objetos que correspondem ao termo de pesquisa são retornadas.
 */
@Pipe({
  standalone: true,
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  /**
   * Transforma a lista de itens, filtrando com base no termo fornecido.
   * Também recebe uma lista de chaves a serem ignoradas durante a pesquisa.
   *
   * @param items Lista de itens para filtrar.
   * @param term Uma string para comparar com todas as propriedades da lista.
   * @param excludes Lista de chaves que serão ignoradas durante a pesquisa.
   * @returns Retorna uma lista de itens que correspondem ao termo.
   */
  transform(items: Record<string, any>[], term: string, excludes: string[] = []): Record<string, any>[] {
    if (!term || !items) {
      return items;
    }

    const toCompare = term.toLowerCase();

    function checkInside(item: any, term: string): boolean {
      if (typeof item === 'string' && item.toString().toLowerCase().includes(toCompare)) {
        return true;
      }

      for (const property in item) {
        if (item[property] === null || item[property] === undefined || excludes.includes(property)) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        } else if (item[property]?.toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(item => {
      return checkInside(item, term);
    });
  }
}
