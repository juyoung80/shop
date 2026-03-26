import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

    //통합 객체 선언
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: ''
    })

    //페이지 이동을 위한 훅
    const navigate = useNavigate()

    //입력값 변경
    const handleChange = (e) => {
        console.log(e);
        const { name, value } =e.target

        setFormData({
            ...formData,
            [name]: value //변경된 값만 업데이트
        })
    }

    // 폼제출
    const handleSubmit = (e) => {
        e.preventDefault() //새로고침 방지        

        //입력값 검증
        if(!formData.name.trim() || !formData.price.trim() ||
        !formData.description.trim()){
            alert('모든 필드를 입력해주세요')
            return; //즉시종료
        }
       

        //가격검증
        if(isNaN(formData.price) || formData.price <=0){
            alert('모든 필드를 입력해주세요')
            return; //즉시종료
        }
        console.log("상품추가:", formData);
        alert('상품이 등록되었습니다')

        //상품 목록 페이지로 이동
        navigate('/products')
    }
    

    return (
        <div className="add-porduct">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명: </label>
                    <input 
                        type="text" 
                        placeholder="상품명을 입력하세요"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">가격: </label>
                    <input 
                        type="number" 
                        placeholder="가격을 입력하세요"
                        min={1}
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">설명: </label>
                    <textarea 
                        placeholder="상품 설명을 입력하세요"
                        rows={5}
                        cols={30}
                        min={1}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button type="submit">등록</button>
                    
                </div>
            </form>
        </div>
    )
}

export default AddProduct