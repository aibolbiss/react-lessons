const App = ({ btnText, btnClassName }) => {
  const [buttonText, setButtonText] = React.useState(btnText);
  const [classList, setClassList] = React.useState(btnClassName);

  const changeButtonText = () => {
    setButtonText('Click me please');
    setClassList('btn-green');
  };

  return (
    <div className='container'>
      <button
        className={classList}
        onClick={changeButtonText}
      >
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
  <App
    btnText='Click me'
    btnClassName=''
  />
);
