const GapSection = ({
  gapSize,
  setGapSize,
  gapColor,
  handleGapColorChange,
  color,
}) => {
  return (
    <div className='w-64'>
      <h1 className='text-lg font-semibold text-primary'>GAP</h1>
      <input
        type='range'
        min='0'
        max='0.03'
        step='0.001'
        value={gapSize}
        onChange={(e) => setGapSize(parseFloat(e.target.value))}
        className='w-full cursor-pointer accent-tertiary'
      />
      <div className='flex justify-between text-sm text-gray-700'>
        <span>0</span>
        <span>{gapSize.toFixed(2)}</span>
        <span>1</span>
      </div>

      <h1 className='text-lg mt-5 font-semibold text-primary'>
        Select Gap Color
      </h1>
      <div className='mt-4 grid grid-cols-3 gap-4 max-h-[22.5vh] overflow-y-auto custom-scrollbar'>
        {color.map(({ name, colorCode }) => (
          <div
            key={name}
            className={`w-12 h-12 border-2 rounded-2xl cursor-pointer ${
              gapColor === colorCode ? 'border-black' : 'border-gray-500'
            }`}
            style={{ backgroundColor: colorCode }}
            onClick={() => handleGapColorChange(colorCode)}
          />
        ))}
      </div>
    </div>
  );
};

export default GapSection;
