import { Component } from "react";
import { StyledChoice } from "./Choice-styled.js"; // Импортируем стилизованный компонент

class Choice extends Component {
  render(){
    return(
      <StyledChoice>
        {this.props.name || "no info"}
      </StyledChoice>
    )
  }
}

export default Choice;