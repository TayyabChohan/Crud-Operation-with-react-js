import React from "react";
class Todod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggelState = this.toggelState.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  toggelState() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    });
  }

  updateItem(avt) {
    avt.preventDefault();
    this.props.editTask(this.props.index, this.input.value);
    this.toggelState();
  }

  render() {
    const { isEditing } = this.state;
    return (
      <section>
        {isEditing ? (
          <form onSubmit={this.updateItem}>
            <input
              type="text"
              ref={value => {
                this.input = value;
              }}
              defaultValue={this.props.detail.name}
            />
            <button type="submit">Update item</button>
          </form>
        ) : (
          <li
            onClick={() => {
              this.props.changestatus(this.props.index);
            }}
            className={this.props.detail.completed ? "completed" : ""}
          >
            {this.props.detail.name}
           <br/> <button
              onClick={avt => {
                avt.stopPropagation();
                this.props.deleteTask(this.props.index);
              }}
            >
              Delete
            </button>
            <button
              onClick={avt => {
                avt.stopPropagation();
                this.toggelState();
              }}
            >
              Edit
            </button>
          </li>
        )}
      </section>
    );
  }
}

export default Todod;
