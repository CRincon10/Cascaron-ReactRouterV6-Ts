import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
  } from "react-router-dom";

import logo from "../logo.svg";


export const Navigation = () => {
    return (
        <BrowserRouter>
            {/* <Routes>
                <Route path="/" element={<Home />} />
            </Routes> */}

            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ( {isActive} ) => isActive ? 'nav-active' : ''  }>Home</NavLink>
                        </li>
                    
                        <li>
                            <NavLink to="/about" className={ ( {isActive} ) => isActive ? 'nav-active' : ''  }>About</NavLink>
                        </li>
                    
                        <li>
                            <NavLink to="/users" className={ ( {isActive} ) => isActive ? 'nav-active' : ''  }>Users</NavLink>
                        </li>
                    </ul>

                </nav>

                <Routes>
                    <Route path="about" element={ <h1>About Page</h1> }  ></Route>
                    <Route path="users" element={ <h1>Users Page</h1> }  ></Route>
                    <Route path="/home" element={ <h1>Home Page</h1> }  ></Route>
                    <Route path="/*" element={ <Navigate to="/home" replace /> }  ></Route>   {/*cualquier otra dirección va a redireccionar al home y el replace para que no pueda regresar a la pagina anterior donde se encontraba*/}   
                </Routes>



            </div>
        
        
        </BrowserRouter>
    )
}
