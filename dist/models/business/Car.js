"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../database/db");
const Tuition_1 = require("./Tuition");
class Car extends sequelize_1.Model {
}
exports.Car = Car;
Car.init({
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Brand is required" },
        },
    },
    class: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Class is required" },
        },
    },
    model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Model is required" },
        },
    },
    engine_capacity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Engine capacity is required" },
        },
    },
    capacity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [1],
                msg: "Capacity must be at least 1",
            },
        },
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("ACTIVE", "INACTIVE"),
        defaultValue: "ACTIVE",
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Car",
    tableName: "cars",
    timestamps: false,
});
// One Car → Many Tuitions
Car.hasMany(Tuition_1.Tuition, {
    foreignKey: "car_id",
    sourceKey: "id",
});
