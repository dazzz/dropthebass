import React from 'react'
import classnames from 'classnames'

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {songUrl: ''}
  }

  handleChange(event) {
    this.setState({songUrl: event.target.value})
  }

  render() {
    let classes = classnames({
      'modal-overlay': true,
      '-open': this.props.isOpen
    })

    return (
      <div className={classes}>
        <div className='modal-close' onClick={this.props.onOverlayClick}></div>

        <div className='modal'>
          <div className='modal-text'>
            Hi! You can paste a link to the song page on SoundCloud below to visualise it.
          </div>
          <div className='modal-label'> Link to the song </div>
          <input
            className='modal-url' placeholder='https://soundcloud.com/'
            value={this.state.songUrl}
            onChange={(event) => this.handleChange(event)}
          />

          <div
            className='modal-button'
            onClick={(event) => this.props.onButtonClick(this.state.songUrl)}>
            Do the thing!
          </div>
        </div>
      </div>
    )
  }
}

export default Modal