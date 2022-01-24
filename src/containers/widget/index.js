import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import ConnectBtn from '../../components/ConnectBtn';
const Widget = () => {
  const [active, setActive] = useState(false)
  const [arrow, setArrow] = useState('up')


  const handleActive = () => {
    if (active) {
      setActive(false)
      setArrow('up')
    } else {
      setActive(true)
      setArrow('down')
    }

  }


  return <WidgetWrapper>
    <div className='sort'>
      <span className='suggestionCount'>
        <h3><i class="far fa-lightbulb "></i> 28 Suggestions</h3>
      </span>
      <span className='sortBox'>
        <span> Sort by :</span>  <ul>
          <li id='btnAct' onClick={handleActive}><a href="#" style={{ color: '#fff' }}>Most Upvotes <i style={{ color: '#fff', marginLeft: '5px' }} className={`fas fa-angle-${arrow}`}></i> </a>
            {active ? <ul class="dropdown active">
              <li><a href="#">Most Upvotes</a></li>
              <li><a href="#">Least Upvotes</a></li>
              <li><a href="#">Most Comments</a></li>
              <li><a href="#">Least Comments</a></li>
            </ul> : null}
          </li>
        </ul>
      </span>
    </div>
    <div className='btnWrap'>
      <ConnectBtn text={'+ Add Feedback'} />
    </div>
  </WidgetWrapper>;
};

export default Widget;


const WidgetWrapper = styled.div`

 width:50vw;
 height:fit-content;
 padding:0.5rem 1rem;
 background-color:#373F68;
 margin:auto;
 display:flex;
 gap:1rem;
 border-radius:10px;
 justify-content:space-between;
    color:#fff;
    .btnWrap{
  display:flex;
     gap:1rem;
    align-items:center;
    }
 .sort{
     display:flex;
     gap:1rem;
    align-items:center;
   
 }
 .suggestionCount{
   h3 > i {
     padding-right:1rem;
   }
 }
   @media screen and (max-width:915px){
   position:relative;
    width:85vw;
    .suggestionCount{
      display:none;
    }
 }
  .sortBox{

    display:flex;
    align-items:center;
        ul li {
      list-style: none;
   
      display: inline-block;
      position: relative;
      text-decoration: none;
      text-align: start;
      font-family: arvo;
     }

     li a {
      color: black;
     }

     li a:hover {
      color: #3ca0e7;
     }

      li:hover {
      cursor: pointer;
     }

     ul li ul {
      visibility: visible;
      opacity: 1;
      position: absolute;
      padding-left: 0;
      left: 0;
      top:290%;
      display: block;
      background: white;
      border-radius:10px;
     }

     ul li:hover > ul,
     ul li ul.active {
      visibility: visible;
      opacity: 1;
      display: block;
      width: 150px;
      text-align: left;
      padding: 20px;
      box-shadow: 0px 3px 5px -1px #ccc;
    }

    ul li ul li {
      clear: both;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
      border-style: none;
    }

    ul li ul li a:hover {
      padding-left: 10px;
      border-left: 2px solid ${colors.main_color};
      transition: all 0.3s ease;
    }
  }
}

a {

    text-decoration: none;

    &:hover {
        color: #3CA0E7;
    }
  }
   ul li ul li a { transition: all 0.5s ease; }

 `