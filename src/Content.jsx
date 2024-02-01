import React, { useEffect, useState } from 'react'
import Animation from '../Animation';
import Card from './Card';
// import { ESLint } from 'eslint';
// ESLint

const Home = () => {

  const [data, setData] = useState([])
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
    fetch('https://reqres.in/api/users?delay=3')
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        else {
          throw new Error("Apida hatolik bor")
        }

      })
      .then(info => { setData(info.data) })
      .catch(xato => console.log(xato))
      .finally(() => setAnimation(false))

  }, [])


  return (

    animation 
    ? 
    <Animation />
      :
      <div className='cards'>
        {
          data.map((value) => {
            return (
              <Card key={value.id} ism={value.first_name} familya={value.last_name} rasm={value.avatar} />
            )
          })
        }
      </div>
  )
}

export default Home 