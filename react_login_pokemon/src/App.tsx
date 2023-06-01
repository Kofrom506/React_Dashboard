import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";


import { Avatar, Col, Divider, Row, Carousel, Form, Input, Button  } from 'antd'
import { iGetList, iPokemonList } from './interface';
import HomeView from './pages/HomeView';
import CrudTable from './pages/CrudTable';

function App() {
  <CrudTable/>
  // const [pokemonList, setPokemonList] = useState(temp)
  const [data, setData] = useState<[]>();
  const [name, setList] = useState<iGetList>();
  
  

  const[count, setCount] = useState(0);
  const [] = useState()
  const myArray = []
  const myNumbers = [4, 1, -20, -7, 5, 9, -6];
  const myNumbersCopy = myNumbers;
  const [numbers, setNumbers] = useState(myNumbers)
  
  



  
  
  const onTapLoginPage = () => {
    const onFinish = () => {
      console.log("Success Login");
    };
  }
  
  
  

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(response.data);
      
      const pokemonList =  response.data as iPokemonList

      // console.log(pokemonList);
      // setPokemonList(pokemonList.results);
      // setData(pokemonList.results);
      // setList(pokemonList.results)
      // setName(pokemonList.results[0].name);
      pokemonList.results.forEach(e => {
        console.log(e);  
        // setList(e.name)

      }
     );
     return pokemonList.results;
    }catch(error){
      console.error("Error Fetching Data", error);
     }

    //  var pokemons = fetchPokemonData();
    //  console.log(pokemons)
     
  //   const fetchPokemonDetail = async () => {
  //     try{
  //       var pokemonDetailList = []
  //       pokemonList.results.forEach (e => {
  //         const pokemonDetail = await axios.get(e.url);  
  //       })
  //       const response = await axios.get()
  //     }
  //   }
    
  //   } catch (error) {
  //     console.error("Error fetching Pokemon data:", error);
  //   }
  // };


  // const fetchPokemonDetail = async () => {
  //   try{
      
  //   }catch(error){
  //     console.error("Error Fetching Pokemon Detail", error);
  //   }
  // }
}


  return (
    <>
      <div>
      <HomeView/>
      <div style={{ padding: "50px" }}>
      <Row gutter={16}>
        <Col span={12}>
            
        <Avatar style={{background: "f56a00", verticalAlign: 'middle', justifyContent: 'flex-start'}} size = 'large'>
        Logo
          </Avatar>
          <div className="card">
          <button onClick={() => console.log("")}>
            Sign Up With Google
          </button>
          <button onClick={()=>fetchPokemonData()}>
            Get Pokemon
          </button>
          <>
          </>
          </div>
          <Divider orientation="center">Or Sign Up With Email</Divider>
          <Form name="loginForm" onFinish={()=>console.log("")}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Username Kosong" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password Kosong" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: 300, borderRadius: 10 }} >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col span={12}>
          <Carousel autoplay>
            <div>

              <h3>Image 1</h3>
            </div>
            <div>
              <h3>Image 2</h3>
            </div>
            <div>
              <h3>Image 3</h3>
            </div>
          </Carousel>
        </Col>


      </Row>
    </div>
        

      
      </div>
     
    </>
    
  )
}



export default App
