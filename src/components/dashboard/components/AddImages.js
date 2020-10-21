import React, { Component } from "react";
import { withRouter } from "react-router";
import { getServer } from "../../../util";
import axios from "axios";
import { notification } from "antd";

class AddImages extends Component {
  uploadFile = (e) => {
    const data = new FormData();
    const url = `${getServer()}/api/products/upload/thumbnail?productId=${
      this.props.match.params.id
    }`;
    const target = e.target.files[0];
    data.append("file", target);
    axios({
      method: "post",
      url,
      data,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          notification.info({
            message: `Image Upload`,
            description: res.data.msg,
            placement: "topRight",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <p className="lead">Update your product thumbnail</p>
        <input type="file" name="file" onChange={this.uploadFile} />
      </div>
    );
  }
}
export default withRouter(AddImages);
