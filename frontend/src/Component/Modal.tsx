
import { NavLink } from 'react-router-dom';

function Modal({ onClose }) {

    return (
        <>


            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">


                <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 text-white">
                    <h1>আপনার কি আপনার ফসলের রোগের তথ্য গুলো সংরক্ষণ করতে চান?</h1>
                    <div className="flex items-center justify-center gap-10">
                    <NavLink to="/ChoseCrop"><button className="mt-4 w-full bg-black px-2 py-1 rounded-sm" onClick={onClose}>না</button></NavLink>
                        <NavLink to="/UserLogin"> <button className="mt-4 w-full bg-black px-2 py-1 rounded-sm">হ্যা</button></NavLink>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Modal