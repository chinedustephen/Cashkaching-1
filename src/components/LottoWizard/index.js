import React from "react";
import { Wizard, Steps, Step } from "react-albus";
import AdvertCard from "../AdvertCard";
import PlayLottoNumbers from "../PlayLottoNumbers";
import NumberConfirmationCard from "../NumberConfirmationCard";
import ShareCard from "../ShareCard";

const LottoWizard = props => (
  <Wizard>
    <Steps>
      <Step
        id="merlin"
        render={({ next }) => (
          <div>
            <AdvertCard bg={props.bg} onClick={next} />
          </div>
        )}
      />
      <Step
        id="gandalf"
        render={({ next, previous }) => (
          <div>
            <PlayLottoNumbers bglabel={props.bglabel} onClick={next}>
              {props.children}
              {console.log(props.bglabel)}
            </PlayLottoNumbers>
          </div>
        )}
      />
      <Step
        id="dumbledore"
        render={({ next, previous }) => (
          <div>
            <NumberConfirmationCard
              bglabel={props.bglabel}
              secbk={props.secbk}
              onClick={next}
            />
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
