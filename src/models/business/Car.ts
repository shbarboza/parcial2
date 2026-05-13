import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db";
import { Tuition } from "./Tuition";

export interface CarI {
  id?: number;
  brand: string;
  class: string;
  model: string;
  engine_capacity: string;
  capacity: number;
  status: "ACTIVE" | "INACTIVE";
}

export class Car extends Model {
  public id!: number;
  public brand!: string;
  public class!: string;
  public model!: string;
  public engine_capacity!: string;
  public capacity!: number;
  public status!: "ACTIVE" | "INACTIVE";
}

Car.init(
  {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Brand is required" },
      },
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Class is required" },
      },
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Model is required" },
      },
    },
    engine_capacity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Engine capacity is required" },
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "Capacity must be at least 1",
        },
      },
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "Car",
    tableName: "cars",
    timestamps: false,
  }
);

// One Car → Many Tuitions
Car.hasMany(Tuition, {
  foreignKey: "car_id",
  sourceKey: "id",
});