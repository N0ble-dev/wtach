"use client";
import "client-only";
import Script from "next/script";
import { useEffect } from "react";

const FacebookPluginConfig = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
  return (
    <>
      <div id="fb-root"></div>
    </>
  );
};
export default FacebookPluginConfig;
