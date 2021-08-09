import Transactions from "../Components/Transactions";
import { apiURL } from "../util/apiURL";

const API_URL = apiURL();

function Index({ transactions }) {
  return (
    <div className="container">
      <h2 className="mt-3">Transactions</h2>
      <div className="row mt-3">
        <div className="row mt-3">
          <div className="col-sm">
            <Transactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
