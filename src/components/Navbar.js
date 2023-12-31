import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const [themeColor, setThemeColor] = useState("#563D73");
    const customTheme = (event) => {
        setThemeColor(event.target.value);
        document.body.style.backgroundColor = themeColor;
        document.body.style.color = "white";
    }

    const toggleStyle = {
        
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">{props.aboutText}</a>
                        </li>
                    </ul>
                </div>
                <input type="color" className="form-control form-control-color me-5" id="colorInput" value={themeColor} title="Choose your color" onChange={customTheme} />
                <div className="form-check form-switch">
                    <input style={toggleStyle} className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Switch Mode</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About text here',
// }