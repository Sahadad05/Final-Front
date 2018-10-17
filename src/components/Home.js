import React, {Component} from 'react'
import './home.css';
import {Button} from 'antd'
import {Link} from 'react-router-dom'


class Home extends Component {

  render (){
    return (
      <div>
            <div className="home-background">
              <div className="menu">
                          <nav className='buttons'>
                          
                               <Link to={"/login"}><Button className='btnLog'>Iniciar Sesión</Button></Link>
                              <Link to={"/signup"}><Button>Registrarse</Button></Link>
                          </nav>
              </div>
              <div className="info">
              <br/>              
                  <h2>La herramienta para los invitados de tu boda</h2>
              </div>
            </div>
            <footer id="footer"className="uk-section uk-section-secondary">
            </footer>
      </div>
    )
  }
}


export default Home 
