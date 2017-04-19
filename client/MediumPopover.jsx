// ES6 Class Syntax
import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import { connect } from 'react-redux'
import ContentEditable from "react-contenteditable"
import { onGetSelection } from './actions/mediumActions';
import SelectionPopover from './SelectionPopover'
import MediumComments from './MediumComments'
import ResponseForm from './ResponseForm'

class MediumPopover extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopover: false,
      showCommentForm:false,
      selection:""
    };
    this.getSelection = this.getSelection.bind(this);
  }
  getSelection () {
    const selectionText = window.getSelection().toString();
    this.props.onGetSelection(selectionText)
  }

  render() {
    return (
      <div>
        <section className="section">
          <ResponseForm />
          <div className="container">
            <div className="columns is-multiline">
              <div data-selectable className="selectable-text column is-12">
                <p>
                  This is the first selectable paragraph. Looking pretty good.
                </p>
                <p>
                  This is the second selectable paragraph. Looking pretty good.
                </p>

                <p>
                  Donut lemon drops toffee chupa chups pastry wafer ice cream biscuit. Fruitcake candy canes bonbon biscuit jelly beans.
                </p>
                <p className="is-highlight">
                  Donut icing marzipan marzipan chocolate cake jelly beans danish.
                  Gummi bears powder sugar plum gummi bears macaroon liquorice chocolate cake marzipan tootsie roll.
                  Sweet gummies cotton candy carrot cake sweet jelly toffee liquorice oat cake. Danish tiramisu carrot cake cake.
                  Croissant apple pie donut gummi bears. Jelly danish bonbon powder sweet roll toffee gummies.
                </p>
                <p>
                  Tiramisu muffin marshmallow muffin danish gummi bears. Tiramisu tootsie roll pastry lemon drops fruitcake.
                  Gingerbread oat cake lemon drops wafer croissant macaroon. Wafer fruitcake muffin.
                  Chocolate bar macaroon soufflé donut croissant. Marshmallow sesame snaps ice cream chocolate bar wafer jelly jujubes.
                  Brownie cake bear claw soufflé. Dragée sugar plum bonbon jelly tootsie roll carrot cake liquorice sesame snaps.
                </p>
                <p>
                  Candy jujubes ice cream icing toffee gummies croissant gummi bears. Tiramisu jujubes soufflé sugar plum muffin.
                  Icing apple pie chupa chups. Topping chupa chups caramels. Lollipop cupcake cookie.
                  Cheesecake apple pie dragée dessert danish chocolate cake muffin macaroon.
                  Jelly-o carrot cake brownie oat cake candy canes chocolate muffin.
                  Cookie fruitcake carrot cake liquorice pie muffin lemon drops sesame snaps wafer.
                  Sugar plum fruitcake ice cream tart. Apple pie chocolate cake dragée toffee gingerbread.
                  Jelly beans sweet caramels danish powder tart bonbon croissant.
                  Marshmallow croissant pie toffee sesame snaps topping bonbon bonbon pie.
                  Lemon drops candy canes marzipan tootsie roll.
                </p>
              </div>
              <SelectionPopover
                showPopover={this.state.showPopover}
                onSelect={() => {this.setState({showPopover: true})}}
                onDeselect={() => {this.setState({showPopover: false})}}
              >
                <button>mark</button>
                <button onClick={this.getSelection}>comment</button>
              </SelectionPopover>

            </div>
          </div>
        </section>
        <MediumComments/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    medium: state.medium
  };
}

export default connect(mapStateToProps,{onGetSelection})(MediumPopover);
