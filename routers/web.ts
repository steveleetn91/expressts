import * as core from 'express-serve-static-core';
import Web from '../app/controllers/Web';
export default class WebApplication {
    app : core.Express;
    constructor(app : core.Express){
        this.app = app;
    }
    init(){
        this.app.get("/web",(req : any,res : any) => {
            (new Web).hello(req,res);
        });
    }
}