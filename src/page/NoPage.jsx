import React from 'react'
import '../assets/css/page_notfound.css'
import { useTranslation } from 'react-i18next';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Titled } from 'react-titled';
const NoPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Titled title={title => `${window.location.pathname} | Page Not Found`} />
      <div id="main">
        <div className="fof">
          <div>
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_0hMYgUHLg6.json"
              style={{ height: "100%", width: "300px" }}
            >
            </Player>
            {/* <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_owua8tsy.json"
              style={{ height: "100%", width: "50%" }}
            >
            </Player> */}
            {/* <h1>{t("error_404")}</h1> */}

            {/* 
                BackUp link:

                https://assets1.lottiefiles.com/packages/lf20_m6k6uhad.json 
                https://assets1.lottiefiles.com/packages/lf20_0hMYgUHLg6.json
            */}
          </div>

        </div>
      </div>
    </>
  )
}

export default NoPage