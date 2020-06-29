import * as React from "react";
import {
  CommandBar,
  ICommandBarItemProps,
} from "office-ui-fabric-react/lib/CommandBar";
import { IButtonProps } from "office-ui-fabric-react/lib/Button";
import { initializeIcons } from "@fluentui/react";

const overflowProps: IButtonProps = { ariaLabel: "More commands" };

export const CommandBarBasicExample: React.FunctionComponent = () => {
  initializeIcons();
  return (
    <div>
      <CommandBar items={_items} overflowButtonProps={overflowProps} />
    </div>
  );
};

const _items: ICommandBarItemProps[] = [
  {
    key: "newItem",
    text: "Theme",
    cacheKey: "myCacheKey",
    iconProps: { iconName: "ColorSolid" },
    subMenuProps: {
      items: [
        {
          key: "emailMessage",
          text: "Dark Theme",
          iconProps: { iconName: "CheckboxFill" },
        },
        {
          key: "calendarEvent",
          text: "Standard Theme",
          iconProps: { iconName: "Checkbox" },
        },
        {
          key: "calendarEvent",
          text: "Contraste Theme",
          iconProps: { iconName: "CheckboxComposite" },
        },
      ],
    },
  },
  {
    key: "info",
    text: "Info",
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "Info" },
    onClick: () => console.log("Info"),
  },
];

export default CommandBarBasicExample;
