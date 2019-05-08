import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MenuSinglepage, MenuSinglepageMobile } from "Components/LandingPage/SectionMenu-impulse";
import HomeHero from "Components/LandingPage/SectionHeroHome";
import HomeFeatureCarousel from "Components/LandingPage/SectionFeatureCarousel";
import Features from "Components/LandingPage/SectionFeatures";
import Reviews from "Components/LandingPage/SectionReviews";
import Footer from "Components/LandingPage/SectionFooter";
import SectionPricingTable from "Components/LandingPage/SectionPricingTable";
import Blog from "Components/LandingPage/SectionBlog";
import { injectIntl } from 'react-intl';
import { Colxx, Separator } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import Headroom from 'react-headroom';
import ReactAutosuggest from "Components/ReactAutosuggest";
import scrollToComponent from 'react-scroll-to-component';
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import { Row, Card, CardBody, CardTitle,Container,Input,
  Button, } from "reactstrap";

  import {
    getResults,
    getResultsSuccess,
    getResultsError,
    searchResult,
    searchResultPro
  } from "Redux/actions";
import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage,searchResultApp }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen,searchResultApp };
}

const SELECT_DATA = [
  { label: "Year", value: "year", key: 0 },
  { label: "Institution", value: "institution", key: 1 },
  { label: "Author name", value: "author", key: 2 },
  { label: "Topic", value: "topic", key: 3 },
];

const SELECT_DATA_1 = [
  { label: "Year", value: "year", key: 0 },
  { label: "Institution", value: "institution", key: 1 },
  { label: "Author name", value: "author", key: 2 },
  { label: "Topic", value: "topic", key: 3 },
];
class ImpulseHome extends Component {
  

  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.state = {
      searchKey:'',
      searchKey_1:'',
      suggestionValue: "",
      suggestions: [],
      selectedOptions: [],
      selectedOption: "",
      filterKey:"",
      date: new Date(),
      filterKey_1: "",
      selectedOptions_1: [],
      selectedOption_1: "",
    };
  }

  
  componentDidMount() {
    this.props.getResults();
  }

  handleSearchResult(keyword,filterKey = this.state.filterKey) {
    
    this.setState({
      searchKey: keyword,
      suggestionValue: keyword
    })
    if (keyword.length > 0) {
      this.props.searchResult(keyword,filterKey);
    }else {
      this.props.searchResult('',filterKey);
    }
  }

  handleSearchResultOne(keyword,filterKey = this.state.filterKey_1) {
    
    this.setState({
      searchKey_1: keyword,
      suggestionValue: keyword
    })
    if (keyword.length > 0) {
      this.props.searchResultPro(keyword,filterKey);
    }else {
      this.props.searchResultPro('',filterKey);
    }
  }

  onSuggestionChange = (event, { newValue }) => {
    this.setState({
      suggestionValue: newValue
    });
  };

  handleChange = selectedOption => {
     
    this.setState({ selectedOption, filterKey : selectedOption.value});
  };

  handleChangeOne = selectedOption_1 => {
    this.setState({ selectedOption_1, filterKey_1 : selectedOption_1.value });
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
 
  

  render() {
    const {
    allResults,
	  results,
	  error,
	  searchKeyword,
   	loadingResults
    } = this.props.searchResultApp;
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
                <div style={{ height: '1000px',paddingTop: '110px' }}>
               

                <Row className=" pt-1 pb-1">
         

          <Colxx xxs="12">
            <CardTitle className="text-center ">
              <h3 ><span style={{background:'lightskyblue',border:'3px solid lightskyblue',borderRadius:'10px'}} className="px-3 py-2">IMPULSE NEWS</span></h3>
            </CardTitle>
          </Colxx>

          <Colxx xxs="12" className="pl-0 pr-0  ">
            <ReactSiemaCarousel
              perPage={{
                0: 1
              }}
              loop={false}
            >
              <div className="pr-3 pl-3">
                <Card className="flex-row" style={{backgroundColor:'#ffffff',color:'#ffffff !important'}}>
                
                  <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                  
                    <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                    
                      <p className="list-item-heading mb-1 "  style={{color:'#ffffff !important'}}>
                       <h4 style={{color:'#ffffff !important'}}><b>Headline</b></h4>
                       <p style={{color:'#ffffff !important'}}>Blended value human-centered social innovation resist scale and impact issue outcomes...</p>
                      </p>

                      <p className="mb-0 text-muted text-small"><b>Category:</b> Education</p>
                      
                      <div>
                        <span className="badge badge-pill badge-primary mr-1">
                         Read more...
                        </span>
                        <span className="badge badge-pill badge-secondary">
                         Recommend
                        </span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row"  style={{backgroundColor:'#ffffff',color:''}}>
                  

                  <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                    <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                      <p className="list-item-heading mb-1 " >
                      <h4><b>Headline</b></h4>
                        Homemade Cheesecake with Fresh Berries and MintBlended value human-centered 
                        social...
                      </p>

                      <p className="mb-0 text-muted text-small" style={{color:'white'}}><b>Category:</b> Business</p>
                      
                      <div>
                        <span className="badge badge-pill badge-primary mr-1">
                         Read more...
                        </span>
                        <span className="badge badge-pill badge-secondary">
                          Recommend
                        </span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row"  style={{backgroundColor:'#ffffff',color:'#ffffff !important'}}>
                  

                  <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                    <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                      <p className="list-item-heading mb-1 ">
                      <h4><b>Headline</b></h4>
                        Homemade Cheesecake with Fresh Berries and MintBlended value human-centered 
                        social...
                      </p>

                      <p className="mb-0 text-muted text-small"><b>Category:</b> Sport</p>
                      
                      <div>
                        <span className="badge badge-pill badge-primary mr-1">
                         Read more...
                        </span>
                        <span className="badge badge-pill badge-secondary">
                          Recommend
                        </span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row"  style={{backgroundColor:'#ffffff',color:'#ffffff !important'}}>
                  

                  <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                    <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                      <p className="list-item-heading mb-1 ">
                      <h4><b>Headline</b></h4>
                        Homemade Cheesecake with Fresh Berries and MintBlended value human-centered 
                        social...
                      </p>

                      <p className="mb-0 text-muted text-small"><b>Category:</b>Agriculture</p>
                      
                      <div>
                        <span className="badge badge-pill badge-primary mr-1">
                         Read more...
                        </span>
                        <span className="badge badge-pill badge-secondary">
                          Recommend
                        </span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>

              <div className="pr-3 pl-3">
                <Card className="flex-row"  style={{backgroundColor:'#ffffff',color:'#ffffff !important'}}>
                  

                  <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                    <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                      <p className="list-item-heading mb-1 ">
                      <h4><b>Headline</b></h4>
                        Homemade Cheesecake with Fresh Berries and MintBlended value human-centered 
                        social...
                      </p>

                      <p className="mb-0 text-muted text-small"><b>Category:</b> Community Health</p>
                      
                      <div>
                        <span className="badge badge-pill badge-primary mr-1">
                         Read more...
                        </span>
                        <span className="badge badge-pill badge-secondary">
                          Recommend
                        </span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </ReactSiemaCarousel>
          </Colxx>

          
        </Row>

        <Row className=" pt-1 pb-1 card  d-md-none d-sm-block d-block " style={{ backgroundColor:'transparent' }}>
         

         <Colxx xxs="12">
           <CardTitle className="text-center">
             <h3><span style={{background:'lightskyblue',border:'3px solid lightskyblue',borderRadius:'10px'}} className="px-3 py-2">IMPULSE ENGINE</span></h3>
           </CardTitle>
         </Colxx>
            <div className="row px-3">
   

            <div className=" col-6">
             <div className="form-group">
             <Select
                     components={{ Input: CustomSelectInput }}
                     className="react-select"
                     classNamePrefix="react-select"
                     name="selectOne"
                     value={this.state.selectedOption}
                     onChange={this.handleChange}
                     options={SELECT_DATA}
                   />
             </div>
           </div>

           <div className=" col-6">
             <div className="form-group">
             <Select
                     components={{ Input: CustomSelectInput }}
                     className="react-select"
                     classNamePrefix="react-select"
                     name="selectTwo"
                     value={this.state.selectedOption_1}
                     onChange={this.handleChangeOne}
                     options={SELECT_DATA_1}
                   />
             </div>
           </div>

         <div className=" col-6">
             <div className="form-group">
               <input
                 type="text"
                 className="form-control rounded"
                 placeholder="type here to search"
                
                 value={this.state.searchKey}
                 onChange={(e) => this.handleSearchResult(e.target.value,"")}
               />
             </div>
           </div>

           <div className=" col-6">
             <div className="form-group">
               <input
                 type="text"
                 className="form-control rounded"
                 placeholder="type here to search"
                 
                 value={this.state.searchKey_1}
                 onChange={(e) => this.handleSearchResultOne(e.target.value)}
               />
             </div>
           </div>
           </div>

           </Row>

        <Row className=" pt-1 pb-1 card mx-2 d-none d-md-block" style={{ backgroundColor:'transparent' }}>
           

        <CardTitle className="text-center">
             <h3><span style={{background:'lightskyblue',border:'3px solid lightskyblue',borderRadius:'10px'}} className="px-3 py-2">IMPULSE ENGINE</span></h3>
           </CardTitle>
             <div className="row px-3">
    

             <div className=" col-6">
              <div className="form-group">
              <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOption}
                      onChange={this.handleChange}
                      options={SELECT_DATA}
                    />
              </div>
            </div>

            <div className=" col-6">
              <div className="form-group">
              <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOption_1}
                      onChange={this.handleChangeOne}
                      options={SELECT_DATA_1}
                    />
              </div>
            </div>

          <div className=" col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="type here to search"
                 
                  value={this.state.searchKey}
                  onChange={(e) => this.handleSearchResult(e.target.value)}
                />
              </div>
            </div>

            <div className=" col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="type here to search"
                
                  value={this.state.searchKey_1}
                  onChange={(e) => this.handleSearchResultOne(e.target.value)}
                />
              </div>
            </div>
            </div>

            </Row>
            <Row className=" mb-0">
           
              
            <div className="pt-2 pr-4 pl-2 pb-2 d-none d-lg-block mx-3 mt-4" style={scrollStyle}>
                  {  }
                    {loadingResults && results.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="card d-inline-block mx-1 px-2 py-2  "
                         style={{width:'30%'}}>
                           <div className="card-body py-2 px-2">
                           <div><span className="badge-pill badge-primary" >Topic</span><strong style={{whiteSpace:'normal'}}>{item.Topic}</strong> </div>
                           <div><span className=" badge-pill badge-info" >Author</span><strong style={{whiteSpace:'normal'}}> {item.Author} </strong></div>
                           <div><span  className="badge-pill badge-primary" >Institution</span> <strong style={{whiteSpace:'normal'}}>{item.Institution}</strong></div>
                           <div><span  className="badge-pill badge-info" style={{whiteSpace:'normal'}}>Downloads</span> <strong style={{whiteSpace:'normal'}}>{item.num_of_endorsement} users</strong></div>
                           <div style={{whiteSpace:'normal',borderBottom:'1px solid grey'}} className="pb-2"><span  className="badge-pill badge-primary">Abstract->Background</span> <span style={{whiteSpace:'normal'}}>{item.Abstract_background}...</span></div>
                           <div className="row col-12 pt-2">
                           <div className="pull-left col-6 text-center">
                     	   	<span className="badge badge-primary">{item.createDate}</span>
                        	</div>
                          <div className="pull-right col-6 text-center">
                     	   	<span className="badge badge-primary">Explore </span>
                     	    </div>
                           </div>
                           </div>
                        </div>
                      );
                    })}
             </div>


             <div className="pt-2 pr-4 pl-2 pb-2 d-none d-lg-none d-md-block mx-2 mt-4" style={scrollStyle}>
                    {loadingResults && results.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="card d-inline-block mx-1 px-2 py-2  "
                         style={{width:'50%'}}>
                           <div className="card-body py-2 px-2">
                           <div><span className="badge-pill badge-primary" >Topic</span><strong style={{whiteSpace:'normal'}}>{item.Topic}</strong> </div>
                           <div><span className=" badge-pill badge-info" >Author</span><strong style={{whiteSpace:'normal'}}> {item.Author} </strong></div>
                           <div><span  className="badge-pill badge-primary" >Institution</span> <strong style={{whiteSpace:'normal'}}>{item.Institution}</strong></div>
                           <div><span  className="badge-pill badge-info" style={{whiteSpace:'normal'}}>Downloads</span> <strong style={{whiteSpace:'normal'}}>{item.num_of_endorsement} users</strong></div>
                           <div style={{whiteSpace:'normal',borderBottom:'1px solid grey'}} className="pb-2"><span  className="badge-pill badge-primary">Abstract->Background</span> <span style={{whiteSpace:'normal'}}>{item.Abstract_background}...</span></div>
                           <div className="row col-12 pt-2">
                           <div className="pull-left col-6 text-center">
                     	   	<span className="badge badge-primary">{item.createDate}</span>
                        	</div>
                          <div className="pull-right col-6 text-center">
                     	   	<span className="badge badge-primary">Explore </span>
                     	    </div>
                           </div>
                           </div>
                        </div>
                      );
                    })}
             </div>


             <div className="pt-2  pb-2 d-none d-lg-none d-md-none d-sm-block mt-4" style={scrollStyle}>
                    {loadingResults && results.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="card d-inline-block mx-1 px-2 py-2  "
                         style={{width:'80%'}}>
                           <div className="card-body py-2 px-2">
                           <div><span className="badge-pill badge-primary" >Topic</span><strong style={{whiteSpace:'normal'}}>{item.Topic}</strong> </div>
                           <div><span className=" badge-pill badge-info" >Author</span><strong style={{whiteSpace:'normal'}}> {item.Author} </strong></div>
                           <div><span  className="badge-pill badge-primary" >Institution</span> <strong style={{whiteSpace:'normal'}}>{item.Institution}</strong></div>
                           <div><span  className="badge-pill badge-info" style={{whiteSpace:'normal'}}>Downloads</span> <strong style={{whiteSpace:'normal'}}>{item.num_of_endorsement} users</strong></div>
                           <div style={{whiteSpace:'normal',borderBottom:'1px solid grey'}} className="pb-2"><span  className="badge-pill badge-primary">Abstract->Background</span> <span style={{whiteSpace:'normal'}}>{item.Abstract_background}...</span></div>
                           <div className="row col-12 pt-2">
                           <div className="pull-left col-6 text-center">
                     	   	<span className="badge badge-primary">{item.createDate}</span>
                        	</div>
                          <div className="pull-right col-6 text-center">
                     	   	<span className="badge badge-primary">Explore </span>
                     	    </div>
                           </div>
                           </div>
                        </div>
                      );
                    })}
             </div>

             <div className="pt-2  pb-2 d-block d-sm-none mt-4" style={scrollStyle}>
                    {loadingResults && results.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="card d-inline-block mx-1 px-2 py-2  "
                         style={{width:'100%'}}>
                          <div className="card-body py-2 px-2">
                           <div><span className="badge-pill badge-primary" >Topic</span><strong style={{whiteSpace:'normal'}}>{item.Topic}</strong> </div>
                           <div><span className=" badge-pill badge-info" >Author</span><strong style={{whiteSpace:'normal'}}> {item.Author} </strong></div>
                           <div><span  className="badge-pill badge-primary" >Institution</span> <strong style={{whiteSpace:'normal'}}>{item.Institution}</strong></div>
                           <div><span  className="badge-pill badge-info" style={{whiteSpace:'normal'}}>Downloads</span> <strong style={{whiteSpace:'normal'}}>{item.num_of_endorsement} users</strong></div>
                           <div style={{whiteSpace:'normal',borderBottom:'1px solid grey'}} className="pb-2"><span  className="badge-pill badge-primary">Abstract->Background</span> <span style={{whiteSpace:'normal'}}>{item.Abstract_background}...</span></div>
                           <div className="row col-12 pt-2">
                           <div className="pull-left col-6 text-center">
                     	   	<span className="badge badge-primary">{item.createDate}</span>
                        	</div>
                          <div className="pull-right col-6 text-center">
                     	   	<span className="badge badge-primary">Explore </span>
                     	    </div>
                           </div>
                           </div>
                        </div>
                      );
                    })}
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

const searchData = [
  {
    name: "Marble Cake"
  },
  {
    name: "Fruitcake"
  },
  {
    name: "Chocolate Cake"
  },
  {
    name: "Fat Rascal"
  },
  {
    name: "Financier"
  },
  {
    name: "Genoise"
  },
  {
    name: "Gingerbread"
  },
  {
    name: "Goose Breast"
  },
  {
    name: "Parkin"
  },
  {
    name: "Petit Gâteau"
  },
  {
    name: "Salzburger Nockerl"
  },
  {
    name: "Soufflé"
  },
  {
    name: "Streuselkuchen"
  },
  {
    name: "Tea Loaf"
  },
  {
    name: "Napoleonshat"
  },
  {
    name: "Merveilleux"
  },
  {
    name: "Magdalena"
  },
  {
    name: "Cremeschnitte"
  },
  {
    name: "Cheesecake"
  },
  {
    name: "Bebinca"
  }
];
const scrollStyle={
     whiteSpace:'nowrap',
     overflowX:'scroll',
     overflowY: 'hidden',
     height:'auto',
     border:'1px solid white',
     borderRadius:'5px',
     backgroundColor:'#f5f5f5 '
}
export default connect(mapStateToProps,{ landingPageMobileMenuToggle, 
  landingPageMobileMenuClose ,
  getResults,
  getResultsSuccess,
  getResultsError,
  searchResult,searchResultPro})(injectIntl(ImpulseHome));