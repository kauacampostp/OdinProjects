function QuantityInput({ value, onChange }) {
  const toNumber = (v) => parseInt(v, 10) || 0;

  const handleBlur = () => {
    if (toNumber(value) < 1) onChange(1);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        aria-label="Diminuir quantidade"
        onClick={() => onChange(Math.max(1, toNumber(value) - 1))}
        disabled={toNumber(value) <= 1}
        className="w-10 h-10 rounded-lg border border-gray-300 font-bold hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        -
      </button>
      <input
        type="number"
        min="1"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        onBlur={handleBlur}
        aria-label="Quantidade"
        className="w-16 h-10 text-center border border-gray-300 rounded-lg"
      />
      <button
        aria-label="Aumentar quantidade"
        onClick={() => onChange(toNumber(value) + 1)}
        className="w-10 h-10 rounded-lg border border-gray-300 font-bold hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}

export default QuantityInput;
