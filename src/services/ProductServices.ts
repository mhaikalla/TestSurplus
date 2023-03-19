import { CategoryTable, ImageTable, ProductCategoryTable, ProductTable,ProductImageTable } from "../db/sequelize/table"
import { PaginatedData, QueryFilter } from "../models/QueryFilter"
import {Product, ProductResponse} from '../models/index'
import {Op} from 'sequelize'
export class ProductServices {
    constructor(){

    }
    findAll = async (filter : QueryFilter<Product>) : Promise<ProductResponse[]> =>{
        const keyword = filter.keyword || ""
        const products = await ProductTable.findAll({
            where : {
                [Op.or] : {
                    name : {[Op.like] : keyword },
                    description : {[Op.like] : keyword },
                }
            },
            include : [
                {
                    model : CategoryTable,
                },
                {
                    model : ImageTable,
                },
            ],
            limit : filter.limit,
            offset : filter.page < 1 ? 0 : (filter.page - 1) * filter.limit
        })

        if(!products) return []

        return products.map(x => x.get({plain : true})) as any
  
        
    }

    findById = async (id:Number) : Promise<ProductResponse | null> =>{
        const products = await ProductTable.findOne({
            where : {id},
            include : [
                {
                    model : ProductCategoryTable,
                },
                {
                    model : ProductImageTable,
                },
            ]
        }) 
        if(!products) return null
        
        // const result = products.get({plain : true})
        // let finalResult : ProductResponse = {
        //     id : result.id,
        //     name : result.name,
        //     enable : result.enable,
        //     image : 

        // }
        return null
    }
}
