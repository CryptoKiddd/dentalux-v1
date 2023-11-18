import fb from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import { Link } from 'react-router-dom'
import './footer.css'
export const Footer =()=>{
    return(
        <div className='footer'>
            <div className='footer-links'>
            <h4>სწრაფი ლინკები</h4>
                <Link  className='f-link' to={'/blog'}>ბლოგი</Link>
                <Link className='f-link' to={'/works'}>ნამუშევრები</Link>
                <Link className='f-link' to={'/dentists'}>ექიმები</Link>
                <Link className='f-link'  to={'/about'}>ჩვენს შესახებ</Link>
                <Link className='f-link' to={'/'}>მთავარი</Link>
            </div>
            <div className='footer-media-links'>
                <h4>დაგვიკავშირდით</h4>
                <a target='_blank' href='https://www.facebook.com/ltdDentaLux/?locale=ka_GE'>
                   Facebook <img src={fb}/>
                </a>
                <a target='_blank' href='https://www.instagram.com/dentalux.ge/?fbclid=IwAR080ZS5TbD51h3EAPbBd6pWBQlcBr9_MDg2Bb0Yyy5qRBXjrk9kKk_M-3s'>
                   Instagram <img src={insta}/>
                </a>
                <span>ზურაბ გორგილაძის 69</span>
                <span>ფარნავაზ მეფის 140</span>
            </div>
            <div className='map' >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6332889240334!2d41.62471278820629!3d41.645712117358265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787e0c7d56433%3A0x6d5a8976a40bb2f!2z4YOS4YOd4YOg4YOS4YOY4YOa4YOQ4YOr4YOU!5e0!3m2!1ska!2sge!4v1700273703820!5m2!1ska!2sge" width="300" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            
        </div>
    )
}