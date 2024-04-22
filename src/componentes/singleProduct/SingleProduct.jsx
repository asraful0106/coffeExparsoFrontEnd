import { IoEye, IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleProduct = ({ id, name, chef, price, img, remainingCoffee }) => {

    const handleClick = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            });
                            remainingCoffee(id);
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                                footer: '<a href="#">Why do I have this issue?</a>'
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-12 bg-[#F5F4F1] max-w-[648px] rounded">
            <div className="flex items-center justify-evenly gap-4">
                <img className='max-w-[165px]' src={img} alt="" />
                <div>
                    <p className='text-[#5C5B5B] text-xl'><span className='text-[#1B1A1A] font-bold'>Name: </span>{name}</p>
                    <p className='text-[#5C5B5B] text-xl my-1'><span className='text-[#1B1A1A] font-bold'>Chef: </span>{chef}</p>
                    <p className='text-[#5C5B5B] text-xl'><span className='text-[#1B1A1A] font-bold'>Price: </span>{price} 200 Taka</p>
                </div>
                <div>
                    <Link to={`/coffee-detail/${id}`}>
                        <div className="bg-[#D2B48C] py-2 px-2 rounded">
                            <IoEye className="text-white" />
                        </div></Link>
                    <Link to={`/update-coffee/${id}`}>
                        <div className="bg-[#3C393B] py-2 px-2 rounded my-4">
                            <IoPencil className="text-white" />
                        </div>
                    </Link>
                    <div onClick={() => handleClick(id)} className="bg-[#EA4744] py-2 px-2 rounded">
                        <MdDelete className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;