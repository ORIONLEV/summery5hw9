import './App.css'
import Choise from './components/Choice/Choice'
import StickerList from './components/StickerList/StickerList'
import sticker from "./stickers.json"
import Sticker from './components/Sticker/Sticker'
import { Component } from 'react'

class App extends Component{

  state = {
    pockemoName: "",
  }

  handleClick=(text)=>{
    this.setState({
      pockemoName:text,
    })
  }

  render(){
    return(
      <>
      <StickerList data={sticker} onName={this.handleClick} />
      <Choise name={this.state.pockemoName}/>
      
      </>
    )
  }

}


export default App
