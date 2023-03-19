import express, {Application, Response, Request, NextFunction} from 'express'
import {ControllerBase} from './ControllerBase'
import { ProductServices } from '../services/ProductServices';
import { QueryFilter } from '../models/QueryFilter';
import {Product, ProductResponse} from '../models/index'
export class ProductController extends ControllerBase
{
    private _productService : ProductServices
    constructor(productServices : ProductServices)
    {
        super();
        this._productService = productServices
        
    }

    findAll = async (request : Request, response : Response, next : NextFunction) : Promise<any> =>{
        try{
            const requests = request.params
            let filter : QueryFilter<Product> ={
                keyword : requests.keyword || "",
                limit  :requests.limit ? Number(requests.limit) : 10,
                page :requests.page ? Number(requests.page) : 1
            }
            const result = await this._productService.findAll(filter)
            return this.ok(response, result)
        }
        catch(ex){
            return next(ex)
        }
    }
    findProductbyId = async (request : Request, response : Response, next : NextFunction) : Promise<any> =>{
        try{
            const { id } = request.params
           
            const result = await this._productService.findById(Number(id))
            return this.ok(response, result)
        }
        catch(ex){
            return next(ex)
        }
    }
    create = async () : Promise<void> =>{

    }
    update = async () : Promise<void> =>{

    }
    delete = async () : Promise<void> =>{

    }
}