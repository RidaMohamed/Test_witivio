import * as React from "react";
import {
  CommandBar,
  ICommandBarItemProps,
} from "office-ui-fabric-react/lib/CommandBar"; //fluent UI
import { IButtonProps } from "office-ui-fabric-react/lib/Button"; //fluent UI
import { initializeIcons } from "@fluentui/react"; //fluent UI

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
          onClick: () => console.log("changer vers dark"),
        },
        {
          key: "calendarEvent",
          text: "Standard Theme",
          iconProps: { iconName: "Checkbox" },
          onClick: () => console.log("changer vers white"),
        },
        {
          key: "calendarEvent",
          text: "Contraste Theme",
          iconProps: { iconName: "CheckboxComposite" },
          onClick: () => {
            console.log("changer vers Contraste");
          },
        },
      ],
    },
  },
  {
    key: "info",
    text: "Application planification Réunions",
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "Info" },
    onClick: () => console.log("Info"),
  },
];

export default CommandBarBasicExample;
