import mainImage from '../assets/hero.png';

const Main = () => {

    return(
        <main className="main">
            <h1>컴퓨터 주변 기기 판매</h1>
            <section>
                <p>최신 컴퓨터 주변 기기를 만들어보세요!</p>
                <div>
                    <img src={mainImage} alt="" />
                </div>
    
            </section>
        </main>
    )
}

export default Main