import express, {Application, Response, Request} from  'express'
import BaseRoutes from "../BaseRoutes";
import { ProductController } from '../../controllers/ProductController';

export class ProductRoutes extends BaseRoutes {

  private _productController : ProductController
  constructor(productController : ProductController) {
    super();
    this._productController = productController
  }

  public routes(): void {
    this.router.get('/', this._productController.findAll);
    this.router.get('/:id', this._productController.findProductbyId);
    this.router.put('/:id', this._productController.update);
    this.router.delete('/:id', this._productController.deleteById);
    this.router.post('/create', this._productController.create);
  }
}
