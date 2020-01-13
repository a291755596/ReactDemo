import style from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWapper = style.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = style.a.attrs({
    href: '/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:56px;
    width:100px;
    background:url(${logoPic});
    background-size:contain; 
`

export const Nav = style.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`

export const NavItem = style.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }

    &.active{
        color:#ea6f5a
    }
`

export const NavSearch = style.input.attrs({
    placeholder: '搜索'
})`

    width:160px;
    height:38px;
    border:none;
    outline:none;
    box-sizing:border-box
    border-radius:19px;
    margin-left:20px;
    background:green;
    margin-top:9px;
    padding:0 20px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
`

export const Addition = style.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = style.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }

    &.writing{
        color:#fff;
        background:#ec6149
    }
`

