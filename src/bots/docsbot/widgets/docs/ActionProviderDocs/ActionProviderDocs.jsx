import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import styles from "./ActionProviderDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

const ActionProviderDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "actionProvider",
    }));
  }, [setState]);

  const showActionProviderInfoBox = infoBox === "actionProvider";

  return (
    <div>

      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox setState={setState}>
            <p className={styles.infoBoxParagraph}>
              You have to write your own actionprovider. It will contain
              functions that you want to call in response to a user input. The
              actionprovider is given to the messageparser so you can use any
              methods you provide here inside the messageparser.
            </p>
            <p className={styles.infoBoxParagraph}>
              The bots response is controlled by the createChatBotMessage
              function that is given to the actionprovider:
            </p>
            <Gist id={"2f0855a6fe8908bddc9f03db31d5caa4"} />
          </InformationBox>
        }
      />
    </div>
  );
};

export default ActionProviderDocs;
