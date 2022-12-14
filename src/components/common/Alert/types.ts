export type Alert = {
  show: boolean;
  flag: "red" | "green" | "blue" | "orange" | "yellow";
  type: "ok" | "ok-cancel";
  style: Partial<StyleType>;
  messageStyle: Partial<MessageStyleType>;
  icon: string;
  message: string;
  doThis: () => void;
};

export type StyleType = {
  mainColor: string;
  iconSize: number;
  backgroundColor: string;
  border: string;
};

export type MessageStyleType = { color: string; fontSize: string; fontFamily: string; fontWeight: string };
