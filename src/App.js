import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [matches, setMatches] = useState([])
  useEffect(()=>{
    async function getAllMatches(){
      try {
        const matches= await axios.get("http://127.0.0.1:8000/api/matches/")
        console.log(matches.data)
        setMatches(matches.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllMatches()
  }, [])

  const [teams, setTeams] = useState([])
  useEffect(()=>{
    async function getAllTeams(){
      try {
        const teams= await axios.get("http://127.0.0.1:8000/api/teams/")
        console.log(teams.data)
        setTeams(teams.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllTeams()
  }, [])

  const [players, setPlayer] = useState([])
  useEffect(()=>{
    async function getAllPlayer(){
      try {
        const players= await axios.get("http://127.0.0.1:8000/api/players/")
        console.log(players.data)
        setPlayer(players.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllPlayer()
  }, [])

  return(
    <div className="App">
      <h1 className="text-center p-3 mb-2 p-3 mb-2 bg-dark  text-white border border-dark border-5">Football Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.id} className ="text-warning bg-prime">
            {match.home_team.teamname} vs {match.away_team.teamname} - {new Date(match.match_date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <h1 className='text-center p-3 mb-2 p-3 mb-2 bg-dark  text-white border border-dark border-5'> Teams </h1>
      <ul>
      {teams.map(team => (
          <li key={team.id} className ="text-success ">
           <p>  {team.teamname} </p>
          </li>
        ))}
      </ul>

      <h1 className='text-center p-3 mb-2 p-3 mb-2 bg-dark  text-white border border-dark border-5'> Player </h1>
      <ul>
      {players.map(player => (
          <li key={player.id} className ="text-info ">
           <p> {player.Playername} playing for {player.team.teamname}, country : {player.team.area.areaname} and position is {player.position} </p>
          </li>
        ))}
      </ul>

      
    </div>
  )
}

export default App;