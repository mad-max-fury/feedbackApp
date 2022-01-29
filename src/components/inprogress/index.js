import React from 'react';
import HeadingRoadMap from '../heading';
import RoadMapCard from '../roadmapcard';

const Inprogress = () => {
  return <div style={{ margin: '0 auto' }}>
    <div>
      <HeadingRoadMap count={1} text={'Currently being developed'} category={'In-Progress'} />
      <div className='cWrap'>
        {
          [1].map(el => {
            return <RoadMapCard heading={`Test`} paragraph={`settest`} category={'In-Progress'} />
          })
        }
      </div>
    </div>
  </div>;
};

export default Inprogress;
