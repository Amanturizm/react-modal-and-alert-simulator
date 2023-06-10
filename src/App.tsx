import React, { useState } from 'react';
import Level01 from "./components/Level01/Level01";
import Level02 from "./components/Level02/Level02";
import { IButtonsConfig } from "./types";

const App = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const cancel = (): void => setIsModal(!isModal);

  const showAlert = (): void => setIsAlert(!isAlert);

  const continueToAlert = (): void => {
    cancel();
    showAlert();
  };

  return (
    <div className="App">
      <Level01 isModal={isModal} cancel={cancel} continueToAlert={continueToAlert} />
      <Level02 isAlert={isAlert} showAlert={showAlert} />
    </div>
  );
};
export default App;
