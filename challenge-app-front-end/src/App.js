import './App.css';
import ChallengeList from './components/ChallengeList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddChallenge from './components/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [challenges, setChallenges] = useState([]);
  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://challengeapp2-env.eba-shfw4zac.us-west-2.elasticbeanstalk.com/challenges')
      setChallenges(response.data)
    } catch (error) {
      console.error("Error fetching the challenges", error)
    }

  };
  // talking with backend APIs
  useEffect(() => {

    fetchChallenges(); // call , this function is responsible to talk to the backend
  }, [])

  const refreshChalengeListAfterChallengeAdded = () => {
    fetchChallenges();
  }
  return (
    <div className="container mt-5">
      <h1 className='text-center mb-4'>Monthly Challenges</h1>
      <AddChallenge onChallengeAdded={refreshChalengeListAfterChallengeAdded} />
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
