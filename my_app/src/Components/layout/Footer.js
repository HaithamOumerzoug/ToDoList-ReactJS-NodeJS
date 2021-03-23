import React from 'react'

const Footer =(props)=>{
    const branding = props.branding;
    return (
        <div class="card text-center text-white bg-dark mt-5">
            <div class="card-header">
                <a href="/" className="text-decoration-none display-5 font-weight-bold" style={{color:'white'}}>{branding}</a>
            </div>
            <div class="card-body">
                <p class="card-text">Created by <a className="text-decoration-none" href="https://haitham-oumerzoug.com/">Haitham OUMERZOUG</a></p>
            </div>
            <div class="card-footer text-muted">
            <a href="https://github.com/HaithamOumerzoug" class="text-decoration-none text-muted font-weight-bold">GitHub</a>
            </div>
        </div>
    )
}

Footer.defaultProps = {
    branding: 'MyApp'
  };

export default Footer;