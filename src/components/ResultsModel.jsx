export default function ResultsModel({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result} </h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>You stopped the timer with X seconds left.</p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
