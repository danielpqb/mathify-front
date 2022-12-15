import { Alert, StyleType } from "./types";

const defaultProps = { type: "ok", doThis: () => {}, icon: "checkmark-circle" };
const defaultStyle = {
  mainColor: "rgb(0, 80, 40)",
  iconSize: 80,
  backgroundColor: "rgb(220, 220, 220)",
  border: "5px solid rgba(0, 0, 0, 0.2)",
};

export function defineProps(alertProps: Alert) {
  const receivedProps = { ...alertProps };
  const props = { ...defaultProps, ...receivedProps };

  const receivedStyle = receivedProps?.style;
  const style = { ...defaultStyle, ...receivedStyle };
  defineStyle(props, style);

  return { ...props, style };
}

function defineStyle(props: Alert, style: StyleType) {
  switch (props?.flag) {
  case "red":
    style.mainColor = "rgb(110, 0, 5)";
    style.backgroundColor = defaultStyle.backgroundColor;
    props.icon = "close-circle";
    break;
  case "green":
    style.mainColor = "rgb(0, 80, 20)";
    style.backgroundColor = defaultStyle.backgroundColor;
    props.icon = "checkmark-circle";
    break;
  case "blue":
    style.mainColor = "rgb(0, 40, 70)";
    style.backgroundColor = defaultStyle.backgroundColor;
    props.icon = "information-circle";
    break;
  case "orange":
    style.mainColor = "rgb(140, 60, 0)";
    style.backgroundColor = defaultStyle.backgroundColor;
    props.icon = "close-circle";
    break;
  case "yellow":
    style.mainColor = "rgb(200, 160, 0)";
    style.backgroundColor = defaultStyle.backgroundColor;
    props.icon = "alert-circle";
    break;
  default:
    break;
  }
}
