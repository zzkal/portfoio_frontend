import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext({
  data: {},
  isLoading: false,
  setIsLoading: () => false,
  setData: () => false,
});

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [profile, setProfile] = useState({});
  const [about, setAbout] = useState({});
  const [expertise, setExpertise] = useState({});
  const [projects, setProjects] = useState({});
  const [jobs, setJobs] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const profileResponse = await fetch(
          'https://www.andres-dev-portfolio.site/api/profiles/1'
        );
        const profileData = await profileResponse.json();
        setProfile(profileData);

        const aboutResponse = await fetch(
          'https://www.andres-dev-portfolio.site/api/abouts/1'
        );
        const aboutData = await aboutResponse.json();
        setAbout(aboutData);

        const expertiseResponse = await fetch(
          'https://www.andres-dev-portfolio.site/api/expertises'
        );
        const expertiseData = await expertiseResponse.json();
        setExpertise(expertiseData['hydra:member']);

        const projectResponse = await fetch(
          'https://www.andres-dev-portfolio.site/api/projects'
        );
        const projectsData = await projectResponse.json();
        setProjects(projectsData['hydra:member']);

        const jobsResponse = await fetch(
          'https://www.andres-dev-portfolio.site/api/jobs'
        );
        const jobsData = await jobsResponse.json();
        setJobs(jobsData['hydra:member']);

        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const value = {
    isLoading,
    profile,
    about,
    expertise,
    projects,
    jobs,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
