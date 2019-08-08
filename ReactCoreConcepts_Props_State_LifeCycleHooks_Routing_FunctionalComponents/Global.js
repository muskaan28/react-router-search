import React, { Component } from 'react';

class Global extends Component {
  render() {
    return(   
    <div className="header">  
 
 <h1 className="text" spellcheckker="false" >SWH-Senior Whole Health</h1 > 
 <div className="w-25 p-3"></div>

 <h5 className="nav" >SIMPLE SECURE INDEPENDENT</h5>
 <div className="w-25 p-3"></div>
<div className="w-50 p-3" ></div>
      <div className="w-25 p-3"></div>
      <div className="search"><h5>PROVIDER NETWORK SEARCH</h5></div>
      <div className="w-25 p-3"></div>
<div className="w-50 p-3" ></div>

 <label className="texting">   
 <u><b><i className="heading">PLAN</i></b></u></label>
 
<form>
          <select className="form-control"
    >
    <option value="value0">Select Plan</option>
      <option value="value1">Health maintenance organizations (HMOs)</option><option value="value2">Preferred provider organizations (PPOs)</option><option value="value3">Exclusive provider organizations (EPOs)</option><option value="value">Point-of-service (POS) plan</option></select>
        <label className="checkbox" ></label>
        <div className="w-25 p-3"></div>
  

    <label htmlFor="text" className="texting" ><b><u><i>FIRST NAME:</i></u></b>
    </label>
    <br/>
    <input type="text" placeholder="Enter First Name" name="text" required/>
    
    <div className="w-50 p-3" ></div>

    <label htmlFor="text" className="texting"><b><u><i>LAST NAME:</i></u></b></label>
    <br/>
    <input type="text" placeholder="Enter Last Name" name="psw" required/>
    <div className="w-50 p-3" ></div>


    <label htmlFor="text" className="texting"><b><u><i>GROUP NAME:</i></u></b></label>
    <br/>
    <input type="text" placeholder="Ex:Ortho" name="psw-repeat" required/>
    
<div className="w-50 p-3" ></div>

<label className="texting" ><b><u><i>PROVIDER TYPE</i></u></b></label><br/>

  <input type="checkbox" name="vehicle" value="PCP"/> PCP
  <br/>

  <input type="checkbox" name="vehicle" value="HOSPITAL"/> HOSPITAL

  <br/>
  <input type="checkbox" name="vehicle" value="SPECIALIST"/> SPECIALIST
  <br/>

  <input type="checkbox" name="vehicle" value="FACILITIES" /> FACIITIES
  <br/>
  

<div className="w-100 p-3"></div>

<label className="texting">   
 <u><i>PROVIDER SERVICE</i></u></label>
 <select className="form-control"
    > <option value="value0">Select Service</option>
      <option value="value1">pediatric specialty care</option>
    <option value="value2">physical therapy and rehabilitation</option>
    <option value="value3">prescription services</option>
    <option value="value">mental health care</option></select>
       
       
    <div className="w-100 p-3"></div>

       
<label className="texting">      
    <u><i>LANGUAGE</i></u></label>
 <select className="form-control"
    ><option value="value0">Select Language</option>
      <option value="value1">hindi</option>
    <option value="value2">english</option>
    <option value="value3">kannada</option>
    <option value="value">french</option></select>
    <div className="w-100 p-3"></div>
  
    <label className="texting">      
    <u><i>HANDICAP ACCESSIBILITY</i></u></label>
 <select className="form-control"
    ><option value="value0">Select Yes or No</option>
      <option value="value1">Yes</option>
    <option value="value2">No</option>
    </select>
    <div className="w-100 p-3"></div>

       
<label className="texting">      
    <u><i>GENDER</i></u></label>
 <select className="form-control"
    ><option value="value0">Select Gender</option>
      <option value="value1">male</option>
    <option value="value2">female</option>
    <option value="value3">others</option>
    </select>
       

        <div className="w-25 p-3"></div>
        <label htmlFor="text" className="texting"><b><u><i>ADDRESS:</i></u></b>
    </label>
    <br/>
    <input type="text" placeholder="Enter Address" name="text" required/>
    
    <div className="w-50 p-3" ></div>

    <label htmlFor="text" className="texting"><b><u><i>CITY:</i></u></b></label>
    <br/>
    <input type="text" placeholder="Enter City" name="psw" required/>
    <div className="w-25 p-3"></div>
      <label className="texting">   
    <u><i>STATE</i></u></label><br/>
    <select className="slist">
    <option value="All States">Select State</option>   
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Orissa">Orissa</option>
<option value="Pondicherry">Pondicherry</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Tripura">Tripura</option>
<option value="Uttaranchal">Uttaranchal</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="West Bengal">West Bengal</option>
</select>


<div className="w-25 p-3"></div>
<label htmlFor="string" className="texting"><b><i><u>ZIP CODE:</u>(separate multiple zip codes with comma)</i></b>
    </label>
    <br/>
    <input type="text" placeholder="Enter Zip Code" name="text" required/>
    
<div className="w-50 p-3" ></div>     <div className="w-25 p-3"></div>
<div className="w-50 p-3" ></div>   



     <center> <p><a className="btn btn-lg btn-success" href="#" role="button" >SEARCH</a></p></center>
    <center><p><a className="btn btn-lg btn-success" href="#" role="button" >
<button type="reset" value="Reset">
CLEAR</button></a></p></center>
    </form>
    
        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
        
          <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" className="rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16c519b04d0%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16c519b04d0%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">MediData</strong>
              <a href="#">Follow</a>
            </div>
            <span class="d-block">@henrycliff</span>
          </div>
        
        <div class="media text-muted pt-3"></div>
          <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" className="rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16c519b04d2%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16c519b04d2%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">DataScience</strong>
              <a href="#">Follow</a>
            </div>
            <span class="d-block">@johnwalker</span>
          </div>
        
         <div className="w-50 p-3" ></div>     <div className="w-25 p-3"></div>
<div className="w-50 p-3" ></div>   

    <div data-component-maps="" className="map"><iframe className="frame" frameBorder="0" src="https://maps.google.com/maps?&amp;q=Paris&amp;z=11&amp;t=q&amp;output=embed" width="100" height="100"></iframe></div>
      
    <div className="w-50 p-3" ></div>     <div className="w-25 p-3"></div>
<div className="w-50 p-3" ></div>   

      
       <div className="row marketing">
        <div className="col-lg-6">
        </div>
      </div>
      <footer className="footer">
        <p>© SWH 2017</p>
      </footer>
      
      </div>
      

        )
  }
}
export default Global;
