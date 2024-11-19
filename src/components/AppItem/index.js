import {Component} from 'react'

import {
  MainContainer,
  AppItemContainer,
  MainHeading,
  InputContainer,
  Input,
  Button,
  SavedText,
} from './styledComponents'

class AppItem extends Component {
  state = {text: '', saveBtnClicked: false, editBtnClicked: false}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onSaveBtnClicked = () => {
    this.setState({saveBtnClicked: true})
  }

  onEditBtnClicked = () => {
    this.setState({saveBtnClicked: false})
  }

  renderInput = () => {
    const {text} = this.state
    return (
      <>
        <InputContainer>
          <Input type="text" onChange={this.onChangeText} value={text}></Input>
          <Button onClick={this.onSaveBtnClicked}>Save</Button>
        </InputContainer>
      </>
    )
  }

  renderSavedInput = () => {
    const {text} = this.state

    return (
      <>
        <InputContainer>
          <SavedText>{text}</SavedText>
          <Button onClick={this.onEditBtnClicked}>Edit</Button>
        </InputContainer>
      </>
    )
  }

  render() {
    const {saveBtnClicked} = this.state

    return (
      <MainContainer>
        <AppItemContainer>
          <MainHeading>Editable Text Input</MainHeading>
          {saveBtnClicked ? this.renderSavedInput() : this.renderInput()}
        </AppItemContainer>
      </MainContainer>
    )
  }
}

export default AppItem
