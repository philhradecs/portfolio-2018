import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  flex: 1;
  white-space: nowrap;
  margin-left: 1rem;
  &:first-child {
    margin-left: 0;
  }
  height: 100%;
  padding: 0.2rem 0.8rem;
  background: var(--body-bg);
  cursor: pointer;
  border: 2px solid ${props => props.color};
  border-radius: 0.3rem;
  
  &.enabled:hover, &.active {
    background: ${props => props.color};
    color: var(--body-bg);
    transition: background 80ms ease-out,
                color 80ms ease;
  }
`;

export default ({ filterToggle, filter }) => {
  const handleWithStyle = (e) => {
    filterToggle(e);
    const btn = e.target;
    if (!btn.classList.contains('active')) {
      btn.classList.toggle('enabled', false)
      setTimeout(() => {
        btn.classList.toggle('enabled', true);
      }, 800);
    }
    
  }

  return (
    <Button onClick={handleWithStyle} id={filter.key} color={filter.color} className="enabled">
      {filter.key}
    </Button>  
  )
}