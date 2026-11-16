import { Component } from "react";
import { StyledItem, StyledImage } from "./Sticker-styled";

class Sticker extends Component {
  render(){
    const { img, label } = this.props.items;
    return(
      <>
        <StyledItem>
          <StyledImage src={img} alt={label} onClick={() => this.props.onName(label)} />
        </StyledItem>
      </>
    )
  }
}

export default Sticker;