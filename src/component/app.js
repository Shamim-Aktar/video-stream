import React from 'react'
import styled from 'styled-components'
import {borderColor, headerHeight, containerMaxWidth} from "./theme";
//import userAvatar from '../image/avatar.png'
import Watch from './pages/watch'
import Home from './pages/home';
import {Route, Switch,Link } from 'react-router-dom'
import Player from './player';

const AppWrapper = styled.div `
   
`

const Container = styled.div `
    max-width: ${containerMaxWidth}px;
    margin: 0 auto;
`
const Header = styled.div `
      
        height: ${headerHeight}px;
        border-bottom: 1px solid ${borderColor};
`

const Main = styled.div `
    padding: 20px 0;
    
`

const Footer = styled.div `
    border-top: 1px solid ${borderColor};
    padding: 10px 0;
`
const Copyright = styled.p`
    font-size: 12px;
    text-align: center;
`
const HeaderTitle = styled.div `
    font-size: 35px;
    font-weight: 800;
    line-height: ${headerHeight}px;
    flex-grow: 1;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
`
const HeaderUserMenu = styled.div `
    width: 50px;
    display: flex;
    align-items: center;
`
const HeaderWrapper = styled.div `
    display: flex;
    flex-grow:1;
    
`
const HeaderUserAvatar = styled.img `
    border-radius: 50%;
    width: 30px;
    height: 30px;
`

const UserTitle = styled.div `
    font-size: 14px;
    font-weight: 600;
    line-height: ${headerHeight}px;
    padding-right: 10px;
`
export default class App extends React.Component {

    constructor(props) {
        super(props);


      //  this.state = {
         //   store: new Store(this)
        //}
    }

    render() {
        return <div>
            
             <Header>
                <HeaderWrapper>
                    <HeaderTitle>Camera</HeaderTitle>
            
                    <HeaderUserMenu>

                        
                    </HeaderUserMenu>
                </HeaderWrapper>
                <Link to="watch/1">watch</Link>
            </Header>
            <Main>
                <Container>
                <Switch>                            
                        <Route exact path='/' component={Home}/>
                        <Route path='/watch/:id' component={Watch}/>
                        
                    </Switch>
                    {this.props.children}
                </Container>
            </Main>
            <Footer>
                <Container>
                    <Copyright>® 2017 Camera Inc.</Copyright>
                </Container>
            </Footer> 
        </div>
    }

}
//© 2018 GitHub, Inc.