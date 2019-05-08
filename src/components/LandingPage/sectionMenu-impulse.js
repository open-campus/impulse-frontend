import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import {
    Alert,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";

export class MenuMultipage extends Component {
  openMobileMenu(event) {
    event.preventDefault();
    this.props.onMobileMenuToggle();
  }
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-between">
        <NavLink className="navbar-logo pull-left" to="/multipage-home">
          <span className="white" />
          <span className="dark" />
        </NavLink>
        <Nav className="navbar-nav d-none d-lg-flex flex-row">
          <NavItem className={window.location.pathname === '/features' ? 'active' : ''}>
            <NavLink to="/features">
              <IntlMessages id="lp.menu.features" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/contact' || window.location.pathname === '/videos' || window.location.pathname === '/docs' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="lp.menu.learn" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/docs" className="dropdown-item">
                  <IntlMessages id="lp.menu.docs" />
                </NavLink>
                <NavLink to="/videos" className="dropdown-item">
                  <IntlMessages id="lp.menu.videos" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="lp.menu.help" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/prices' ? 'active' : ''}>
            <NavLink to="/prices">
              <IntlMessages id="lp.menu.pricing" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/blog' ? 'active' : ''}>
            <NavLink to="/blog">
              <IntlMessages id="lp.menu.blog" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/auth-login' ? 'active' : ''}>
            <NavLink to="/auth-login">
              <IntlMessages id="lp.menu.signin" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
              to="/auth-register"
            >
              <IntlMessages id="lp.menu.signup" />
            </NavLink>
          </NavItem>
        </Nav>
        <NavLink
          className="mobile-menu-button"
          to="#"
          onClick={(event) => this.openMobileMenu(event)}
        >
          <i className="simple-icon-menu" />
        </NavLink>
      </Container>
    );
  }
}
export class MenuMultipageMobile extends React.Component {
  constructor(props) {
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  componentWillUnmount() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
    this.props.onUnmountingMenu()
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);
    if ((container.contains(e.target) || container === e.target)) {
      return;
    }
    return this.props.onUnmountingMenu()
  }

  render() {
    return (
      <div className="mobile-menu">
        <NavLink className="logo-mobile" to="/multipage-home">
          <span />
        </NavLink>
        <Nav className="navbar-nav">
          <NavItem className={window.location.pathname === '/features' ? 'active' : ''}>
            <NavLink to="/features">
              <IntlMessages id="lp.menu.features" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/contact' || window.location.pathname === '/videos' || window.location.pathname === '/docs' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="lp.menu.learn" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/docs" className="dropdown-item">
                  <IntlMessages id="lp.menu.docs" />
                </NavLink>
                <NavLink to="/videos" className="dropdown-item">
                  <IntlMessages id="lp.menu.videos" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="lp.menu.help" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/prices' ? 'active' : ''}>
            <NavLink to="/prices">
              <IntlMessages id="lp.menu.pricing" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/blog' ? 'active' : ''}>
            <NavLink to="/blog">
              <IntlMessages id="lp.menu.blog" />
            </NavLink>
          </NavItem>

          <NavItem>
            <div className="separator" />
          </NavItem>
          <NavItem className={window.location.pathname === '/auth-login' ? 'active' : ''}>
            <NavLink to="/auth-login">
              <IntlMessages id="lp.menu.signin" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/auth-register' ? 'active' : ''}>
            <NavLink to="/auth-register">
              <IntlMessages id="lp.menu.signup" />
            </NavLink>
          </NavItem>

        </Nav>

      </div>
    );
  }
}
export class MenuSinglepage extends Component {
  openMobileMenu(event) {
    event.preventDefault();
    this.props.onMobileMenuToggle();
  }
  render() {
    return (
      <div className="d-flex align-items-center justify-content-between" 
      style={navStyle}>
        <NavLink
           style={{ color: "#ffffff", borderColor:'#ffffff',fontSize: '30px',fontWeight:'bolder' }}
          to="/impulse-home"
          
        >
          IMPULSE <span style={{ borderLeft: '2px solid white', }} className="pl-2"></span> 
          <span style={{ fontSize:'14px',fontWeight:'bold'}} className="badge-pill badge-primary">Ng</span>
        </NavLink>
        <Nav className="navbar-nav d-none d-lg-flex flex-row">
          <NavItem>
            <NavLink
              to="/impulse-home"
              className="btn btn-outline-semi-light btn-sm"
              onClick={event => {
                this.props.onClick("features", event);
              }}
              style={{ color: "#ffffff", borderColor:'#ffffff' }} >
              OCIN-HOME
              
            </NavLink>
          </NavItem>
          
          <NavItem>
          <div className="user d-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
                
              <DropdownToggle className="" color="empty" style={{paddingTop:'15%'}}>
                <span className="name  btn  btn-round btn-primary">COMMUNITY 
                <span className="glyph-icon simple-icon-arrow-down pl-2" style={{ color:'#ffffff'}}></span> </span>
                
              </DropdownToggle>
              
              <DropdownMenu className="" style={{ position:'absolute'}}>
              <NavLink to="/register">  <DropdownItem > Join our community </DropdownItem></NavLink>
                <DropdownItem divider />
                <NavLink to="/login">  <DropdownItem>
                 Sign In
                </DropdownItem>
                </NavLink> 
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              onClick={event => {
                this.props.onClick("pricing", event);
              }}
              style={{ color: "#ffffff" , borderColor:'#ffffff' }}>
             <span className="btn btn-primary btn-primary-outline btn-round">LEARNING CENTER</span> 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
             className="btn btn-outline-semi-light btn-sm"
              to="#"
              onClick={event => {
                this.props.onClick("blog", event);
              }}
              style={{ color: "#ffffff", borderColor:'#ffffff' }}>
              FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
              to="auth-login"
              style={{ color: "#ffffff" , borderColor:'#ffffff'}}>
              REVIEWS
            </NavLink>
          </NavItem>
        </Nav>
        <NavLink
          className="mobile-menu-button"
          to="#"
          onClick={(event) => this.openMobileMenu(event)}
        style={{ color: "#ffffff", borderColor:'#ffffff' }}>
          <i className="simple-icon-menu" />
        </NavLink>
      </div>
    );
  }
}


export class MenuSinglepageMobile extends React.Component {
  constructor(props) {
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  componentWillUnmount() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
    this.props.onUnmountingMenu()
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);
    if ((container.contains(e.target) || container === e.target)) {
      return;
    }
    return this.props.onUnmountingMenu()
  }
  render() {
    return (
      <div className="mobile-menu" style={{backgroundColor:'lightskyblue',color:'#ffffff'}}>
        
          
        <Nav className="navbar-nav pt-4">
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("features", event) }} style={{color:'#ffffff'}}>
              HOME-OCIN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("reviews", event) }} style={{color:'#ffffff'}}>
              LEARNING CENTER
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("pricing", event) }} style={{color:'#ffffff'}}>
              FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("blog", event) }} style={{color:'#ffffff'}}>
             REVIEWS
            </NavLink>
          </NavItem>
          <NavItem>
            <div className="separator" style={{color:'#ffffff'}}></div>
          </NavItem>

          
          <NavItem>
            <NavLink to="/register" style={{color:'#ffffff'}}>
             Join our community
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" style={{color:'#ffffff'}}>
             Sign In
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

const navStyle ={
    backgroundColor:'lightskyblue',
    width:'100%',
    height:'100px',
    padding:'4px 10px'
}