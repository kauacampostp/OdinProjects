function QuantityInput({ value, onChange }) {
  function handleInputChange(e){
    const n = parseInt(e.target.value, 10);
    if(Number.isNaN(n) || n < 1) return;
    onChange(n)
  }
  return (
    <>
      <div>
        <button
          aria-label="Diminuir quantidade"
          onClick={() => onChange(value - 1)}
          disabled={value <= 1}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          onChange={handleInputChange}
          value={value}
        />
        <button
          aria-label="Aumentar quantidade"
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}

export default QuantityInput;
