import React, { useState, useEffect, useContext } from "react";

const useBeforeRender = (callback, deps) => {
    const [isRun, setIsRun] = useState(false);

    if (!isRun) {
        callback();
        setIsRun(true);
    }

    useEffect(() => () => setIsRun(false), deps);
};

export default useBeforeRender;