import React, { Component } from 'react';
import { week } from '../../../../../../data/Content';

class Calender_Item extends Component {
  render() {
    const { day, lang } = this.props
    return (
      <div className='basic-calender-wrap'>
        <div className='basic-calender-top'>
          <div className='basic-calender-top-text'>{day.y}</div>
        </div>
        <div className='basic-calender-bottom'>
          <div className='basic-calender-bottom-day'>{day.m}.{day.d}</div>
          <div className='basic-calender-bottom-week'>
            {`(${week[day.w][lang]})`}
          </div>
        </div>
      </div>
    )
  }
}

export default Calender_Item