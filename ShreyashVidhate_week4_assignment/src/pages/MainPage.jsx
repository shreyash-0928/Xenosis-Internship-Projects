import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import JobCards from "../components/JobCards";
import { MdWorkOutline } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function MainPage() {
  let { state } = useLocation();
  let currPage = state == null ? 0 : state.pagination;
  const [query, setQuery] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");
  const [pagination, setPagination] = useState(currPage);

  const [actualQuery, setActualQuery] = useState("");
  const [actualLocation, setActualLocation] = useState("");

  const [apiData, setApiData] = useState();
  const [error, setError] = useState(null);

  const HandleSubmit = async (event) => {
    event.preventDefault();
    setActualQuery(query);
    setActualLocation(location);

    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: `${query || "Full Stack Developer"} in ${location || "India"}`,
        page: "1",
        num_pages: "15",
        employment_types: fullTime ? "FULLTIME" : "PARTTIME",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_SECRET_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };
    try {
      const res = await axios.request(options);
      setApiData(res.data.data);
    } catch (err) {
      setError(err);
    }
  };

  const handleFullTime = () => setFullTime((prev) => !prev);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query: `${actualQuery || "Full Stack Developer"} in ${
            actualLocation || "India"
          }`,
          page: "1",
          num_pages: "15",
          employment_types: fullTime ? "FULLTIME" : "PARTTIME",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_SECRET_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      };
      try {
        const res = await axios.request(options);
        setApiData(res.data.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [fullTime, actualQuery, actualLocation]);

  return (
    <div className="bg-background min-h-screen">
      <div className="font-Poppins max-w-full p-4 text-xl md:p-8 cursor-pointer">
        <b>Jobs</b> Portal
      </div>
      {error && (
        <div className="bg-primary text-sm rounded text-white font-Poppins max-w-full p-4 mx-4 mb-4 md:p-8 md:mx-8 md:mb-8">
          <div>
            <div className="text-black">{error.code}</div>
            <br />
            {error.response &&
              error.response.data &&
              error.response.data.message}
            <br />
            <br />
            Note:{" "}
            <i>
              Due to exceeded monthly quota for requests, further requests are
              unavailable for the month.
            </i>
            <b>
              <u>Currently displaying demo data.</u>
            </b>
          </div>
        </div>
      )}
      <header className="font-Roboto max-w-full mx-4 h-32 rounded-lg bg-jobs-background bg-left-bottom flex items-center justify-center md:mx-8 md:bg-cover">
        <form
          onSubmit={HandleSubmit}
          className="bg-white flex items-center justify-around gap-0 rounded-lg m-10 md:w-2/3 md:gap-8 sm:gap-4"
        >
          <MdWorkOutline className="flex-none text-sm m-2 sm:m-4 text-gray-400 sm:text-xl" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Title, companies, expertise or benefits"
            className="outline-0 text-sm grow font-Roboto w-full"
          />
          <input
            type="submit"
            className="bg-primary text-white px-4 py-2 text-sm rounded-md flex-none m-1 sm:px-6 sm:py-3 sm:text-lg"
          />
        </form>
      </header>
      <main className="flex flex-col w-full md:flex-row">
        <form className="p-4 py-8 font-Roboto text-secondary text-sm font-normal w-full md:pl-8 md:pr-0 md:w-1/3 sm:text-lg">
          <input
            type="checkbox"
            checked={fullTime}
            className="w-4 h-4 mx-3 mb-4"
            onChange={handleFullTime}
          />{" "}
          Full Time
          <br />
          <label className="font-bold text-gray-400">Location</label>
          <div className="flex items-center bg-white shadow rounded p-4 my-4 gap-2 w-full">
            <BiWorld />
            <input
              type="text"
              className="text-sm outline-none grow w-full"
              placeholder="City, state, zip code or country"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          {["India", "London", "New York", "Berlin"].map((city) => (
            <label key={city}>
              <input
                type="radio"
                value={city}
                name="location"
                className="w-4 h-4 mx-3 mb-4"
                onChange={(e) => setLocation(e.target.value)}
              />{" "}
              {city}
              <br />
            </label>
          ))}
        </form>
        <section className="flex flex-col p-4 font-Roboto w-full items-center md:p-8">
          {apiData ? (
            apiData.map((job) => <JobCards key={job.job_id} job={job} />)
          ) : (
            <p>No job listings available at the moment.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default MainPage;
