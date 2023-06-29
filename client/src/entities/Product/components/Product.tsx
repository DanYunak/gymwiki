import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { ProductType } from '../model/types'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './Product.scss'

type PropsType = {
    product: ProductType
}

export const Product: FC<PropsType> = ({ product }) => {
    const { name, category, img, price, description } = product

    const [isHovered, setIsHovered] = useState(false)
    const [isHoveredWish, setIsHoveredWish] = useState(false)
    const [productQuantity, setProductQuantity] = useState(1)

    const handleMouseEnterProduct = () => {
        setIsHovered(true)
    }

    const handleMouseLeaveProduct = () => {
        setIsHovered(false)
    }

    const handleMouseEnterWish = () => {
        setIsHoveredWish(true)
    }

    const handleMouseLeaveWish = () => {
        setIsHoveredWish(false)
    }

    const productQuantityIncrease = () => {
        setProductQuantity(productQuantity + 1)
    }

    const productQuantityDecrease = () => {
        if (productQuantity !== 1) {
            setProductQuantity(productQuantity - 1)
        } else {
            return
        }
    }

    return (
        <div className='product' onMouseEnter={handleMouseEnterProduct} onMouseLeave={handleMouseLeaveProduct}>
            <div className='product__img'>
                <img src={img} alt='product img' width='125' height='150' />
            </div>
            {isHovered &&
                <div className='wish__item' onMouseEnter={handleMouseEnterWish} onMouseLeave={handleMouseLeaveWish}>
                    {!isHoveredWish ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </div>
            }
            <div className='product__name'>{name}</div>
            <div className='product__description'>{description}</div>
            <div className='product__price'>{price} $</div>
            {isHovered &&
                <div className='product__buy'>
                    <div className='product__quantity'>
                        <span onClick={productQuantityDecrease}>-</span>
                        <div>{productQuantity}</div>
                        <span onClick={productQuantityIncrease}>+</span>
                    </div>
                    <Button variant='contained' size='large' startIcon={<ShoppingCartIcon />}>Add to cart</Button>
                </div>
            }
        </div>
    )
}