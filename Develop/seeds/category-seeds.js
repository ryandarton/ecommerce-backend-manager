const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Category } = require('../models');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'category',
    timestamps: false,
  }
);

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = async () => {
  await Category.sync({ force: true }); // This will create the table if it doesn't exist and drop it before recreating it
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
