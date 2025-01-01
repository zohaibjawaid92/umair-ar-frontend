// import React from "react";
// import "@google/model-viewer";

// const ModelViewer = ({ isOpen, onClose, modelPath }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay" style={overlayStyles}>
//             <div className="modal-content" style={contentStyles}>
//                 <button onClick={onClose} style={closeButtonStyles}>
//                     X
//                 </button>
//                 <model-viewer
//                     src={modelPath}
//                     alt="3D Model"
//                     auto-rotate
//                     camera-controls
//                     ar={true } // Enable AR only when isArMode is true
//                     ar-modes="webxr scene-viewer quick-look"
//                     style={{
//                         width: "100%",
//                         height: "400px", // Full-screen for AR
//                         maxWidth: "600px",
//                         margin: "20px auto",
//                         borderRadius: "8px",
//                     }}
//                 ></model-viewer>
//             </div>
//         </div>
//     );
// };

// // Simple inline styles for demonstration
// const overlayStyles = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1000,
// };

// const contentStyles = {
//     position: "relative",
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "10px",
//     maxWidth: "90%",
//     textAlign: "center",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
// };

// const closeButtonStyles = {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     backgroundColor: "#ff5f5f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "50%",
//     width: "30px",
//     height: "30px",
//     cursor: "pointer",
// };

// export default ModelViewer;



import React, { useEffect } from "react";
import "@google/model-viewer";

const ModelViewer = ({ isOpen, onClose, modelPath }) => {
  // Disable body scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    // Cleanup when modal unmounts or closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={overlayStyles}>
      <div className="modal-content" style={contentStyles}>
        <button onClick={onClose} style={closeButtonStyles}>
          X
        </button>
        <model-viewer
          src={modelPath}
          alt="3D Model"
          auto-rotate
          camera-controls
          ar={true}
          ar-modes="webxr scene-viewer quick-look"
          style={{
            width: "100%",
            height: "400px",
            maxWidth: "600px",
            margin: "20px auto",
            borderRadius: "8px",
            touchAction: "pan-y", // Allow only vertical touch actions
          }}
        ></model-viewer>
      </div>
    </div>
  );
};

// Simple inline styles for demonstration
const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const contentStyles = {
  position: "relative",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "90%",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  overflow: "hidden", // Prevent content overflow
};

const closeButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#ff5f5f",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  cursor: "pointer",
};

export default ModelViewer;
