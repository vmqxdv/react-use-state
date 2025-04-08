import { useState } from 'react';

export default function displayText(props) {
  const { data } = props;
  const [text, changetext] = useState(<p>Nessun linguaggio selezionato</p>);

  const formatText = (element) => {
    return (
      <>
        <h2>{element.title}</h2>{element.description}
      </>
    )
  };

  const buttons = data.map(element => 
    <button key={element.id} onClick={() => changetext(formatText(element))}>{element.title}</button>
  );

  return (
    <>
      <div className="buttons-container">
        {buttons}
      </div>

      <div className="display-text">
        {text}
      </div>
    </>
  )
};