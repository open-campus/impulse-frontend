import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button ,FormGroup,
 
  CustomInput,
  
  FormText,
 
  CardSubtitle} from "reactstrap";
import { NavLink } from "react-router-dom";
import { MenuSinglepage, MenuSinglepageMobile } from "Components/LandingPage/SectionMenu-impulse";
import Headroom from 'react-headroom';
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
import { Colxx } from "Components/CustomBootstrap";
import { injectIntl } from 'react-intl';
import { connect } from "react-redux";
import { loginUser } from "Redux/actions";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      date: new Date()
    };
  }

  onMobileMenuToggle() {
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu() {
    this.props.landingPageMobileMenuClose()
    return true;
  }
  onMenuClick(ref, event) {
    event.preventDefault();
    let scroller;
    if (ref !== "home") {
      scroller = scrollToComponent(this[ref], { align: 'top', offset: 60 });
      scroller.on('end', () => {
        this.headroom.unpin();
        this.props.landingPageMobileMenuClose();
      });
    } else {
      scrollToComponent(this[ref], { align: 'top'});
    }
  }
  onUserLogin() {
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.loginUser(this.state, this.props.history);
    }
  }

  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    return (
<Fragment >
<div >
<div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"} >
<MenuSinglepageMobile onClick={this.onMenuClick} onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuSinglepageMobile>
<div className="main-container">

  <Headroom className="landing-page-nav" ref={(a) => { this.headroom = a; }}>
    <MenuSinglepage onClick={this.onMenuClick} onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuSinglepage>
  </Headroom>
   <div className="px-3 " style={{ backgroundImage: 'url(/assets/img/home5.jpg)' , backgroundSize:'cover',height:'auto',width:'100%',paddingTop:'70px'}}>
      


      
     
          <div className="container pt-0" style={{marginTop: '100px'}}>
            <Row className="h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card pt-0 mb-4" style={{background:'transparent'}}>
                  <div className="position-relative px-3  text-center " style={{background:"transparent",backgroundSize:'cover',paddingTop:'10%'}}>
                    <p className="white h2">MOTIVATING A RESEARCH CULTURE</p>
                    <p className="white mb-0" >
                      Log in to your OCIN account
                      <br />
                      If you are not a member, please{" "}
                      <NavLink to={`/register`} className="white">
                        register
                      </NavLink>
                      .
                    </p>
                  </div>
                  <div className="form-side pt-0  mt-2 mb-3 " style={{background:'white',borderRadius:'10px'}}>
                    <NavLink to={`/`} className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">
                      <h2>Login</h2>
                    </CardTitle>
                    <Form>
                   
                      <Label className="form-group has-float-label mb-4">
                        <Input type="email" defaultValue={this.state.email} />
                        <IntlMessages id="user.email" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input type="password" />
                        <IntlMessages
                          id="user.password"
                          defaultValue={this.state.password}
                        />
                      </Label>
                      <div className="d-flex justify-content-between align-items-center">
                        <NavLink to={`/forgot-password`}>
                          <IntlMessages id="user.forgot-password-question" />
                        </NavLink>
                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                          onClick={() => this.onUserLogin()}
                        >
                          <IntlMessages id="user.login-button" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>

          </div>
   </div>
  
</div>
<Row className="col-12 px-0 mx-0 mt-0" >
          <div className="card navbar-bottom navbar-fixed col-12" style={{backgroundColor: "lightskyblue"}}>
             <div className="card-body text-center">
                <span className="h6 font-weight-blold " style={{color:'#ffffff'}}>@ {this.state.date.getFullYear() } Impulse Limited All right Reserved.</span>
             </div>
          </div>
        </Row>
</div>

</Fragment>
        
    );
  }
}
const mapStateToProps = ({ authUser,landingPage }) => {
  const { user, loading } = authUser;
  const { isMobileMenuOpen } = landingPage;
  return { user, loading ,isMobileMenuOpen};
};

export default connect(
  mapStateToProps,
  {
    loginUser,
    landingPageMobileMenuToggle, 
  landingPageMobileMenuClose 
  }
)(injectIntl(LoginLayout));
