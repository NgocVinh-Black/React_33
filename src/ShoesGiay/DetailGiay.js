import React, { Component } from "react";

export default class DetailGiay extends Component {
  render() {
    console.log(this.props);
    const { image, name, price, description } = this.props.detail;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Xem chi tiết
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center">
              <img
              className="w-75 border-bottom"
                src={image}
                alt=""
              />
              <h3 className="py-2">{name}</h3>
              <p className="py-1 fs-3">${price}</p>
              <p className="text-start border rounded border-1 p-1">{description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
