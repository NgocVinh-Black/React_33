import React, { Component } from "react";

export default class ItemGiay extends Component {
  render() {
    return (
      <div className="col-4 py-3 text-center">
        <div className="bg-light text-dark border rounded border-3">
          <img className="w-75 border-bottom" src={this.props.itemGiay.image} alt="" />
          <h3 className="py-2">{this.props.itemGiay.name}</h3>
          <p className="py-1 fs-3">${this.props.itemGiay.price}</p>
          {/* Button trigger modal */}
          <button
            onClick={() => {
              this.props.hamXemDetail(this.props.itemGiay);
            }}
            type="button"
            className="btn btn-dark my-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
