import React, { useEffect } from "react";

const CookieTest = () => {
  useEffect(() => {
    console.log("test");
    document.cookie = "parentCookie=ParentValue; path=/";

    const cl = (e) => console.log(e);

    window.addEventListener("message", (e) => console.log(e.data));
    return () => {
      window.removeEventListener("message", cl);
    };
  }, []);
  return (
    <div>
      <iframe src="https://aritrakoley.github.io/tpc-test" />
    </div>
  );
};

export default CookieTest;
