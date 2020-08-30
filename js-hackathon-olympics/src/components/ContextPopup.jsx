import React from "react";
import { ContextMenu, MenuItem, SubMenu } from "react-contextmenu";

const attributes = {
  className: "custom-root",
  disabledClassName: "custom-disabled",
  dividerClassName: "custom-divider",
  selectedClassName: "custom-selected",
};

export default class ContextPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, data) {
    if (data.action === "delete") {
      this.props.delete(this.props.id, this.props.columnId)
    }
  }

  render() {
    return (
      <div>
        <ContextMenu id={this.props.id}>
          <MenuItem data={{ action: "delete" }} onClick={this.handleClick} attributes={attributes}>
            Delete
          </MenuItem>
          <SubMenu title="Move to">
            <MenuItem data={{ action: "move1" }} onClick={this.handleClick} attributes={attributes}>
              Move to Column X
            </MenuItem>
            <MenuItem data={{ action: "move2" }} onClick={this.handleClick} attributes={attributes}>
              Move to Column Y
            </MenuItem>
          </SubMenu>
        </ContextMenu>
      </div>
    );
  }
}
