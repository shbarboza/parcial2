import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db";

export interface TuitionI {
  id?: number;
  date_matricula: Date;
  city: string;
  payment: number;
  car_id: number;
  status: "ACTIVE" | "INACTIVE";
}

export class Tuition extends Model {
  public id!: number;
  public date_matricula!: Date;
  public city!: string;
  public payment!: number;
  public car_id!: number;
  public status!: "ACTIVE" | "INACTIVE";
}

Tuition.init(
  {
    date_matricula: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: {
          msg: "date_matricula must be a valid date",
          args: true
        },
        notEmpty: { msg: "date_matricula is required" },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "City is required" },
      },
    },
    payment: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Payment must be a positive number",
        },
      },
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cars",
        key: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "Tuition",
    tableName: "tuitions",
    timestamps: false,
  }
);
