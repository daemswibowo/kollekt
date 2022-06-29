const operators: Array<string> = ['eq', 'ne', 'gt', 'ge', 'lt', 'le'];
const replacements: Array<string> = ['=', '!=', '>', '>=', '<', '<='];

export function filtersToSQL(filters: string): string {
  const result = filters.split(' ').map((filter) => {
    if (operators.includes(filter)) {
      return replacements[operators.indexOf(filter)];
    }

    return filter;
  });

  return result.join(' ');
}
