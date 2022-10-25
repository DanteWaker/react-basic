import React, { useState } from "react";
import { Tweet } from "./components/Tweet";
import { RouterM } from "./Routes";

export function App() {
  const [data, setData] = useState<String[]>([
    "Twweet 1",
    "Twweet 2",
    "Twweet 3",
    "Twweet 4",
    "Twweet 5",
    "Twweet 6",
  ]);

  const createTweet = () => {
    setData([...data, "Tweet 7"]);
  };
  return (
    <>
      <RouterM />
    </>
  );
}
