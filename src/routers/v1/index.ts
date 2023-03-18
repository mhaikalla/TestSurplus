import BaseRoutes from "../BaseRoutes";
import {ProductRoutes} from '../v1/productRouters'

const productRoutes = new ProductRoutes()
productRoutes.routes();

export class AppV1 extends BaseRoutes {
    constructor() {
        super()
    }

    public routes(): void {
        this.router.use('/product', productRoutes.router)
    }
}
