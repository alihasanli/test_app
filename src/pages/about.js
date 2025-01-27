import Layout from "@/components/Layout";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    }
  }
}

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <h1>{t('country')}</h1>
    </Layout>
  )
}

export default About