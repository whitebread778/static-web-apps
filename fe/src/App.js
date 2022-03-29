import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [allToons, setAllToons] = useState([])

  useEffect(() => {
    async function getToons() {

        const resp = await fetch(`/api/toons`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"    
            }
        });
        const data = await resp.json();
        console.log(data);
        setAllToons(data)
    }
    getToons();
    console.log(allToons);
  }, [])

  return (
    <div className="App">
      <h1>Toons</h1>
      <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Occupation </th>
                    </tr>
                </thead>
                <tbody>
                    {allToons
                        ? allToons.map((toon, index) => (
                                <tr key={index}>
                                    <td> {toon.id} </td>
                                    <td>
                                        {toon.firstName} {toon.lastName}
                                    </td>
                                    <td> {toon.occupation} </td>
                                </tr>
                          ))
                        : null}
                </tbody>
            </table>    </div>
  );
}

export default App;
