import React from "react";
import { Wizard, Steps, Step } from "react-albus";
import AdvertCard from "../AdvertCard";

const LottoWizard = () => (
  <Wizard>
    <Steps>
      <Step
        id="merlin"
        render={({ next }) => (
          <div>
            <AdvertCard onClick={next} />
          </div>
        )}
      />
      <Step
        id="gandalf"
        render={({ next, previous }) => (
          <div>
            <h1>Lotto input / send / change state to next/ validation</h1>
            <button onClick={next}>Next</button>
          </div>
        )}
      />
      <Step
        id="dumbledore"
        render={({ previous }) => (
          <div>
            <h1>Confirmed/ request number/ </h1>
          </div>
        )}
      />
    </Steps>
  </Wizard>
);

export default LottoWizard;
