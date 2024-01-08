
import { works } from "../../constants"
import tooth from '../../assets/tooth.png'
import tooth2 from '../../assets/tooth2.png'

import './Works.css'

export const Works = () => {
    return (
        <div className='works-container'>
            <div className="works-wrapper">
                {
                    works.map((work, idx) => {
                        return (

                            <div key={idx} className="works-card">
                                <div className="work-img">
                                    <img src={work.img} alt={work.name} />

                                </div>
                                <div className='work-info'>
                                    <p className='workname' >{work.name}</p>
                                    <p className='workby'>სტომატოლოგი - {work.doctor}</p>
                                 </div>



                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

