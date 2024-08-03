import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoPopup = ({ show, onClose }) => {
  // Render nothing if 'show' prop is false
  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      {/* Modal Dialog with centered alignment */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header containing the title and close button */}
          <div className="modal-header">
            <h5 className="modal-title">Instructions</h5>
            {/* Button to close the modal */}
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          {/* Modal Body with the instructions text */}
          <div className="modal-body">
            <p>
              Use the input field to add new todos. Click on the buttons to
              edit, delete, or mark todos as completed. Use the info icon for
              these instructions.
            </p>
          </div>
          {/* Modal Footer with the Close button */}
          <div className="modal-footer">
            {/* Button to close the modal */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
