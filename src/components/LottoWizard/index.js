import React from "react";
import { Wizard, Steps, Step } from "react-albus";
import AdvertCard from "../AdvertCard";
import PlayLottoNumbers from "../PlayLottoNumbers";
import NumberConfirmationCard from "../NumberConfirmationCard";
import ShareCard from "../ShareCard";

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
        render={({ next, previous }) => (
          <div>
            <NumberConfirmationCard onClick={next} />
          </div>
        )}
      />
      <Step
        id="dumbledo2"
        render={({ next, previous }) => (
          <div>
            <ShareCard />
          </div>
        )}
      />
    </Steps>
  </Wizard>
);

export default LottoWizard;
