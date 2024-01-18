import './header.css';
import BotonAdopta from "C:/Users/cris_/Documents/FACTORIA-F5/adopta-amor/Proyecto-final/src/components/header/botonAdopta/BotonAdopta.jsx"
import BotonDona from "C:/Users/cris_/Documents/FACTORIA-F5/adopta-amor/Proyecto-final/src/components/header/botonDona/BotonDona.jsx"


const Header = () => {
  return (
    <>

    <div className='container-header'>
      <div className='botones-header'>
      <BotonAdopta />
      <BotonDona />
      </div>
    </div>

    {/* <div className="video-container">
      <video autoPlay loop muted>
        <source src="https://vod-progressive.akamaized.net/exp=1705516934~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4175%2F21%2F545878775%2F2588620688.mp4~hmac=b4d4e574044748547ee329aeb53dd7cf35afeaf0d0d46e6aaab08a5c1388cde9/vimeo-prod-skyfire-std-us/01/4175/21/545878775/2588620688.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div> */}
    </>

  )
}

export default Header