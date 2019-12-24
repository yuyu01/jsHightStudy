import {Get, Controller} from '../kaikeba/Decorator';

//console.log('我被加载了');


@Controller('')
export default class MainController {

    @Get('/')
    main(
        ctx
    ) {
        ctx.body = 'kaikeba';
    }

    @Get('/list')
    list(
        ctx
    ) {
        ctx.body = 'List';
    }

}