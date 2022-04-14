import {
    createServiceApiApp,
    ValidatingRequestRouting,
    StandardRouting,
    authenticatedMiddleware
} from '@crystallize/node-service-api-router';
import Koa from 'koa';
const routes: StandardRouting = {
    '/': {
        get: {
            handler: async (ctx: Koa.Context) => {
                ctx.body = { msg: `Service API - Tenant ${process.env.CRYSTALLIZE_TENANT_IDENTIFIER}` };
            }
        }
    }
};

const bodyConvertedRoutes: ValidatingRequestRouting = {};
const { run } = createServiceApiApp(bodyConvertedRoutes, routes, authenticatedMiddleware(`${process.env.JWT_SECRET}`));
run(process.env.PORT ? parseInt(process.env.PORT) : 3000);
