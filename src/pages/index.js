import Layout from "@/components/Layout";
import SpeakerInvestor from "@/components/NewPartners";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    }
  }
}
export default function Home() {
  return (
    <Layout>
      <SpeakerInvestor />
    </Layout>
  )
}