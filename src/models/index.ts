
export interface Category {
  id : Number,
  name : string,
  enable : boolean
}

export interface Product {
  id : Number,
  name : string,
  description : string,
  enable : boolean
}

export interface CategoryProduct {
  product_id : Number,
  category_id : Number
}

export interface Image {
  id : Number,
  name : string,
  file : string,
  enable : boolean
}

export interface ProductImage {
  product_id : Number,
  image_id :Number
}


export interface ProductResponse{
  id : Number,
  name : string,
  description : string | null,
  image : Image[],
  category : Category[],
  enable : boolean
}


