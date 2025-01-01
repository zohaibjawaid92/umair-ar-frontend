import React, { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Inject Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/676c3d90af5bfec1dbe1d35c/1ifvd102d";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Configure predefined questions once Tawk.to is ready
    script.onload = () => {
      if (window.Tawk_API) {
        // Add predefined questions
        window.Tawk_API.onLoad = function () {
          window.Tawk_API.addEvent("PredefinedQuestions", {
            questions: [
              { question: "What do you want?", type: "text" },
              { question: "What is your budget?", type: "text" },
            ],
          });
        };
      }
    };

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI elements needed
};

export default TawkToWidget;
