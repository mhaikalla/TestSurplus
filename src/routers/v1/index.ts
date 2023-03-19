import { ProductController } from "../../controllers/ProductController";
import { ProductServices } from "../../services/ProductServices";
import BaseRoutes from "../BaseRoutes";
import {ProductRoutes} from '../v1/productRouters'

const productServices = new ProductServices();
const productController = new ProductController(productServices);
const productRoutes = new ProductRoutes(productController);
productRoutes.routes();

export class Api extends BaseRoutes {
    constructor() {
        super()
    }

    public routes(): void {
        this.router.use('/product', productRoutes.router)
    }
}
