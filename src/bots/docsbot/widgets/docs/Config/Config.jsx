import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import GistContainer from "../../GistContainer/GistContainer";

import styles from "./Config.module.css";

const Config = ({ gist, setState }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showActionProviderGist = gist === "config";

  return (
    <div>
      <a
        href="https://danielmilano.tech"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        View example
      </a>
      <ConditionallyRender
        ifTrue={showActionProviderGist}
        show={<GistContainer gistId="af04e2e30407671412af08fa3c429409" />}
      />
    </div>
  );
};

export default Config;
