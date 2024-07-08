import { useTranslation } from "react-i18next"

const AboutPage = () => {
	// about - название namespace'а
	const { t } = useTranslation("about")

	return <div style={{ margin: "30px" }}>{t("about")}</div>
}

export default AboutPage
