import {
      Router
} from 'express';

import usersRouter from './users/users.routes.js';
import usersMocksRouter from './users/users.mocks.routes.js';
import productsRouter from './products/products.routes.js';
import productsMocksRouter from './products/products.mocks.routes.js';
import cartsRouter from './carts/carts.routes.js';
import cartsMocksRouter from './carts/carts.mocks.routes.js';
import viewsRouter from './views/views.routes.js';
import loggerRouter from './logger/logger.routes.js';

import {
      authFromHeader as authMiddleware
} from '../middlewares/auth.middleware.js';

import {
      authAdmin as adminMiddleware
} from '../middlewares/auth.middleware.js';

import {
      addLogger as loggerMiddelware
} from '../utils/logger/logger.js';


const router = Router();

router.use(loggerMiddelware);
router.use('/', viewsRouter);
router.use('/api/loggerTest', loggerRouter);
router.use('/api/users', usersRouter);
router.use('/api/products', authMiddleware, productsRouter);
router.use('/api/carts', authMiddleware, cartsRouter);
router.use('/api/mocks', adminMiddleware, authMiddleware, usersMocksRouter, productsMocksRouter, cartsMocksRouter);

export default router;