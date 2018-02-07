import React from "react";
import { Wizard, Steps, Step } from "react-albus";
import AdvertCard from "../AdvertCard";
import PlayLottoNumbers from "../PlayLottoNumbers";

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
            <PlayLottoNumbers onClick={next} />
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
