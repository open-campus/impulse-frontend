import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button ,FormGroup,
 
  CustomInput,
  CardBody,
  FormText,
 
  CardSubtitle} from "reactstrap";
  
import Select from "react-select";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
import CustomSelectInput from "Components/CustomSelectInput";
import DatePicker from "react-datepicker";
import moment from "moment";
import { NavLink } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';
import { MenuSinglepage, MenuSinglepageMobile } from "Components/LandingPage/SectionMenu-impulse";
import Headroom from 'react-headroom';
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
import { Colxx } from "Components/CustomBootstrap";
import { injectIntl } from 'react-intl';
import { connect } from "react-redux";

const selectData = [
  { label: "Basic Membership", value: "basic", key: 0 },
  { label: "Advance Membership", value: "advance", key: 1 },
  { label: "Co-operate membership", value: "cooperate",key: 2}
];

const quillModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
   
    ["clean"]
  ]
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link"
];

const selectDataMulti = [
  { label: "Medical Laboratory", value: "value", key: 0 },
  { label: "Advance Technology", value: "value1", key: 1 },
  { label: "Co-operate Business", value: "value2",key: 2},
  { label: "Fishery", value: "value3",key: 3},
  { label: "Art in Medicine", value: "value4",key: 4}
];

const selectDataSex = [
  { label: "Male", value: "male", key: 0 },
  { label: "Female", value: "female", key: 1 }
];
class CommunityLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      date: new Date(),
      selectedOptions: [],
      selectedOption: "",
      filterInfo:"",
      textQuillBubble: "",
      textQuillStandart: ""
    };
    this.handleChangeQuillBubble = this.handleChangeQuillBubble.bind(this);
    this.handleChangeQuillStandart = this.handleChangeQuillStandart.bind(this);
  }
  
  handleChangeQuillStandart(textQuillStandart) {
    this.setState({ textQuillStandart });
  }

  handleChangeQuillBubble(textQuillBubble) {
    this.setState({ textQuillBubble });
  }

  handleChange = selectedOption => {
     var myInfoContainer= document.getElementById('myInfoContainer');
    this.setState({ selectedOption, filterInfo : selectedOption.value});
     if(selectedOption.value === "basic"){
      myInfoContainer.setAttribute("class","d-none");
       myInfoContainer.setAttribute("class"," ");
       document.getElementById('advance').setAttribute("class","d-none");
       document.getElementById('cooperate').setAttribute("class","d-none");
       document.getElementById('basic').setAttribute("class"," animated swing");
     }else if( selectedOption.value === "advance"){
      myInfoContainer.setAttribute("class","d-none");
      myInfoContainer.setAttribute("class","");
      document.getElementById('advance').setAttribute("class"," animated swing");
      document.getElementById('cooperate').setAttribute("class","d-none");
      document.getElementById('basic').setAttribute("class","d-none");
     }else if (selectedOption.value === 'cooperate'){
      myInfoContainer.setAttribute("class","d-none");
      myInfoContainer.setAttribute("class","");
      document.getElementById('advance').setAttribute("class","d-none");
      document.getElementById('cooperate').setAttribute("class"," animated swing");
      document.getElementById('basic').setAttribute("class","d-none");
     }
  };

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
  handleChangeMulti = selectedOptions => {
    this.setState({ selectedOptions });
  };
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
   <div className="px-1 " style={{  backgroundSize:'cover',height:'auto',width:'100%',paddingTop:'10px',paddingBottom:'10px'}}>
      


      
     
          <div className="container pt-0" style={{marginTop: '100px'}}>
            <Row className="h-100 px-1">
              <div className="px-2 card col-12 col-md-10 col-sm-12 col-xs-12 col-lg-8 offset-md-1 offset-lg-2">
                 <div className="card-body px-1">
                 <Card className="px-1 py-1">
              <CardBody className="px-1 py-1">
                <CardTitle className="text-center">
                  <b>Impulse Membership Form</b>
                </CardTitle>

                <Form>

                <div className="form-group ">
                  <h6>Choose Membership type</h6>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                      onChange={this.handleChange}
                      options={selectData}
                    />
                   
                  </div>
                  <div className="d-none" id="myInfoContainer">
                    <div id="basic" className="d-none">
                    <div className="alert alert-info" >
                         <h4 className="text-center">Basic Membership</h4>
                         <p>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi 
                         </p>
                      </div>

                      <div className="mb-3 ">
                  <h6>Country</h6>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                      onChange={this.handleChange}
                      options={selectData}
                    />
                   
                  </div>
                   
                  <div className="  mb-3">
                  <h6>State</h6>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select rounded-pill"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                      onChange={this.handleChange}
                      options={selectData}
                    />
                   
                  </div>
                  <FormGroup>
                        <Label for="examplePasswordGrid">
                          City
                        </Label>
                        <Input
                          type="text"
                          name="examplePasswordGrid"
                          id="examplePasswordGrid"
                          placeholder="Enter your City"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="examplePasswordGrid">
                          Profession
                        </Label>
                        <Input
                          type="text"
                          name="examplePasswordGrid"
                          id="examplePasswordGrid"
                          placeholder=" profession"
                        />
                      </FormGroup>
                      <FormGroup>
                      <label>
                     Choose 5 topics your are most Interested in
                    </label>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      isMulti
                      name="topics"
                      value={this.state.selectedOptions}
                      onChange={this.handleChangeMulti}
                      options={selectDataMulti}
                    />
                      </FormGroup>
                      
                    </div>
                     
                      <div id="advance" className="d-none">
                      <div className="alert alert-info">
                         <h4 className="text-center">Advance Membership</h4>
                         <p>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna 
                         </p>
                      </div>
                      <FormGroup>
                        <Label for="examplePasswordGrid">
                         Specify Your Fiels of Study
                        </Label>
                        <Input
                          type="text"
                          name="examplePasswordGrid"
                          id="examplePasswordGrid"
                          placeholder=" profession"
                        />
                      </FormGroup>
                      <div className="  mb-3">
                  <h6>Gender</h6>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select rounded-pill"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                     
                      options={selectDataSex}
                    />
                  <FormGroup className="mb-3 mt-3">
                    <label>Tell us briefly about your research skills</label>
                  <ReactQuill
                  theme="bubble"
                  value={this.state.textQuillBubble}
                  onChange={this.handleChangeQuillBubble}
                />
                  </FormGroup>
                   
                  </div>
                      <div className="mb-3 ">
                  <h6>Country</h6>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                      onChange={this.handleChange}
                      options={selectData}
                    />
                   
                  </div>
                   
                  <div className="  mb-3">
                  <h6>State</h6>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select rounded-pill"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                      onChange={this.handleChange}
                      options={selectData}
                    />
                   
                  </div>
                  <FormGroup>
                        <Label for="examplePasswordGrid">
                          City
                        </Label>
                        <Input
                          type="text"
                          name="examplePasswordGrid"
                          id="examplePasswordGrid"
                          placeholder="Enter your City"
                        />
                      </FormGroup>

                    

                      <FormGroup>
                      <label>
                     Choose 5 topics your are most Interested in
                    </label>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      isMulti
                      name="topics"
                      value={this.state.selectedOptions}
                      onChange={this.handleChangeMulti}
                      options={selectDataMulti}
                    />
                      </FormGroup>
                      </div>
                      
                      <div id="cooperate"  className="d-none">
                      <div className="alert alert-info" >
                         <h4 className="text-center">Co-operate Membership</h4>
                         <p>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit
                         </p>
                      </div>
                         
                      
                    </div>
                     
                     

                      
                  </div>
                 
                
                  

                  

                  <Button color="primary">
                    <IntlMessages id="forms.submit" />
                  </Button>
                </Form>
              </CardBody>
            </Card>

                 </div>
              </div>
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
    
    landingPageMobileMenuToggle, 
  landingPageMobileMenuClose 
  }
)(injectIntl(CommunityLayout));
