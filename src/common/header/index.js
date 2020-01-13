import React, { Component, Fragment } from "react"
import { HeaderWapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
import { FontStyle } from '../../static/iconfont/iconfont'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <FontStyle />
                <HeaderWapper>
                    <Logo />
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载app</NavItem>
                        <NavItem className='right'>登陆</NavItem>
                        <NavItem className='right'>
                            <i className='iconfont iconAa'></i>
                        </NavItem>
                        <NavSearch></NavSearch>
                    </Nav>

                    <Addition>
                        <Button className="writing">写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWapper>
            </Fragment>

        )
    }
}

export default Header;