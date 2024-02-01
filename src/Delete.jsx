import React, { useState } from 'react'
import oquvchilar from './Api'
const Delete = () => {
    const [data, setData] = useState(oquvchilar) 
    const ochir = (tut) => {
        let yangiData = data.filter((value) => value.id !== tut)
        setData(yangiData)
    }

    // const qidir = (e) => { 
    //     let yangiMalumot = oquvchilar.filter((value) => value[turi].toLocaleLowerCase().includes(e.targer.value).toLocaleLowerCase())
    //     setData(yangiMalumot)
    // }
    const qidir = (e) => {
        let yangiMalumot = oquvchilar.filter((value) =>
            value.ism.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        );
        setData(yangiMalumot);
    };

    return (
        <div>
            <input className='regg' onChange={qidir} type="text" placeholder='qidir' /> <br />

            <br />
            <table border={1} cellPadding={10}>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ism</th>
                        <th>Activity</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((value, index) => {
                            return (
                                <tr key={value.id} >
                                    <th>{index + 1}</th>
                                    <th>{value.ism}</th>
                                    <th onClick={() => ochir(value.id)}><button>delete</button></th>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Delete