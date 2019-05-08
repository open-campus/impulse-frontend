import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { MenuSinglepage, MenuSinglepageMobile } from "Components/LandingPage/SectionMenu-impulse";
import { Colxx } from "Components/CustomBootstrap";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
import { registerUser } from "Redux/actions";

class RegisterLayout extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      institution: "",
      title:"",
      password_confirm: "",
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
  onUserRegister() {
    if (this.state.email !== "" && this.state.password !== "" && this.state.password_confirm !== "" && 
    this.state.title !== ""  && this.state.institution !== "" ) {
       this.props.registerUser(this.state, this.props.history);
      this.props.history.push("/");
    }
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
   <div className="px-3 " style={{ backgroundImage: 'url(/assets/img/home5.jpg)' , backgroundSize:'cover',height:'auto','width':'100%'}}>
      <div style={{marginTop:'100px'}}>
     

      <div className="container pt-0">
            <Row className="h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto pt-0">
                <Card className="auth-card pt-0 " style={{background:'transparent'}}>
                    <div className="position-relative px-3  text-center " style={{background:"transparent",backgroundSize:'cover',paddingTop:'20%'}}>
                    <p className="text-white h2 font-weight-bolder">JOIN IMPULSE NOW</p>
                    <p className="white mb-0">
                      Please use this form to Create an account with Impulse. <br />
                      If you are a member, please{" "}
                      <NavLink to={`/login`} className="white">
                        <span className="btn btn-sm btn-primary btn-round">login</span>
                      </NavLink>
                      
                    </p>
                  </div>
                  <div className="form-side pt-1 pb-2 mt-2 mb-3 " style={{background:'white',borderRadius:'10px'}}>
                    <NavLink to={`/`} className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">
                      <IntlMessages id="user.register" />
                    </CardTitle>
                    <Form className="pt-0">
                      <Label className="form-group has-float-label mb-4">
                        <Input type="name" defaultValue={this.state.name} />
                        <IntlMessages id="user.fullname" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input type="email" defaultValue={this.state.email} />
                        <IntlMessages id="user.email" />
                      </Label>

                      <Label className="form-group has-float-label mb-4">
                        <Input type="text" defaultValue={this.state.institution} />
                        <IntlMessages id="user.institution" />
                      </Label>

                      <Label className="form-group has-float-label mb-4">
                        <Input type="text"  defaultValue={this.state.title}/>
                        <IntlMessages id="user.job-title" />
                      </Label>

                      <Label className="form-group has-float-label mb-4">
                        <Input type="password" />
                        <IntlMessages
                          id="user.password"
                          defaultValue={this.state.password}
                        />
                      </Label>

                      <Label className="form-group has-float-label mb-4">
                        <Input  />
                        <IntlMessages
                          id="user.password-confirm"
                          defaultValue={this.state.password_confirm}
                        />
                      </Label>
                      
                      <div className="d-flex justify-content-end align-items-center">
                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                          onClick={() => this.onUserRegister()}
                        >
                          <IntlMessages id="user.register-button" />
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
    registerUser,
    landingPageMobileMenuToggle, 
  landingPageMobileMenuClose 
  }
)(injectIntl(RegisterLayout));
