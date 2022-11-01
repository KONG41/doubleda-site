import React from 'react'
import '../assets/css/page_notfound.css'
import { useTranslation } from 'react-i18next';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";
const NoPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Page Not Found – DoubleDa. The Place.</title>
      </Helmet>
      <div id="main">
        <div className="fof">
          <div>
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_iq9koc12.json"
              style={{ height: "100%", width: "100px" }}
            >
            </Player>
            <h1>{t("error_404")}</h1>
          </div>

        </div>
      </div>

    </>


  )
}

export default NoPage