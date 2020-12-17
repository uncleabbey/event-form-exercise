import React, { Component } from 'react'

const CustomLink = ({link, text, handleClick, className}) => {
  return (
    <a href={link} className={className} onClick={handleClick} rel="noreferrer">{text}</a>
  )
}

export class LinkContainer extends Component {
  state = {
    github: "https://www.github.com",
    nairaland: "https://www.nairaland.com",
    twitter: "https://www.twitter.com",
    disabled: false
  }
  handleClick = (e) => {
    if(!this.state.disabled) {
      e.target.target = "_blank"
    } else {
      e.preventDefault()
    }
  }
  handleSwitch = (e) => {
    if(this.state.disabled){
      this.setState({ disabled: false, github: "https://www.github.com", nairaland: "https://www.nairaland.com", twitter: "https://www.twitter.com" });

    } else {
      this.setState({ disabled: true, github: "#", nairaland: "#", twitter: "#" })
    }
  }
  render() {
    return (
      <div className="links">
        <h2>Links</h2>
        <p>
          <CustomLink link={this.state.github} text={"Github"} handleClick={this.handleClick} className={this.state.disabled ? "disabled" : "able"} />
        </p>
        <p>
          <CustomLink link={this.state.nairaland} text={"Nairaland"} handleClick={this.handleClick} className={this.state.disabled ? "disabled" : "able"} />
        </p>
        <p>
          <CustomLink link={this.state.twitter} text={"Twitter"} handleClick={this.handleClick} className={this.state.disabled ? "disabled" : "able"} />
        </p>
        <button className="button-link" onClick={this.handleSwitch}>Click To Disable Button</button>
      </div>
    )
  }
}



export default LinkContainer
