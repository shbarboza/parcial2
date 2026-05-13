"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const Car_1 = require("./Car");
const Tuition_1 = require("./Tuition");
class Routes {
    constructor() {
        this.carRoutes = new Car_1.Car();
        this.tuitionRoutes = new Tuition_1.Tuition();
    }
    routes(app) {
        this.carRoutes.routes(app);
        this.tuitionRoutes.routes(app);
    }
}
exports.Routes = Routes;
