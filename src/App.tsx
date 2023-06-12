import React, { useState } from 'react';
import Level01 from "./components/Level01/Level01";
import Level02 from "./components/Level02/Level02";
import { IButtonsConfig } from "./types";

const App = () => (
  <>
    <Level01 />
    <Level02 />
  </>
);

export default App;