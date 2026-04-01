import { useState } from "react"
import {users} from "../data/users"
import { useNavigate } from "react-router-dom";

const SignIn = ({onLogin}) => {
    //입력 데이터를 객체로 통합
    const [loginData, setLoginData] = useState({
        userId:'',
        password: ''
    })

    //로그인 결과 상태(성공, 실패, null)
    const [result, setResult] = useState(null);

    const navigate = useNavigate(); //페이지 이동을 위한 훅

    //통합 핸들러
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(e);

        setLoginData({...loginData, [name]: value})
        setResult(null); //입력시 결과메시지 숨김
    }

    //제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        const {userId, password} = loginData;

        const matched = users.find(
            (user) => user.userId === userId && user.password === password
        )

        if(matched){
            setResult('success');
            onLogin(userId); //App에 로그인 정보 전달
            console.log(`로그인 성공: ID: ${userId}, PW: ${password}`);
            navigate('/') //인덱스 페이지로 이동
        }else{
            setResult('fail')
            console.log(`로그인 실패`);
        }
    }

    return (
        <div className="sign-in">
            <h2>로그인</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="userId"
                        value={loginData.userId}
                        onChange={handleChange}
                        placeholder="ID 입력"
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="PW 입력"
                    />
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
            {/* 로그인 결과 오류 메시지 표시 영역 */}
            {result === 'fail' && (
                <p style={{color: 'red'}}>아이디 또는 비밀번호가 일치하지 않습니다.</p>
            )}
        </div>
    )
}

export default SignIn