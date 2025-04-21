import { useTranslation } from "react-i18next";

const useSliderImages = () => {
  const { t } = useTranslation("card3d");

  return [
    {
      id: 1,
      src: "/images/CardSlider/Donation1.jpg",
      title: t("sliderB.water_for_gaza_title"),
      description: t("sliderB.water_for_gaza_description"),
      cta: t("sliderB.water_for_gaza_cta"),
    },
    {
      id: 2,
      src: "/images/CardSlider/Donation2.jpg",
      title: t("sliderB.ramadan_2025_title"),
      description: t("sliderB.ramadan_2025_description"),
      cta: t("sliderB.ramadan_2025_cta"),
    },
    {
      id: 3,
      src: "/images/CardSlider/Donation3.jpg",
      title: t("sliderB.rafah_emergency_title"),
      description: t("sliderB.rafah_emergency_description"),
      cta: t("sliderB.rafah_emergency_cta"),
    },
    {
      id: 4,
      src: "/images/CardSlider/Donation4.jpg",
      title: t("sliderB.sos_gaza_title"),
      description: t("sliderB.sos_gaza_description"),
      cta: t("sliderB.sos_gaza_cta"),
    },
    {
      id: 5,
      src: "/images/CardSlider/Donation5.jpg",
      title: t("sliderB.orphan_sponsorship_title"),
      description: t("sliderB.orphan_sponsorship_description"),
      cta: t("sliderB.orphan_sponsorship_cta"),
    },
    {
      id: 6,
      src: "/images/CardSlider/Donation6.jpg",
      title: t("sliderB.zakat_maal_title"),
      description: t("sliderB.zakat_maal_description"),
      cta: t("sliderB.zakat_maal_cta"),
    },
    {
      id: 7,
      src: "/images/CardSlider/Donation7.jpg",
      title: t("sliderB.aid_al_adha_title"),
      description: t("sliderB.aid_al_adha_description"),
      cta: t("sliderB.aid_al_adha_cta"),
    },
    {
      id: 8,
      src: "/images/CardSlider/Donation8.jpg",
      title: t("sliderB.ramadan_2025_title_2"),
      description: t("sliderB.ramadan_2025_description_2"),
      cta: t("sliderB.ramadan_2025_cta_2"),
    },
    {
      id: 9,
      src: "/images/CardSlider/Donation9.jpg",
      title: t("sliderB.water_for_gaza_title_2"),
      description: t("sliderB.water_for_gaza_description_2"),
      cta: t("sliderB.water_for_gaza_cta_2"),
    },
    {
      id: 10,
      src: "/images/CardSlider/Donation10.jpg",
      title: t("sliderB.orphan_sponsorship_title_2"),
      description: t("sliderB.orphan_sponsorship_description_2"),
      cta: t("sliderB.orphan_sponsorship_cta_2"),
    },
    {
      id: 11,
      src: "/images/CardSlider/Donation11.jpg",
      title: t("sliderB.rafah_emergency_title_2"),
      description: t("sliderB.rafah_emergency_description_2"),
      cta: t("sliderB.rafah_emergency_cta_2"),
    },
    {
      id: 12,
      src: "/images/CardSlider/Donation12.jpg",
      title: t("sliderB.ramadan_donations_title"),
      description: t("sliderB.ramadan_donations_description"),
      cta: t("sliderB.ramadan_donations_cta"),
    },
    {
      id: 13,
      src: "/images/CardSlider/Donation13.jpg",
      title: t("sliderB.water_for_gaza_title_3"),
      description: t("sliderB.water_for_gaza_description_3"),
      cta: t("sliderB.water_for_gaza_cta_3"),
    },
    {
      id: 14,
      src: "/images/CardSlider/Donation14.jpg",
      title: t("sliderB.sos_gaza_title_2"),
      description: t("sliderB.sos_gaza_description_2"),
      cta: t("sliderB.sos_gaza_cta_2"),
    },
    {
      id: 15,
      src: "/images/CardSlider/Donation15.jpg",
      title: t("sliderB.aid_al_adha_title_2"),
      description: t("sliderB.aid_al_adha_description_2"),
      cta: t("sliderB.aid_al_adha_cta_2"),
    },
  ];
};

export default useSliderImages;
