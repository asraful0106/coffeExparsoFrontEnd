import { IoIosArrowRoundBack } from "react-icons/io";
import "./AddNewCoffee.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AddNewCoffee = () => {

    // ----------Hendeling Submit From----------------
    const handelSubimt = (e) =>{
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const supplier = from.supplier.value;
        const category = from.category.value;
        const chef = from.chef.value;
        const test = from.test.value;
        const details = from.details.value;
        const photo = from.photo.value;

        const newCoffee = {name, supplier, category, chef, test, details, photo};

        // ---------------Sending data to the Server---------------
        fetch('http://localhost:5000/add-new-coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        });
        e.target.reset();
    }


    return (
        <div className="bg_image_addNewCoffee w-full flex items-center justify-center mb-20">
            <div className="w-3/4">
                <Link to={'/'}>
                    <button className="py-2 px-3 hover:bg-[#D2B48C] text-center rancho-regular text-2xl rounded-lg mt-4 text-[#374151]">
                        <IoIosArrowRoundBack className="text-2xl inline text-center text-[#374151]" />
                        Back to home
                    </button>
                </Link>
                <div className="p-20 bg-[#F4F3F0] mt-4">
                    <h1 className="rancho-regular text-2xl text-center mb-8 text-[#374151]">Add New Coffee</h1>
                    <p className="text-lg text-[#1B1A1ACC] text-center mb-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handelSubimt} className="w-full">
                        <div className="flex items-center justify-around w-full gap-8">
                            <div className="w-1/2">
                                <div className="form-control">
                                    <label class="label font-medium text-[#1B1A1ACC]">Name</label>
                                    <input name="name" type="text" placeholder="Enter coffee name" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label class="label font-medium text-[#1B1A1ACC]">Supplier</label>
                                    <input name="supplier" type="text" placeholder="Enter coffee supplier" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label class="label font-medium text-[#1B1A1ACC]">Category</label>
                                    <input name="category" type="text" placeholder="Enter coffee category" className="input" required />
                                </div>
                            </div>

                            <div className="w-1/2">
                                <div className="form-control">
                                    <label class="label font-medium text-[#1B1A1ACC]">Chef</label>
                                    <input name="chef" type="text" placeholder="Enter coffee chef" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label class="label font-medium text-[#1B1A1ACC]">Taste</label>
                                    <input name="test" type="text" placeholder="Enter coffee taste" className="input" required />
                                </div>
                                <div className="form-control">
                                    <label class="label font-medium text-[#1B1A1ACC]">Details</label>
                                    <input name="details" type="text" placeholder="Enter coffee details" className="input" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label class="label font-medium text-[#1B1A1ACC]">Photo</label>
                            <input name="photo" type="text" placeholder="Enter photo URL" className="input" required />
                        </div>
                        <button className="bg-[#D2B48C] rancho-regular text-[#331A15] border-[2px] border-[#331A15] rounded-[5px] py-[2px] w-full mt-6">
                            Add Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewCoffee;