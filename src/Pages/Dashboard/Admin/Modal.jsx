import React, { useRef } from 'react';

const Modal = ({ modalRef }) => {
  const handleFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log(feedback);
  };

  const handleCloseModal = () => {
    modalRef.current.close(); // Close the modal using ref and close() method
  };

  return (
    <>
      <tr>
        {/* Table rows */}
      </tr>

      {/* Open modal button */}
      {/* <button className="btn">Open Modal</button> */}

      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleFeedback} method="dialog" className="modal-box">
          <textarea
            className="textarea w-full textarea-accent"
            placeholder="Write Your Feedback"
            name="feedback"
          ></textarea>
          <div className="modal-action">
            {/* if there is a button in the form, it will close the modal */}
            <button className="btn" onClick={handleCloseModal}>
              Send
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
