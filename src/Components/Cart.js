const App = () => {
    const [items, setItems] = useState([]); // instantiate cards as a empty Array
  
    const addCard = () => {
      // create a new array with the old values and the new random one
      const newItems = [...items, Math.floor(Math.random() * 100)];
  
      setCards(newItems);
    };
  
    const removeItem = (ItemIndex) => {
      // create a new array without the item that you are removing
      const newCards = cards.filter((card, index) => index !== cardIndex);
  
      setCards(newCards);
    };
  
    return (
      <body>
        <header>
          <div className="ui buttons">
            <button className="ui button mb-1 mt-1" onClick={() => addItem()}>
              <i className="plus icon"></i>
              Add Card
            </button>
            <div className="or mb-1 mt-1"></div>
            <button
              className="ui positive button mb-1 mt-1"
              onClick={() => addItem()}
            >
              <i className="sort numeric down icon"></i>
              Sort All
            </button>
          </div>
        </header>
        <main>
          {cards.map((itemNumber, index) => (
            <MainCard number={itemNumber} onRemove={() => removeItem(index)} />
          ))}
        </main>
      </body>
    );
  };