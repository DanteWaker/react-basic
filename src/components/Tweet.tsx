import React from "react";

interface TweetProps {
  text: String;
}

export function Tweet(props: TweetProps) {
  const { text } = props;
  return <div>{text}</div>;
}
