"use client";
import { Button } from "@/components/ui/button";
import swal from "sweetalert";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Subscribe = ({ notitle = false }: { notitle?: boolean }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [isPending, startTransition] = React.useTransition();
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState({ type: "", text: "" });

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = async () => {
    if (!isValidEmail(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setMessage({ type: "", text: "" });

    startTransition(async () => {
      try {
        const obj = { email, labels: [] };
        const res = await fetch(`${API_URL}members/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });

        if (!res.ok) {
          throw new Error("Failed to subscribe. Please try again.");
        }

        const data = await res.json();
        console.log(data);
        swal("Hello world!");
        setMessage({ type: "success", text: "Subscribed successfully!" });
        setEmail("");
      } catch (error: any) {
        console.error(error);
        setMessage({ type: "error", text: error.message });
      }
    });
  };

  return (
    <div className={`flex  flex-col  rounded-xl  ${!notitle ? "bg-white gap-4  px-8  items-center" : "gap-2"}`}>
      <div className="relative flex flex-col items-center w-full">
        {!notitle && (
          <span className=" ">
            <MdOutlineEmail className="text-red-500 -mt-8 size-40 " />
          </span>
        )}

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`w-full  pr-4 py-2 bg-transparent ${
            !notitle ? "text-black pl-10" : "text-white"
          }  border-b border-gray-600 placeholder-gray-400 focus:outline-none focus:border-red-500`}
          placeholder="Enter your Email"
        />
      </div>

      <Button disabled={isPending} onClick={handleSubscribe} className="rounded-full text-white mt-4 ">
        {isPending ? "Subscribing..." : "Subscribe"}
      </Button>
      {message.text && (
        <p className={`mt-2 text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
          {message.text}
        </p>
      )}
    </div>
  );
};

export default Subscribe;
