const WallGapSelection = ({
  wallGapSize,
  setWallGapSize,
  wallGapColor,
  handleWallGapColorChange,
  color,
}) => {
  return (
    <div className='w-62'>
      <h1 className='text-lg font-semibold text-primary'>GAP</h1>
      <input
        type='range'
        min='0'
        max='0.03'
        step='0.001'
        value={wallGapSize}
        onChange={(e) => setWallGapSize(parseFloat(e.target.value))}
        className='w-full cursor-pointer accent-tertiary'
      />
      <div className='flex justify-between text-sm text-gray-700'>
        <span>0</span>
        <span>{wallGapSize.toFixed(2)}</span>
        <span>1</span>
      </div>

      <h1 className='text-lg mt-5 font-semibold text-primary'>
        Select Gap Color
      </h1>
      <div className='mt-4 grid grid-cols-3 gap-4 max-h-[22.5vh] overflow-y-scroll custom-scrollbar'>
        {color.map(({ name, colorCode }) => (
          <div
            key={name}
            className={`w-12 h-12 border-2 rounded-2xl cursor-pointer ${
              wallGapColor === colorCode ? 'border-black' : 'border-gray-500'
            }`}
            style={{ backgroundColor: colorCode }}
            onClick={() => handleWallGapColorChange(colorCode)}
          />
        ))}
      </div>
    </div>
  );
};

export default WallGapSelection;
