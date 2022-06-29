"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function restMiddleware(req, _res, next) {
    const { filters } = req.query;
    // handle filters
    if (filters && typeof filters === 'string') {
        req.query.filters = (0, utils_1.filtersToSQL)(filters);
    }
    next();
}
exports.default = restMiddleware;
//# sourceMappingURL=rest.js.map