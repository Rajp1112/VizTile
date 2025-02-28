const PatternSection = ({ layout, setLayout }) => {
  const patterns = [
    { layout: 'simple', image: '/assets/pattern/simple.png' },
    { layout: 'chess', image: '/assets/pattern/chess.png' },
    { layout: 'line', image: '/assets/pattern/lineBylineH.png' },
    { layout: 'herringbone', image: '/assets/pattern/herringbone.png' },
    { layout: 'brickrow2', image: '/assets/pattern/brickRow2.png' },
    { layout: 'brickcolumn', image: '/assets/pattern/brickRow.png' },
    { layout: 'lineV', image: '/assets/pattern/lineBylineV.png' },
    { layout: 'bookmatch', image: '/assets/pattern/simple.png' },
    { layout: 'diagonalherringbone', image: '/assets/pattern/magic.png' },
  ];

  return (
    <div className='flex flex-wrap gap-10 justify-center mx-auto max-w-4xl  overflow-auto p-4'>
      {patterns.map(({ layout: layoutValue, image }) => (
        <label
          key={layoutValue}
          className={`w-full cursor-pointer p-5 border-2 ${
            layout === layoutValue ? 'bg-black' : 'bg-white'
          }`}
          onClick={() => setLayout(layoutValue)}
          style={{
            backgroundImage: `url(${image})`,

            backgroundSize: 'contain',
            backgroundPosition: 'center',
            borderColor: layout === layoutValue ? 'white' : 'gray',
            height: '50px',
            width: '50px',
          }}
        >
          <input
            type='radio'
            value={layoutValue}
            checked={layout === layoutValue}
            onChange={() => setLayout(layoutValue)}
            style={{ display: 'none' }}
          />
        </label>
      ))}
    </div>
  );
};

export default PatternSection;
