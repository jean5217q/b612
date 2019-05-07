import React, { Component } from 'react'

class Train extends Component {
  render() {
    const { 
      Carrier, 
      T_Number, 
      Seat,
      setSeat,
      setNumber,
      setCarrier
      } = this.props
    return(
        <div className='add-select-group'>
          {/*類型*/}
          <div className='add-select-input-wrap'>
            <label className='add-select-label'>Type</label>
            <div className='add-select-input'>Train</div>
          </div>
          {/*運輸公司*/}
          <div className='add-select-input-wrap'>
            <label className='add-select-label'>Carrier</label>
            <input 
              className='add-select-input'
              type='input'
              placeholder='optional'
              value={Carrier}
              onChange={setCarrier}/>
          </div>
          {/*車次*/}
          <div className='add-select-input-wrap'>
            <label className='add-select-label'>Number</label>
            <input 
              className='add-select-input'
              type='input'
              placeholder='optional'
              value={T_Number}
              onChange={setNumber}/>
          </div>
          {/*座位*/}
          <div className='add-select-input-wrap'>
            <label className='add-select-label'>Seat</label>
            <input 
              className='add-select-input'
              type='input'
              placeholder='optional'
              value={Seat}
              onChange={setSeat}/>
          </div>
      </div>
    )
  }
}

export default Train