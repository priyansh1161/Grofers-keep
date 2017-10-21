import React from 'react';
import PropTypes from 'prop-types';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemQty: '',
      itemUnit: 'Unit',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { itemName: name, itemQty: qty, itemUnit: unit } = this.state;
    this.props.addItem({ name, qty, unit });
  }
  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="item-field">Name</label>
          <input type="text"
                 className="form-control"
                 id="item-field"
                 aria-describedby="item field"
                 placeholder="eg: potato"
                 value={this.state.itemName}
                 name="itemName"
                 onChange={this.changeHandler}
                 required

          />
        </div>
        <div className="form-group row">
            <div className="col-sm-7 col-xs-12">
              <label htmlFor="item-qty">Quantity</label>
              <input type="number"
                     className="form-control form-control-lg"
                     id="item-qty" aria-describedby="item qty"
                     placeholder="eg: 1kg"
                     name="itemQty"
                     value={this.state.itemQty}
                     onChange={this.changeHandler}
                     required
              />
            </div>
            <div className="col-sm-5 col-xs-12">
              <label htmlFor="item-unit">Unit</label>
              <select
                className="form-control"
                name="itemUnit"
                id="item-unit"
                onChange={this.changeHandler}
              >
                <option>unit</option>
                <option>Kg</option>
                <option>gram</option>
                <option>liter</option>
                <option>ml</option>
                <option>piece</option>
                <option>dozen</option>
              </select>
          </div>
        </div>
        <button
          type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};



export default AddItem;
