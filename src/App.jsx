import { useEffect, useState } from "react";
import Jobinfo from "./Jobinfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0)


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

  

  if(isLoading){
    return <section className="jobs-center">
              <div className="loading">
              </div>
    </section>
  }

  // const buttonInfo =(id)=>{
  //   console.log(id);
  //   const newArray = jobs.filter((job)=>)
  // }
  return <section className="jobs-center">
        {/* { button container } */}
        <BtnContainer 
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        />
        <Jobinfo jobs={jobs} currentItem={currentItem}/>
  </section>
};
export default App;
