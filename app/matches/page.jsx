import Layout from "../components/Layout/Layout";
import matchesStyles from "./matches.module.css";
import Image from "next/image";

function MatchesPage() {
  return (
    <Layout>
      <div className={matchesStyles.container}>
        <img src="/assets/cardone.svg" alt="" />
        <div className={matchesStyles.containert}>
          {/* <button> */}

          <Image
            src="/assets/play-button-svgrepo-com.svg"
            alt="Button Image"
            width={50}
            height={50}
          />

          {/* </button> */}
        </div>
      </div>
    </Layout>
  );
}

export default MatchesPage;
