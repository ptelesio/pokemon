import React, { Fragment,useEffect } from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { history } from "./../../helpers";
import LANGUAGE from "../../constants/default";
import LANGUAGE_WEB from "../../constants/language";
import { useDispatch,useSelector } from "react-redux";
import {
  setLanguage,
} from "../../actions/home";
import './homeHead.css';

const HomeHead = () => {

  const { language } = useSelector(
    (state) => state.home
  );

  const dispatch = useDispatch();

  const handleChangeLanguage = (language) => {
    localStorage.setItem(LANGUAGE.LANGUAGE,language);
    dispatch(setLanguage(language));
  }

  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              {history.location.pathname === "/" ? (
                <Nav.Link>{LANGUAGE_WEB[language]?.home}</Nav.Link>
              ) : (
                <Link to={`/`}>{LANGUAGE_WEB[language]?.home}</Link>
              )}
            </NavItem>
            {language && <NavDropdown title={`Language : ${language}`} id="basic-nav-dropdown">
              <NavDropdown.Item disabled={language===LANGUAGE.SPANISH} onClick={()=>{handleChangeLanguage(LANGUAGE.SPANISH)}}>{LANGUAGE_WEB[language]?.spanish}</NavDropdown.Item>
              <NavDropdown.Item disabled={language===LANGUAGE.ENGLISH} onClick={()=>{handleChangeLanguage(LANGUAGE.ENGLISH)}}>{LANGUAGE_WEB[language]?.english}</NavDropdown.Item>
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default HomeHead;
