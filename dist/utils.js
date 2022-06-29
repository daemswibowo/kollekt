"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtersToSQL = void 0;
const operators = ['eq', 'ne', 'gt', 'ge', 'lt', 'le'];
const replacements = ['=', '!=', '>', '>=', '<', '<='];
function filtersToSQL(filters) {
    const result = filters.split(' ').map((filter) => {
        if (operators.includes(filter)) {
            return replacements[operators.indexOf(filter)];
        }
        return filter;
    });
    return result.join(' ');
}
exports.filtersToSQL = filtersToSQL;
//# sourceMappingURL=utils.js.map