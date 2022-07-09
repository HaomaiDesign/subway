import { useState, useEffect } from "react";

export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetch(`https://haomai.com.ar/api/products.php?action=all`,{ 
    headers : {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
        'Content-Type': 'application/json'
    }
  })
   .then((response) => console.log(response));
 }, []);

 return <div className="App">App</div>;
}
