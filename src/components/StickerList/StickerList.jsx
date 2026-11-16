import { Component } from "react";
import Sticker from "../Sticker/Sticker";
import { StyledList } from "./StickerList-syled";

class StickerList extends Component {
  render(){
    const { data, onName } = this.props;
    return(
      <>
        <StyledList>
          {data.map((item) => {
            return(
              <Sticker key={item.label} items={item} onName={onName} />
            )
          })}
        </StyledList>
      </>
    )
  }
}

export default StickerList;