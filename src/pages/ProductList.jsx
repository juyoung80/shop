
import {Link} from 'react-router-dom'
import {products} from '../data/products'

const ProductList = () => {

    return(
        <section className="product-list">
            <h2>상품 목록</h2>
            <table className='table-list'>
                <thead>
                    <tr>
                        <th>상품ID</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                {product.id}
                            </td>
                            <td>
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* {products.map((product) => (
                <div key={product.id}>
                    <h3>
                       <Link to={`/products/${product.id}`}>{product.name}</Link> 
                    </h3>
                    <p>가격: {product.price}원</p>
                    <p>설명: {product.description}</p>
                </div>
            ))} */}
            <div className='btn-add'>
                <Link to="/add-product">
                    <button>상품 등록</button>
                </Link>
            </div>
        </section>
    )
}

export default ProductList