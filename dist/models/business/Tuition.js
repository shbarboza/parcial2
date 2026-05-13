"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuition = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../database/db");
const Car_1 = require("./Car");
class Tuition extends sequelize_1.Model {
}
exports.Tuition = Tuition;
Tuition.init({
    date_matricula: {
        type: sequelize_1.DataTypes.DATEONLY,
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
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "City is required" },
        },
    },
    payment: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Payment must be a positive number",
            },
        },
    },
    car_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "cars",
            key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("ACTIVE", "INACTIVE"),
        defaultValue: "ACTIVE",
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Tuition",
    tableName: "tuitions",
    timestamps: false,
});
// Many Tuitions → One Car
Tuition.belongsTo(Car_1.Car, {
    foreignKey: "car_id",
    targetKey: "id",
});
