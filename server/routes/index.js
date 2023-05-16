import { Router } from 'express'
import productController from '../controllers/productController.js'
import exerciseRouter from './exerciseRouter.js'
import userRouter from './userRouter.js'
import productRouter from './productRouter.js'

const router = new Router()

const { getAllProducts, createProduct } = productController

router.use('/exercises', exerciseRouter)

router.use('/', userRouter)

router.use('/products', productRouter)


export default router