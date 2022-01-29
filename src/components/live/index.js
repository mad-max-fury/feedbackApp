import React from 'react';
import HeadingRoadMap from '../heading';
import RoadMapCard from '../roadmapcard';

const Live = () => {
  return <div style={{ margin: 'auto' }}>
    <div>
      <HeadingRoadMap count={2} text={'Released features'} category={'Live'} />
      <div className='cWrap'>
        {[1, 2].map(el => {
          return <RoadMapCard heading={`Learning Paths`} paragraph={`Sequenced projects for different goals to help people improve.`} category={'Live'} />
        })}
      </div>
    </div>
  </div>;
};

export default Live;
