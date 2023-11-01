import React, { useEffect } from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import * as ReactDOM from 'react-dom';

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }];

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour'),
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour'),
  },
];

function MyTimeline() {
  useEffect(() => {
    ReactDOM.render(
      <div>
        Rendered by react!
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </div>,
      document.getElementById('root')
    );
  }, []); // This effect runs once on component mount, ensuring it runs on the client side

  return null; // This component doesn't render anything directly
}

export default MyTimeline;