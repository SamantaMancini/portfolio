import { useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  return { loading, setLoading };
};

export default Loading;
