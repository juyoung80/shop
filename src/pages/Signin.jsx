import { useState } from 'react'
import { users } from '../data/users'
import { useNavigate } from 'react-router-dom'


const Signin = ({ onLogin }) => {
  // 입력 데이터를 객체로 통합
  const [loginData, setLoginData] = useState({
    userId: '',
    password: ''
  })

  //로그인 결과 상태(성공, 실패, null)
  const [loginResult, setLoginResult] = useState(null)


  const navigate = useNavigate();


  // 통합 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;  
    console.log(e) 

    setLoginData({...loginData, [name]: value})
    setLoginResult(null) // 입력시 결과메세지 숨김
  }

  //제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const { userId, password } = loginData;   

    const matched = users.find(
      (user) => user.userId === userId && user.password === password
    )

    if(matched){
      setLoginResult('success')
      onLogin(userId) // 로그인 성공시 App 컴포넌트의 로그인 핸들러 호출
      console.log(`로그인 성공 : ID : ${userId}, PW: ${password}`);

      navigate('/') // 로그인 성공시 메인페이지로 이동
    } else {
      setLoginResult('fail') 
      console.log(`로그인 실패 : ID : ${userId}, PW: ${password}`);
    }

    
    
  }   

  return (
    <div className="sign-in">    
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="userId"   
              placeholder="ID 입력"
              value={loginData.userId}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
        </form>

        {/* 로그인 결과 메세지 표시 */}
        {/* 페이지 이동으로 인해 주석처리 
        {loginResult === 'success' && (
          <p style={{color: 'green'}}>환영합니다! {loginData.userId}님</p>
        )} */}
        {loginResult === 'fail' && (
          <p style={{color: 'red'}}>아이디와 비밀번호가 일치하지 않습니다.</p>
        )}

    </div>
  )
}

export default Signin
