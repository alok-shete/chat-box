import React from "react";
import { database } from "./firebase";
import cx from "classnames";
import Message from "./components/message";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      name: "",
      code: false,
      login: true,
    };

    this.onAddMessage = this.onAddMessage.bind(this);
    this.onAddName = this.onAddName.bind(this);
  }

  componentWillMount() {
    const messagesRef = database.ref("messages").orderByKey().limitToLast(100);

    messagesRef.on("child_added", (snapshot) => {
      const message = { text: snapshot.val(), id: snapshot.key };

      this.setState((prevState) => ({
        messages: [message, ...prevState.messages],
      }));
    });
  }

  onAddMessage(event) {
    event.preventDefault();
    if (this.input.value.length !== 0) {
      var data = this.state.name + "<<>>" + this.input.value;
      database.ref("messages").push(data);

      this.input.value = "";
    }
  }

  onAddName(event) {
    event.preventDefault();
    if (this.input.value.length !== 0) {
      if (this.inputPass.value === "AWM") {
        this.setState({
          name: this.input.value,
          code: true,
        });
      } else {
        this.setState({
          login: false,
        });
      }
    }
  }

  render() {
    return (
      <>
        {this.state.name === "" ? (
          <div>
            <div className={cx("container", "col-sm-6")}>
              <div className="card">
                <div className={cx("card-header", "text-center")}>
                  <h3>
                    <b>Private Chat Box</b>
                  </h3>
                </div>
                <div className="card-footer">
                  <form onSubmit={this.onAddName}>
                    <div className={cx("input-group", "mb-3")}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name..."
                        ref={(node) => (this.input = node)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Chat Code..."
                        ref={(nodePass) => (this.inputPass = nodePass)}
                      />
                      <div className="input-group-append">
                        <input
                          type="Submit"
                          value="Enter"
                          className={cx("btn", "btn-outline-success")}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="text-center">
                    {!this.state.login ? "Enter Valid Chat Code" : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("container", "col-sm-6")}>
            <div className="card">
              <div className={cx("card-header", "text-center")}>
                <h3>
                  <b>Private Chat Box</b>
                </h3>
              </div>
              <div className="card-footer">
                <form onSubmit={this.onAddMessage}>
                  <div className={cx("input-group", "mb-3")}>
                    <input
                      type="text"
                      className="form-control"
                      ref={(node) => (this.input = node)}
                    />
                    <div className="input-group-append">
                      <input
                        type="Submit"
                        value="Send"
                        className={cx("btn", "btn-outline-success")}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="overflow">
                <div className={cx("container", "card-body")}>
                  {this.state.messages.map((message) => (
                    <Message
                      key={message.id}
                      user={this.state.name}
                      name={message.text.split("<<>>")[0]}
                      message={message.text.split("<<>>")[1]}
                      classFl="flex-row"
                      classFlrxRev="flex-row-reverse"
                      classGreen="alert-success"
                      classBlue="alert-primary"
                      classRight=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default App;
