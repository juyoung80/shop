import { useParams } from "react-router-dom"
import { products } from "../data/products"

const ProductInfo = () => {
    //URL 파라미터에서 id 값을 추출
    const { id } = useParams()

    //id로 데이터 검색 - find()
    //products/1 -> "1", 정수로 형변환: parseInt(문자), Number()
    const product = products.find((p) => p.id === parseInt(id))
    console.log("검색한 상품:", product)

    return(
        <section className="product-info">
            <h1>상품 정보</h1>
             <div className="product-details">
                <p>상품 ID: {id}</p>
                <p>상품명: {product.name}</p>
                <p>상품 가격: {product.price}</p>
                <p>상품 설명: {product.description}</p>
            </div>
        </section>
    )
}

export default ProductInfo