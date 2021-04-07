import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from "../../assets/abc_logo.svg";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  width: 90%;
    margin: 0 auto;

  a {
    display: inline;
    margin: 1rem;
    font-weight: bold;
    color: white;
    text-decoration:none;
    &:hover {
      color:#ffc004;
    }
    &.active {
      color:#ffc004;
    }

    &.contact-button {
      border: solid 1px white;
      padding: 0.75rem 1.25rem;
      position: absolute;
      align-self: flex-end;
    }
  }
`

const CustomNav = (props) => {
  const [activeLink, setActiveLink] = useState('industries');

  // set default active page to "industries"
  useEffect(()=>{
    props.onClickLink("industries");
  }, []);
  
  // send page slug to parent component upon clicking navlink
  const handleNavClick = (e) => {
    const slug = e.currentTarget.attributes['data-slug'].value;
    props.onClickLink(slug);
    setActiveLink(slug);
  };

  return (
    <Navigation>
      <a href="#" className="contact-button">Contact Us</a>
      <a href="#"> <img src={Logo} alt="ABC Logo" /></a>
      {/* active class and state when link is clicked */}
      <a href="#" className={"text-style " + (activeLink === 'industries' ? 'active' : '') } data-slug="industries" onClick={handleNavClick}>Industries</a>
      <a href="#" className={"text-style " + (activeLink === 'services' ? 'active' : '') } data-slug="services" onClick={handleNavClick}>Services</a>
      <a href="#" className={"text-style " + (activeLink === 'about-us' ? 'active' : '') } data-slug="about-us" onClick={handleNavClick}>About Us</a>
    </Navigation>
  )
}

export default CustomNav;