import {Get, Controller} from '../kaikeba/Decorator';

@Controller('/user')
export default class UserController {

    @Get('/register')
    register(ctx) {
        ctx.body = '用户注册';
    }

    @Get('/login')
    login(ctx) {
        ctx.body = '用户登录';
    }
}