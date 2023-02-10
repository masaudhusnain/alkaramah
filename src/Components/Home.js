import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <div className="jumbotron text-center">
  <h1>alkaramah architects & interior designers</h1> 
  <p>We specialize in construction related matters</p> 
  <form className="form-inline">
    <div className="input-group">
      <input type="email" className="form-control" size="50" placeholder="Email Address" required/>
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>



<div className="container-fluid">
  <div className="row">
  <div className="col-sm-4">
    <img src="/images/logo.jpg" alt="..." style={{ width: '25rem'}}/>
    </div>
    <div className="col-sm-9">
      <h2><i>About Company Page</i></h2>
      <h4><i>I Muhammad Maruf Chaudhary set the foundation of alkaramah architects & interior designers</i></h4>      
      <p><i>I did my graduation from National College of Arts Lahore</i></p>
      {/*<button className="btn btn-default btn-lg">Get in Touch</button>*/}
    </div>
    
  </div>
</div>

{/*<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
    <img src="/images/test.jpg" alt="..."/>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2>
      <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>      
      <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
    </div>
  </div>
  </div>*/}


<div className="container-fluid text-center">
  <h2><i>SERVICES</i></h2>
  <h4><i>What we offer</i></h4>
  <br></br>
  <div className="row">
    <div className="col-sm-4">
    <img src="/images/ArchitecturalServices.jpg" alt="..." style={{ width: '25rem' }}/>
      <h4>Architectural Services</h4>
    </div>
    <div className="col-sm-4 ">
    <img src="/images/InteriorDesigning.jpg" alt="..." style={{ width: '25rem' }}/>
      <h4>Interior Design Services</h4>
    </div>
    <div className="col-sm-4">
    <img src="/images/Construction.jpg" alt="..." style={{ width: '25rem' }}/>
      <h4>Construction Services</h4>
    </div>
  </div>
  
  <div className="row">
    <div className="col-sm-4">
    <img src="/images/WallPaper.jpg" alt="..." style={{ width: '25rem' }}/>
      <h4>Wall Papers</h4>
    </div>
    {/*<div className="col-sm-4">
    <img src="/images/test.jpg" alt="..." style={{ width: '25rem' }}/>
      <h4>Window Blinds</h4>
</div>*/}
    <div className="col-sm-4">
      <img src="/images/WoodenFlooring.jpg" alt="..." style={{ width: '25rem' }}/>
      <h4 style={{ color: '#303030' }} >Wooden Flooring</h4>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
