import React from 'react'
import LogoSvg from './LogoSvg'

function Footer() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 d-flex mr-auto align-items-start">
                    <LogoSvg  />
                    
                    <h5 className="font-weight-bold">
                    Build your Developer Portfolio and climb the engineering career ladder.
                    </h5>
                    
                </div>
                <div className="col">
                    <div className="row justify-content-end">
                    <div className="col-2">
                    <ul className="list-unstyled">
                        <li>Search</li>
                        <li>Articles</li>
                        <li>Talks</li>
                        <li>Podcasts</li>
                        <li>Topics</li>
                        <li>Machine</li>
                    </ul>
                </div>
                <div className="col-2">
                    <ul className="list-unstyled"><li>Pricing</li>
                        <li>Store</li>
                        <li>support@support.io</li></ul>
                
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
