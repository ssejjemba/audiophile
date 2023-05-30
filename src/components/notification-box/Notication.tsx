import { styled } from "@stitches/react";

export type NotificationProps = {
  quantity: number;
};

const NotificationBox = styled("div", {
  width: "20px",
  height: "20px",
  background: "Red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  padding: "4px",
  color: "$white",

  position: "absolute",
  top: "0",
  right: "0",
  transform: "translate(10px, 13px)",
});

export const Notification = (props: NotificationProps) => {
  return <NotificationBox>{props.quantity}</NotificationBox>;
};
