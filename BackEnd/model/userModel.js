import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const  User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        length: {
            min: 8,
            max: 16,
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
}
);

export default User;