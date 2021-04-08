import React, { Fragment,useEffect } from "react";
import HomeHead from "./homeHead";
import HomeFooter from "./homeFooter";
import {
  setLanguage,
} from "../../actions/home";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import routes from "../../routes";
import LANGUAGE from "../../constants/default";
import { useDispatch } from "react-redux";
import './homeLayout.css';
import language from "../../constants/language";

const HomeLayout = () => {
  const { home } = routes;

  const dispatch = useDispatch();

  useEffect(() => {
    const language = localStorage.getItem(LANGUAGE.LANGUAGE);
    if(language){
      dispatch(setLanguage(language));
    }else{
      dispatch(setLanguage(LANGUAGE.ENGLISH));
    }
  }, [])

  return (
    <Fragment>
      <HomeHead />
      <Container>
        <Row className={`mt-5 mb-5`}>
          <Col>
            <Switch>
              {home.map((route, idx) => (
                <Route
                  key={`${idx}-${language}`}
                  path={route.path}
                  render={(props) => (
                    <route.component {...props} name={route.name} />
                  )}
                />
              ))}
            </Switch>
          </Col>
        </Row>
      </Container>
      <HomeFooter />
    </Fragment>
  );
};

export default HomeLayout;
