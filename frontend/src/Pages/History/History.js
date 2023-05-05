import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './History.css'
import RequireAuth from '../../Components/HOC/RequireAuth';
function History() {
  const [history, setHistory] = useState([]);
  const [firstload,setFirstLoad] = useState(0);
  const [filterNumber,setfilterNumber] = useState();
  const [filterDate,setfilterDate] = useState();
  const [filterStatus,setfilterStatus] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/gethistory');
      if(firstload==0)
      {
          setHistory(response.data);
          setFirstLoad(1)
      }
    }

    fetchData();
  }, []);



  const numberhandler= async ()=>{
    const result = await axios.get(`http://localhost:5000/filter/number/${filterNumber}`)
    setHistory(result.data)
  }

  const datehandler=async()=>{
    const result = await axios.get(`http://localhost:5000/filter/date/${filterDate}`)
    setHistory(result.data)
  }

  const statushandler=async()=>{
    const result = await axios.get(`http://localhost:5000/filter/status/${filterStatus}`)
    setHistory(result.data)
  }

  return (
    <div>
        <button class="btn-history" type="button" onClick={numberhandler}>
            <strong>Filter By Number</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            </button>

            <div class="numberinput">
                <input type="input" class="form__field" placeholder="enter the number" required="" onChange={(e) => setfilterNumber(e.target.value)}/>
                <label for="name" class="form__label">Phone Number</label>
            </div>


            <button class="btn-history" type="button" onClick={datehandler} >
            <strong>Filter By Date</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            </button>

            <div class="dateinput">
                <input type="input" class="form__field" placeholder="enter the date like 05-05-2023" required="" onChange={(e) => setfilterDate(e.target.value)}/>
                <label for="name" class="form__label">example : 05-05-2023</label>
            </div>

            <button class="btn-history" type="button" onClick={statushandler} >
            <strong>Filter By Status</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            </button>

            <div class="statusinput">
                <input type="input" class="form__field" placeholder="enter the status (true or false)" required="" onChange={(e) => setfilterStatus(e.target.value)}/>
                <label for="name" class="form__label"> example : true or false</label>
            </div>
      <ul>
        {history.map((item) => (
            <div class="plan-card">
            <h2>Number Verfication</h2>
            <div class="etiquet-price">
                <p>{item.Number}</p>
                <div></div>
            </div>
            <div class="benefits-list">
                <ul>
                    <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                        </svg><span>Valid : {item.status}</span></li>
                    <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                        </svg><span>Date : {item.date}</span></li>
                </ul>
            </div>
        </div>
        ))}
      </ul> 
     </div> 
  );
}

export default RequireAuth(History);
