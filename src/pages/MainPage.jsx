import React, {useState} from 'react';
import styled from 'styled-components';
import CustomNav from '../components/Nav.jsx';
import Content from '../../assets/content.json';
import ArrowRight from '../components/ArrowRight.jsx';

const Marquee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
  gap: 5rem;
  
  background: url("../../../assets/backgrounds/${props => props.backgroundImage}") center / cover no-repeat;
   
  .hero {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    gap: 1rem;

    .headline, .subhead {
      margin: 0;
    }

    .headline {
      flex: 1 0 100%;
      
    }

    .subhead {
      flex: 0 0 100%;
      line-height: 1.625rem;
      letter-spacing: .053rem;
    }

    
    @media only screen and (min-width: 992px) {
      .headline {
        flex: 0 0 50%;
        
      }

      .subhead {
        flex: 0 0 30%;
      }
    }
  }
  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: white;
    width: 90%;
    margin: 0 auto;
    padding: 3em 4em;

    .text-style {
      text-transform: uppercase;
      margin-right: 1rem;
    }

    .contact-cta {
      display: flex;
      align-items: center;
    }
  }

  .shrink-enter {
transform: translateX(-100%);
        transform: translateX(0%);
  }

  .fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.fade-leave {
  opacity: 1;
}

.fade-leave.fade-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
`

const MainPage = () => {
  const [marqueeContent, setMarqueeContent] = useState([]);

  const updateMarquee = (slug) => {
    const matchingPage = Content.pages.filter(page=> {
      return page.slug == slug;
    });
    setMarqueeContent(matchingPage[0].blocks[0]);
  }
  
  return (
      <Marquee backgroundImage={marqueeContent.background}>
      <CustomNav onClickLink={updateMarquee} />
      <div className="hero">
        <h1 className="text-style2 headline">{marqueeContent.headline}</h1>
        <p className="text-style4 subhead">{marqueeContent.subhead}</p>
      </div>
        
      <footer>
        <h3 className="text-style5">{marqueeContent.cta}</h3>
        <a className="contact-cta" href="#">
          <p className="text-style"> Let's Talk</p>
          <ArrowRight />
        </a>
      </footer>
      </Marquee>
  )
}

export default MainPage;