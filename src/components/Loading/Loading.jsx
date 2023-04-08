import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-[calc(100vh-121px)] md:min-h-[calc(100vh-161px)] text-4xl flex items-center justify-center">
      <div className="">
        <FontAwesomeIcon
          className="text-blue-700 animate-spin"
          icon={faSpinner}
        />
      </div>
    </div>
  );
};

export default Loading;
