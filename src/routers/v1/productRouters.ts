import express, {Application, Response, Request} from  'express'
import BaseRoutes from "../BaseRoutes";



export class ProductRoutes extends BaseRoutes {


  constructor() {
    super();

  }

  public routes(): void {
    this.router.get('/', (req: Request, res: Response) => {
    });
    this.router.get('/:id', (req: Request, res: Response) => {
    });
    this.router.put('/:id', (req: Request, res: Response) => {
    });
    this.router.delete('/:id', (req: Request, res: Response) => {
    });
    this.router.post('/create', (req: Request, res: Response) => {
    });

  }
}
