import axios from 'axios';
import React, { useState, useEffect } from 'react';

const LeaderBoard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/api/result`);
            console.log(response.data);
            const filteredData = response.data.filter(entry => entry.points !== null);

            // Sort filtered data based on points in descending order
            const sortedData = filteredData.sort((a, b) => {
                if (a.points > b.points) return -1;
                if (a.points < b.points) return 1;
                // return 0;
            });
            setData(sortedData);
            // setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-4">Leaderboard</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Rank</th>
                            <th className="border border-gray-300 px-4 py-2">Username</th>
                            <th className="border border-gray-300 px-4 py-2">Attempts</th>
                            <th className="border border-gray-300 px-4 py-2">Points</th>
                            <th className="border border-gray-300 px-4 py-2">Passed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
                                <td className="border border-gray-300 px-4 py-2">{idx+1}</td>
                                <td className="border border-gray-300 px-4 py-2">{entry.username}</td>
                                <td className="border border-gray-300 px-4 py-2">{entry.attempts}</td>
                                <td className="border border-gray-300 px-4 py-2">{entry.points}</td>
                                <td className="border border-gray-300 px-4 py-2">{entry.achieved=="Passed" ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderBoard;
