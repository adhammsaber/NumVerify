import React from 'react'
import { useLocation } from 'react-router-dom'
import RequireAuth from '../Components/HOC/RequireAuth';
import './SearchResults.css'
function SearchResults() {
    const location = useLocation();
  return (
    <div>
        <div class="cardBox">
            <div class="card-search">
                <div class="h4">Phone Number : {location.state.number+""}</div>
            
                <div class="content">
                    <h2>Country Name :{location.state.country_name+""}</h2>
                    <h2>Validity :{location.state.valid+""}</h2>
                    <h2>Country Code : {location.state.country_code+""}</h2>
                    <h2>Country Prefix : {location.state.country_prefix+""}</h2>
                    <h2>International Format : {location.state.international_format+""}</h2>
                    <h2>Line Type : {location.state.line_type+""}</h2>
                    <h2>Local Format : {location.state.local_format+""}</h2>
                    <h2>Location : {location.state.location+""}</h2>

                </div>
            </div>
            </div>
    </div>
  )
}

export default RequireAuth(SearchResults)