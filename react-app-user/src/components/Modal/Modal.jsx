import React from "react";
import "../../styles/modal.css";
const Modal = ({
  className,
  onModal,
  message,
  inputText,
  buttonText,
  modalFooter,
}) => {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            {message ? (
              <p className="fz:13 fw-500 text-center mb-0">{message}</p>
            ) : (
              "Tambahkan Teks"
            )}
            {inputText ? (
              <input
                type="text"
                id="reason"
                name="reason"
                className="input-control"
                placeholder="Enter your reason"
                required
              />
            ) : null}
            <div className={`modal-footer ${modalFooter}`}>
              <button
                type="button"
                className="sch-modal-action"
                onClick={() => onModal(true)}
              >
                {buttonText}
              </button>
              <button
                type="button"
                className="sch-modal-cancel"
                onClick={() => onModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
