import { Application } from "express";

import { Car } from "./Car";
import { Tuition } from "./Tuition";

export class Routes {
  public carRoutes: Car = new Car();
  public tuitionRoutes: Tuition = new Tuition();

  public routes(app: Application): void {
    this.carRoutes.routes(app);
    this.tuitionRoutes.routes(app);
  }
}