import arrowRight from "../imgs/arrow-right.svg"

const SectionA = () => {
    return (
        <div className="container">
            <section id="section-a" className='section'>
                <div className="content-a" id="#content-a">
                    <h2 className="content-a-title">If you or your business</h2>
                    <p className="content-a-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                        sed.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nihil. Lorem ipsum dolor sit
                        amet
                        consectetur, adipisicing elit. Doloribus natus adipisci quia atque sunt soluta saepe ea
                        excepturi
                        assumenda voluptatibus similique repellat magni reiciendis, fugiat animi dicta quo veritatis
                        distinctio?</p>
                    <div className='content-a-link'>
                        <a href="/more">MORE INFORMATION </a><img src={arrowRight} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionA;