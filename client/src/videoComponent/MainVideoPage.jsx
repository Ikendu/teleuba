import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function MainVideoPage() {
  //query string finder hpok
  const [searchParam, setSearchParams] = useSearchParams();

  useEffect(() => {
    //grab the token out of the string
    const token = searchParam.get("token");
    console.log(token);
    const fetchValidatedLink = async () => {
      const resp = await axios.post("https://localhost:4000/validate-link", {
        token,
      });
      console.log(resp);
    };
    fetchValidatedLink();
  }, []);

  return (
    <div>
      <h1>Main Video page</h1>
    </div>
  );
}
export default MainVideoPage;
