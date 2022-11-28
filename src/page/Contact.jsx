import React, { useRef, useState, useEffect } from 'react'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import { FiMap } from 'react-icons/fi'
import { Titled } from 'react-titled'
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';
import AlertInputError from '../components/AlertInputError';
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from 'emailjs-com'


const messageRequired = "The field is required.";
const emailInvalid = "The e-mail address entered is invalid.";
const inputError = "One or more fields have an error. Please check and try again."
const schema = yup.object({
  name: yup.string().required(messageRequired),
  email: yup.string().email(emailInvalid).required(messageRequired),
  subject: yup.string(),
  message: yup.string().required(messageRequired),
  captchaToken: yup.string().required(messageRequired)
})
const SERVICE_ID = "service_fu0nisz";
// const TEMPLATE_ID = "template_00vu2c2"; //template email me
const TEMPLATE_ID = "template_va8l58k"; //template email admin@doubleda.net
const PUBLIC_KEY = "bALZTd6LgQDONa0nP";

const Contact = () => {

  const { t } = useTranslation();
  const recaptcha_site_key = "6LfcZDIjAAAAAEjsm_I8nlo-u_D9L1bkgg4unTvg";
  // const recaptcha_site_key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const recaptcha_secret_key = "6LfcZDIjAAAAAALBsxqXhFc1W4czb3fCI2-0QA8H";
  const captchaRef = useRef()

  const { register, handleSubmit, formState: { errors }, setError, reset, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (value) => {
    setValue('captchaToken', value)
  }
  const onSubmit = (data) => {
    console.log(data)
    setIsLoading(true)
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      .then((result) => {
        setIsSent(true);
        setIsError(false);
        setIsLoading(false)
        reset();
        const delay = setTimeout(() => {
          setIsSent(false);
        }, 15000)
        return () => clearTimeout(delay)
      }, (error) => {
        setIsSent(false);
        setIsError(true);
        const delay = setTimeout(() => {
          setIsError(false);
        }, 15000)
        return () => clearTimeout(delay)
      },)

  };
  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <section className="contact-container">
      <Titled title={title => `Contact Us | ${title}`} />
      <div className="cover-image" style={{ backgroundImage: `url(${require("../assets/image/PSD_9_-scaled.jpg")})` }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dicount-offer-content text-center pt-5 detail-cover-title ">
                <h2 className="theme-gradient">{t('contact_us')}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout">
        <section className="contact-grid row">
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiPhoneCall /></span>
              <ul>
                <li><a>KR: +82 010 2709 9254</a></li>
                <li><a>UK: +44 074 8756 0640</a></li>
                <li><a>KH: +855 010 224 214</a></li>
              </ul>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiMail /></span>
              <ul>
                <li><a>admin@doubleda.net</a></li>
                <li><a>doubleda01@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiMap /></span>
              <ul>
                <li><a>KR: G223, 602 Yeongdong-daero, Gangnam-gu, Seoul, Korea (06083) KH: #34, St360, BKK1, Phnom Penh, Cambodia</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="form-input row">
          <div className="form-text col-lg-6 col-md-6 col-sm-12">
            <span className="tag-title">{t('Feel free to say Hi~')}</span>
            <h1 className="title">{t('contact_us')}</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="form">
                <span className="input-item">
                  <input {...register("name", { required: true })} type="text" placeholder={`${t('Your Name')} *`} />
                  <ErrorMessage errors={errors} name="name" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <input {...register("email", { required: true })} type="text" placeholder={`${t('Your Email')} *`} />
                  <ErrorMessage errors={errors} name="email" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <input {...register("subject")} type="text" placeholder={`${t('Your Subject')}`} />
                  <ErrorMessage errors={errors} name="subject" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <textarea {...register("message", { required: true })} type="text" placeholder={`${t('Your Message')} *`} />
                  <ErrorMessage errors={errors} name="message" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <ReCAPTCHA
                    sitekey={recaptcha_site_key}
                    ref={captchaRef}
                    onChange={onChange}
                  />
                  <ErrorMessage errors={errors} name="captchaToken" render={({ message }) => <p>{message}</p>} />
                </span>
              </div>
              <div className="submit-button">
                <input type="submit" className="sb-btn" value={t('Submit Now')} />
              </div>

              {isLoading &&
                <div className="loading-icon">
                  <Player
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/packages/lf20_LzRTWE.json"
                    style={{ height: "100%", width: "100%" }}
                  >
                  </Player>
                </div>}

              {isSent && <AlertInputError message="Thank you for your message. It has been sent." />}

              {isError && <AlertInputError message="Your message was error. " />}

            </form>

          </div>
          <div className="image-banner col-lg-6 col-md-6 col-sm-12">
            <img src={`${require('../assets/image/PSD_9_-scaled-pkc6v7a13euiimjy5crvz533smx50ul7pwl5iqcoxw.jpg')}`} />
          </div>
        </section>
      </div>
    </section>
  )
}
export default Contact