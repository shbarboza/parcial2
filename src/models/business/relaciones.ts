import { Car } from "./Car";
import { Tuition } from "./Tuition";

// relaciones aquí (DESPUÉS de que ambos existen)
Car.hasMany(Tuition, { foreignKey: "car_id" });
Tuition.belongsTo(Car, { foreignKey: "car_id" });