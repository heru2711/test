import Layout from "../components/Layout/Layout";
import matchesStyles from "./matches.module.css";
import Wrapper from "../components/Wrapper/Wrapper";
function MatchesPage() {
   
    return (
      <Layout>
      
        <div className={matchesStyles.container}>
        < img src='/assets/cardone.svg' alt=""/>
        <div className={matchesStyles.containert}>
        <button >
                <img src='/assets/swipegreen.png'alt="Button Image"/>
            </button>
        </div>
        </div>
        
        </Layout>
    )
  }
  
  export default MatchesPage;
  