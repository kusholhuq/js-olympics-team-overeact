import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

const handleClick = (event, data) => {
  // console.log(`clicked`, { event, data });
};

const attributes = {
  className: "custom-root",
  disabledClassName: "custom-disabled",
  dividerClassName: "custom-divider",
  selectedClassName: "custom-selected",
};

export default function ContextPopup(props) {
  return (
    <div>
      <ContextMenu id={props.id}>
        <MenuItem data={{ action: "delete" }} onClick={handleClick} attributes={attributes}>
          Delete
        </MenuItem>
        <MenuItem data={{ action: "move" }} onClick={handleClick} attributes={attributes}>
          Move
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{ action: "move1" }} onClick={handleClick} attributes={attributes}>
          Move to Column X
        </MenuItem>
        <MenuItem data={{ action: "move2" }} onClick={handleClick} attributes={attributes}>
          Move to Column Y
        </MenuItem>
      </ContextMenu>
    </div>
  );
}
