import React from 'react';
import HeadingRoadMap from '../heading';
import RoadMapCard from '../roadmapcard';

const Planned = () => {
  return <div style={{ margin: 'auto' }}>
    <div>
      <HeadingRoadMap count={2} text={'Ideas prioritized for research'} category={'Planned'} sm />
      <div className='cWrap'>
        {[1, 2].map(el => {
          return <RoadMapCard heading={`Add Tags for solutions`} paragraph={`Easier to search for solutions based on a specific stack.`} category={'Planned'} />
        })}
      </div>
    </div>
  </div>;
};

export default Planned;
