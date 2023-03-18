import { ProductController } from "../../controllers/ProductController";
import BaseRoutes from "../BaseRoutes";
import {ProductRoutes} from '../v1/productRouters'

const productController = new ProductController();
const productRoutes = new ProductRoutes(productController);
productRoutes.routes();

export class AppV1 extends BaseRoutes {
    constructor() {
        super()
    }

    public routes(): void {
        this.router.use('/product', productRoutes.router)
    }
}
