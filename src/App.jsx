import { useEffect, useState } from "react";
import Jobinfo from "./Jobinfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async()=>{
    setIsLoading(true)
    const response = await fetch(url);
    const newJobs = await response.json()
    setJobs(newJobs);
    setIsLoading(false);

  }

  useEffect(()=>{
    fetchJobs();
  }, [])

  console.log(jobs);

  if(isLoading){

    return <section className="jobs-center">
              <div className="loading">
              </div>
    </section>
  }
  return <section className="jobs-center">
        {/* { button container } */}
        <BtnContainer jobs={jobs} />
        <Jobinfo jobs={jobs}/>
  </section>
};
export default App;
