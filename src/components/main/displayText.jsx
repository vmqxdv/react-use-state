import { useState } from 'react';

export default function displayText(props) {
  const { data } = props;
  const [text, changetext] = useState('Nessun linguaggio selezionato');

  const formatText = (element) => {
    return (
      <>
        <h2>{element.title}</h2>{element.description}
      </>
    )
  };

  const buttons = data.map(element => 
    <button onClick={() => changetext(formatText(element))}>{element.title}</button>
  );

  return (
    <>
      <div className="buttons-container">
        {buttons}
      </div>

      <div className="display-text">
        <p>{text}</p>
      </div>
    </>
  )
};