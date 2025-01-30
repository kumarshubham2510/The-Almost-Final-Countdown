import { useImperativeHandle, useRef } from "react";

export default function ResultsModel({
  ref,
  result,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const fixedRemainingTime = (remainingTime / 1000).toFixed(2);

  const userLost = remainingTime <= 0;
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>Your Lost </h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>You stopped the timer with <strong> {fixedRemainingTime} seconds left.</strong></p>

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
