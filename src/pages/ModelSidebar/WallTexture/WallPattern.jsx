const WallPattern = ({ wallLayout, setWallLayout }) => {
  const patterns = [
    { wallLayout: 'simple', image: '/assets/pattern/simple.png' },
    { wallLayout: 'chess', image: '/assets/pattern/chess.png' },
    { wallLayout: 'line', image: '/assets/pattern/lineBylineH.png' },
    { wallLayout: 'herringbone', image: '/assets/pattern/herringbone.png' },
    { wallLayout: 'brickrow2', image: '/assets/pattern/brickRow2.png' },
    { wallLayout: 'brickcolumn', image: '/assets/pattern/brickRow.png' },
    { wallLayout: 'lineV', image: '/assets/pattern/lineBylineV.png' },
    { wallLayout: 'bookmatch', image: '/assets/pattern/simple.png' },
    { wallLayout: 'diagonalherringbone', image: '/assets/pattern/magic.png' },
  ];

  return (
    <>
      <div className='flex flex-wrap gap-10 justify-center mx-auto max-w-4xl overflow-auto  p-4'>
        {patterns.map(({ wallLayout: layoutValue, image }) => (
          <label
            key={layoutValue}
            className={`w-full cursor-pointer p-5 border-2 ${
              wallLayout === layoutValue ? 'bg-black' : 'bg-white'
            }`}
            onClick={() => setWallLayout(layoutValue)}
            style={{
              backgroundImage: `url(${image})`,

              backgroundSize: 'contain',
              backgroundPosition: 'center',
              borderColor: wallLayout === layoutValue ? 'white' : 'gray',
              height: '50px',
              width: '50px',
            }}
          >
            <input
              type='radio'
              value={layoutValue}
              checked={wallLayout === layoutValue}
              onChange={() => setWallLayout(layoutValue)}
              style={{ display: 'none' }}
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default WallPattern;
