import { Router } from 'express'
import productController from '../controllers/productController.js'

const router = new Router()

const { getAllProducts, createProduct, editProduct, deleteProduct, addToCart, getCartProducts, removeProductFromCart, decreaseProductQuantityInCart, getProductsByCategory } = productController

router.get('/', getAllProducts)
router.get('/cart/items', getCartProducts)
router.get('/:category', getProductsByCategory)

router.post('/create', createProduct)
router.post('/cart/add', addToCart)

router.put('/edit/:id', editProduct)
router.put('/cart/decrease/:productId', decreaseProductQuantityInCart)

router.delete('/delete/:id', deleteProduct)
router.delete('/cart/remove/:productId', removeProductFromCart)

export default router