import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery } from "@apollo/client";
import ListItem from "./ListItem";

const getPassenger = gql`
    query MyQuery {
      passenger {
        id
        nama
        umur
        jenis_kelamin
      }
    }
  `;

const Home = () => {
  const initialData = [
    {
      id: uuidv4(),
      nama: "Yoga",
      umur: 22,
      jenisKelamin: "Pria",
    },
    {
      id: uuidv4(),
      nama: "Ria",
      umur: 19,
      jenisKelamin: "Wanita",
    },
    {
      id: uuidv4(),
      nama: "Fahmi",
      umur: 25,
      jenisKelamin: "Pria",
    },
    {
      id: uuidv4(),
      nama: "Lala",
      umur: 21,
      jenisKelamin: "Wanita",
    },
    {
      id: uuidv4(),
      nama: "Ivan",
      umur: 25,
      jenisKelamin: "Pria",
    },
  ];

  

  const {loading, data} = useQuery(getPassenger);
  if (loading) return (
<div>
Loading...
</div>
  )
  /* const [dataPassenger, setDataPassenger] = useState(initialData); */

  /* const hapusPengunjung = useCallback(
    (id) => {
      /* this.setState({    
            data: [      
                ...this.state.data.filter(item => {        
                    return item.id !== id;      
                })    
            ]  
        }); 
      setDataPassenger(dataPassenger.filter(((ListItem) => ListItem.id !== id))) */
      /* setDataPassenger(dataPassenger.filter((ListItem) => ListItem.id !== id));
    },
    [dataPassenger]
  ); */

  /* const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    setDataPassenger([...dataPassenger, newData]);
  }; */

  return (
    <div>
      <Header />
      <ListPassenger
        /* passenger={dataPassenger} */
        /* deletePassenger={hapusPengunjung} */
        tambahPessanger = {data}
      />
      <PassengerInput />
      {/* <PassengerInput addPassenger={tambahPengunjung} /> */}
    </div>
  );
};
export default Home;
