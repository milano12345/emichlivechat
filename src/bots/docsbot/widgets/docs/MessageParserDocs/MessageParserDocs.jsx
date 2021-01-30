import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";

import styles from "./MessageParserDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

const MessageParserDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "messageParser",
    }));
  }, [setState]);

  const showMessageParserInfoBox = infoBox === "messageParser";

  return (
    <div className={styles.overview}>
      <FadeIn left by={250}>

      </FadeIn>

      <ConditionallyRender
        ifTrue={showMessageParserInfoBox}
        show={
          <InformationBox setState={setState}>
            <p className={styles.infoBoxParagraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus sint quasi quaerat ut minus aliquid architecto. Et voluptatum assumenda commodi nihil, harum totam nesciunt neque magni illum fuga architecto.
            </p>
            <p className={styles.infoBoxParagraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque consequuntur asperiores voluptates, in alias dolores sint ab fugit quasi veritatis quisquam repudiandae assumenda ea quidem? Cupiditate deleniti earum non.
            </p>
          </InformationBox>
        }
      />
    </div>
  );
};

export default MessageParserDocs;
