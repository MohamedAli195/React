import homeStyle from './Home.module.css'
import React from 'react'
import homeImage from '../../images/download1.png';
export default function Home() {
  return (
    <div className={`${homeStyle.homepage}`}>
      <div className='container'>
        <div className="row">
          <div className="col-md-6"><img className={`${homeStyle.homeImg}`} src={homeImage} alt=''  /></div>
          <div className="col-md-6">
            <h2 className={`${homeStyle.homeH2}`} >31th octobar 2023</h2>
            <h5 className={`${homeStyle.homeH5}`}>Halloween Party</h5>
            <p className={`${homeStyle.homeP}`}>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
            <div className={`${homeStyle.homeButton} btn `}>explore more</div>
            </div>
        </div>

      </div>
    </div>
  )
}
