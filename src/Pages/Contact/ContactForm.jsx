import React, { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";

function ContactForm() {
  const { t } = useTranslation("contact");
  const [state, handleSubmit] = useForm("moveyeag");
  const recaptchaRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleCaptchaSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (recaptchaRef.current) {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (token) {
        formRef.current.requestSubmit();
      } else {
        setSubmitting(false);
        alert(t("contact.captchaFailed"));
      }
    }
  };

  if (state.succeeded) {
    return (
      <div className="contact-container">
        <div className="success-message-wrapper">
          <p className="success-message">{t("contact.successMessage")}</p>
          <div className="button-group">
            <button
              onClick={() => window.location.reload()}
              className="nav-button">
              {t("contact.sendAnother")}
            </button>
            <button onClick={() => navigate("/")} className="nav-button">
              {t("contact.goHome")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="explanation">
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.description")}</p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/moveyeag"
        method="POST"
        className="form-container"
        noValidate>
        <input type="text" name="bot-field" className="hidden" />

        <div className="form-group">
          <label htmlFor="email" className="label">
            {t("contact.emailLabel")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="input"
            placeholder={t("contact.emailPlaceholder")}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="label">
            {t("contact.messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="input textarea"
            placeholder={t("contact.messagePlaceholder")}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={handleCaptchaSubmit}
            className="submit-button"
            disabled={submitting}>
            {submitting ? t("contact.sending") : t("contact.send")}
          </button>
        </div>

        <p className="recaptcha-info">
          {t("contact.recaptchaNote")}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            {t("contact.privacyPolicy")}
          </a>{" "}
          and
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            {t("contact.termsOfService")}
          </a>{" "}
          apply.
        </p>

        <ReCAPTCHA
          sitekey="6LcoGxcrAAAAAEOaIX-eHgoF9sSnG7ggAtLAjozI"
          size="invisible"
          ref={recaptchaRef}
        />
      </form>
    </div>
  );
}

export default ContactForm;
