import react , {useState , useEffect} from 'react';

import axios from 'axios';

const Query = () =>{

    const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    
    const apiUrl = 'http://localhost:8000/api/v1/admin/query';

    const fetchData = async () => {
      try {
        
        const response = await axios.get(apiUrl);

      
        setQueryData(response.data.query);
        console.log(response.data);
        console.log(queryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   
    fetchData();
  }, []); 

    return (
        <>
            <div >
      <h1 > All Queries</h1>
      <ul  className="list-none p-0">
        {queryData.map((item , index) => (
          <li key={item._id}   className={`mb-4 p-2 ${index !== 0 ? 'border-t' : ''}`}>
            <strong>First Name:</strong> {item.firstname}<br />
            <strong>Last Name:</strong> {item.lastname}<br />
            <strong>Email:</strong> {item.email}<br />
            <strong>Message:</strong> {item.message}<br />
          </li>
        ))}
      </ul>
    </div>

        </>
    )

}

export default Query;
