import arrowRight from "../imgs/arrow-right.svg"

const SectionC = () => {
    return (
        <div className="container">
                <section id="section-c" className='section'>
                    <div className="card card1">
                        {/* <img src={briefCase} alt="briefCase" /> */}
                        <i class="icofont-briefcase-2"></i>
                        <h3>Business Organization.</h3>
                        <a href="/business">MORE <img src={arrowRight} alt="" /></a>
                    </div>

                    <div className="card card2">
                        <h3>Employment Law.</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. reprehenderit nostrum.</p>
                        <a href="/employement">MORE <img src={arrowRight} alt="" /></a>
                    </div>


                    <div className="card card3">
                        {/* <img src={bank} alt="bank" /> */}
                        <i class="icofont-bank-alt"></i>
                        <h3>Banking and Finance Law.</h3>
                        <a href="/banking">MORE <img src={arrowRight} alt="" /></a>
                    </div>
                </section>
            </div>
    )
}

export default SectionC;