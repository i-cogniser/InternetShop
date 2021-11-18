import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';


function Auth(){
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>

            <Card style={{width:600}} className="p-5">
                <h2 className="m-auth">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form d-flex flex-column>
                    <Form.Control className="mt-3" placeholder="Введите ваш Email..."/>
                    <Form.Control className="mt-3" placeholder="Введите ваш Пароль..."/>

                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                        <div>
                            Нет аккаунта?  <NavLink className="ml-2" to={REGISTRATION_ROUTE}>Зарегисетрируйтесь</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунта?  <NavLink className="ml-2" to={LOGIN_ROUTE}>Войдите</NavLink>
                        </div>
                        }
                        <Button  variant={"otline-success"}>
                            {isLogin ? 'Войти' : 'Регистрация'}

                        </Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
}

export default Auth;
