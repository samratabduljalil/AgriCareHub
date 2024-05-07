
import { NavLink } from 'react-router-dom';

function Modal({ onClose }) {

    return (
        <>


            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">


                <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 text-white">
                    <h1>আপনার এ্যাকাউন্টে প্রবেশ করুন অন্যথায় রোগ নির্ণয় করতে পারবেন না। এ্যাকাউন্টে প্রবেশ  করতে নিচের 'প্রবেশ' বোতামে চাপ দিন।</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="mt-4 w-full bg-green-600 px-2 py-1 rounded-sm text-xl" onClick={onClose}>বন্ধ করুন</button>
                        <NavLink to="/UserLogin"> <button className="mt-4 w-full bg-green-600 px-2 py-1 rounded-sm text-xl">প্রবেশ </button></NavLink>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Modal