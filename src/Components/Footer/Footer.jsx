import React from 'react'
import Logo from '../Logo'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='hidden lg:flex items-center justify-between space-x-20 p-4 bg-gradient-to-r from-blue-300 to-indigo-500'>
        <Logo className='h-10 w-10 rounded-full'/>

        <nav className='flex flex-row items-center justify-center flex-wrap gap-6 font-semibold text-white'>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
            <Link to="/signup"> Join Us</Link>
        </nav>
        <div></div>
    </footer>





    // <footer className='relative bottom-0 mt-auto w-full text-white py-8 bg-gradient-to-b from-blue-400 to-indigo-500'>
    //     <div className='mx-auto flex flex-wrap justify-between'>
    //         <div className='pl-4 sm:w-4/12'>
    //             <div className="flex">
    //                 <Logo className='h-10 w-10 mr-3 rounded-full'/>
    //                 <h2 className='font-bold text-2xl mb-4'>Code-Node</h2>
    //             </div> 
                
                
    //             <p className='text-sm mb-5'>Hassle-free blogging platform that developers and teams love.</p>
    //             <div className='flex flex-row'>
    //             <svg className='w-6 fill-current cursor-pointer text-white mr-2' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>

    //             <svg className='w-6 fill-current cursor-pointer text-white mr-2' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>

    //             <svg className='w-6 fill-current cursor-pointer text-white mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>

    //             <svg className='w-6 fill-current cursor-pointer text-white' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
    //             </div>
    //         </div>

    //         {/* First Column */}
    //         <div className='w-full sm:w-1/4 md:w-1/4 lg:w-1/6 px-4 mb-4'>
    //             <h2 className='text-xl font-bold mb-4'>Products</h2>
    //             <ul>
    //                 <li><a href="#" className='block hover:text-gray-400'>Pricing</a></li>
    //                 <li><a href="#" className='block hover:text-gray-400'>CMS</a></li>
    //                 <li><a href="#" className='block hover:text-gray-400'>Open Source Starter Kit</a></li>
    //             </ul>
    //         </div>

    //         {/* Column 2 */}
    //         <div className='w-full sm:w-1/4 md:w-1/4 lg:w-1/6 px-4 mb-4'>
    //             <h2 className='text-xl font-bold mb-4'>Company</h2>
    //             <ul>
    //                 <li><a href="#" className='block hover:text-gray-400'>About Code-Node</a></li>
    //                 <li><a href="#" className='block hover:text-gray-400'>Careers</a></li>
    //                 <li><a href="#" className='block hover:text-gray-400'>Changelog</a></li>
    //             </ul>
    //         </div>
    //         {/* Column 3 */}
    //         <div className='w-full sm:w-1/4 md:w-1/4 lg:w-1/6 px-4 mb-4'>
    //             <h2 className='text-xl font-bold mb-4'>Contact</h2>
    //             <ul>
    //                 <li><a href="#" className='block hover:text-gray-400'>Contact Us</a></li>
    //                 <li><a href="#" className='block hover:text-gray-400'>Support</a></li>
    //                 <li><a href="#" className='block hover:text-gray-400'>FAQ</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </footer>
  )
}

export default Footer