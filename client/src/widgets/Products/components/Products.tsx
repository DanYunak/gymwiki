import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Product, ProductType } from '../../../entities/Product'
import { useAppDispatch } from '../../../redux/store'
import { actions } from '../model/productsActions'
import { getAllProducts } from '../model/productsSelectors'
import './Products.scss'

export const Products: FC = () => {
    const products = useSelector(getAllProducts)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.getAllProducts())
    }, [])

    return (
        <div className='products'>
            <div className='products__list'>
                {products
                    .map((product: ProductType) => (
                        <Product key={product._id} product={product} />
                    ))}
            </div>
        </div>
    )
}