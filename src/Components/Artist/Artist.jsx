import React from 'react'
import artistImg from '../../images/download4.png'
import artistStyle from './Artist.module.css'
export default function Artist() {
  return (
    <section className={`${artistStyle.artistSection}`}>
      <h2 className={`${artistStyle.artistMainH2}`}>Our Halloween's Artist</h2>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <div className='row'>
              <div className='col-md-6'>
                <img className={`${artistStyle.artistImg}`} src={artistImg} alt />
              </div>
              <div className='col-md-6'>
                <h2 className={`${artistStyle.artistRowH2}`}>DJ Remerson Huke</h2>
                <h3 className={`${artistStyle.artistRowH3}`}>Lead DJ On Deadpoll</h3>
                <p className={`${artistStyle.artistP}`}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</p>
                <ul>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-facebook"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-twitter"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-pinterest"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-behance"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='row'>
              <div className='col-md-6'>
                <img className={`${artistStyle.artistImg}`} src={artistImg} alt />
              </div>
              <div className='col-md-6'>
                <h2 className={`${artistStyle.artistRowH2}`}>DJ Remerson Huke</h2>
                <h3 className={`${artistStyle.artistRowH3}`}>Lead DJ On Deadpoll</h3>
                <p className={`${artistStyle.artistP}`}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</p>
                <ul>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-facebook"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-twitter"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-pinterest"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-behance"></i></a></li>
                  <li className={`${artistStyle.artistLi}`}><a href="#" className={`${artistStyle.artistA}`}><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
