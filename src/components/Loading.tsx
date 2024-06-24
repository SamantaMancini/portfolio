import { useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return { loading, setLoading };
};

export default Loading;
