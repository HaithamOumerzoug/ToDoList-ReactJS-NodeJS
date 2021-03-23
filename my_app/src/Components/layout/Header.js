import React from 'react'

const Header=props=>{
    const {branding}=props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a 
                href="https://github.com/HaithamOumerzoug/ToDoList-ReactJS-NodeJS" 
                className="nav-link">GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
Header.defaultProps = {
    branding: 'MyApp'
  };
  

export default Header;
