import { Category, CategoryProduct, Image, Product, ProductImage } from '../../models';

import { DataTypes, Model, Optional, CreationOptional, NOW, ModelDefined } from 'sequelize';
import { getDb, getDataTypesChaining as _ } from './Sequelize';

const defaultSetting = {
  underscored: true,
};

export const CategoryTable = getDb().define<Model<Category>>("categories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name : _(DataTypes.STRING),
  enable:_(DataTypes.BOOLEAN)
}, defaultSetting)

export const ProductTable = getDb().define<Model<Product>>("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name : _(DataTypes.STRING),
  description : _(DataTypes.STRING),
  enable:_(DataTypes.BOOLEAN)
} as any, defaultSetting)

export const ProductCategoryTable = getDb().define<Model<CategoryProduct>>("category_products", {
  product_id : _(DataTypes.NUMBER),
  category_id : _(DataTypes.NUMBER),
}, defaultSetting)

export const ImageTable = getDb().define<Model<Image>>("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name : _(DataTypes.STRING),
  file : _(DataTypes.STRING),
  enable:_(DataTypes.BOOLEAN)
}, defaultSetting)

export const ProductImageTable = getDb().define<Model<ProductImage>>("product_images", {
    product_id : _(DataTypes.NUMBER),
    image_id :_(DataTypes.NUMBER)
}, defaultSetting)

CategoryTable.belongsToMany(ProductTable, { through: ProductCategoryTable });
ProductTable.belongsToMany(CategoryTable, { through: ProductCategoryTable });
ImageTable.belongsToMany(ProductTable, { through: ProductImageTable });
ProductTable.belongsToMany(ImageTable, { through: ProductImageTable });

