import React from 'react'
import '../assets/css/page_notfound.css'
import { useTranslation } from 'react-i18next';
const NoPage = () => {
  const { t } = useTranslation();
  return (
    <>

      <div id="main">
        <div class="fof">
          <h1>{t("error_404")}</h1>
        </div>
      </div>

    </>


  )
}

export default NoPage