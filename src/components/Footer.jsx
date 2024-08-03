import facebook from "../assets/icons8-facebook-32.png"
import instagram from "../assets/icons8-instagram-32.png"
import twitter from "../assets/icons8-twitter-32.png"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-img">
        <img src={facebook} alt='facebook-img' style={{width:"50px"}}/>
        <img src={instagram} alt="insta-img"  style={{width:"50px"}}/>
        <img src={twitter} alt="twitter-img"  style={{width:"50px"}}/>
        </div>
        <p>All rights reserved 2024.</p>
    </div>

  )
}

export default Footer