import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='Navbar bg-teal-600 flex justify-between py-3 px-5 '>
            <h1 className='text-white font-bold font-mono cursor-pointer text-2xl'>CodingNepal</h1>
        
            <ul className='flex gap-7'>
                
                <li className='text-white font-bold font-mono text-xl'><Link to="/Home">Home</Link></li>
                <li className='text-white font-bold font-mono text-xl'><Link to="/contact">Carusel</Link></li>
                <li className='text-white font-bold font-mono text-xl'><Link to="/portfolio">Crud</Link></li>
                <li className='text-white font-bold font-mono text-xl'><Link to="/login"> Log in</Link></li>
            </ul>
        </div>

    )
}

export default Navbar