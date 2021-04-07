import React from 'react';
import styled from 'styled-components';

const ArrowRight = styled.div`
background: #ffc001;
  height: .2em;
  width: 1.75em;
  // margin: 0 auto;
  position: relative;
  cursor: pointer;
  border-radius: 5rem;

  &:before,
  &:after {
    content: "";
    background: #ffc001;
    position: absolute;
    height: .2em;
    width: .85em;
    border-radius: 5em;
  }

  &:before {
    right: -.2em;
    bottom: -.3em;
    transform: rotate(-45deg);
  }

  &:after {
    right: -.2em;
    top: -.3em;
    transform: rotate(45deg);
  }
`

export default ArrowRight;