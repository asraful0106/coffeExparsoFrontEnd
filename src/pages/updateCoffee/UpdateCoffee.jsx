import { IoIosArrowRoundBack } from "react-icons/io";
import "./Updateoffee.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
    const { id } = useParams('id');
    const [name, setName] = useState('');
    const [chef, setChef] = useState('');
    const [supplier, setSupplier] = useState('');
    const [taste, setTaste] = useState('');
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/coffee/${id}`)
            .then(res => res.json())
            .then(data => {
                setName(data.name);
                setChef(data.chef);
                setSupplier(data.supplier);
                setTaste(data.test);
                setCategory(data.category);
                setDetails(data.details);
                setPhoto(data.photo);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const input_name = from.name.value;
        const input_supplier = from.supplier.value;
        const input_category = from.category.value;
        const input_chef = from.chef.value;
        const input_taste = from.taste.value;
        const input_details = from.details.value;
        const input_photo = from.photo.value;

        if (name !== input_name || supplier !== input_supplier || category !== input_category || chef !== input_chef || taste !== input_taste || details !== input_details || photo !== input_photo) {
            const updatedData = {
                name: input_name,
                supplier: input_supplier,
                category: input_category,
                chef: input_chef,
                test: input_taste,
                details: input_details,
                photo: input_photo
            }

            fetch(`http://localhost:5000/coffee/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire({
                            icon: "success",
                            title: "Updated!",
                            text: "Your product has been updated.",
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    }
                })
        } else {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Please Change Something to update the data!"
            });
        }
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
                    <h1 className="rancho-regular text-2xl text-center mb-8 text-[#374151]">Update Existing Coffee Details</h1>
                    <div className="flex items-center justify-center">
                        <p className="text-lg text-[#1B1A1ACC] text-center mb-8 max-w-[932px]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="flex items-center justify-around w-full gap-8">
                            <div className="w-1/2">
                                <div className="form-control">
                                    <label className="label font-medium text-[#1B1A1ACC]">Name</label>
                                    <input type="text" placeholder="Enter coffee name" className="input" name="name" required defaultValue={name} />
                                </div>
                                <div className="form-control">
                                    <label className="label font-medium text-[#1B1A1ACC]">Supplier</label>
                                    <input type="text" placeholder="Enter coffee supplier" className="input" name="supplier" required defaultValue={supplier} />
                                </div>
                                <div className="form-control">
                                    <label className="label font-medium text-[#1B1A1ACC]">Category</label>
                                    <input type="text" placeholder="Enter coffee category" className="input" name="category" required defaultValue={category} />
                                </div>
                            </div>

                            <div className="w-1/2">
                                <div className="form-control">
                                    <label className="label font-medium text-[#1B1A1ACC]">Chef</label>
                                    <input type="text" placeholder="Enter coffee chef" className="input" name="chef" required defaultValue={chef} />
                                </div>
                                <div className="form-control">
                                    <label className="label font-medium text-[#1B1A1ACC]">Taste</label>
                                    <input type="text" placeholder="Enter coffee taste" className="input" name="taste" required defaultValue={taste} />
                                </div>
                                <div className="form-control">
                                    <label className="label font-medium text-[#1B1A1ACC]">Details</label>
                                    <input type="text" placeholder="Enter coffee details" className="input" name="details" required defaultValue={details} />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label font-medium text-[#1B1A1ACC]">Photo</label>
                            <input type="text" placeholder="Enter photo URL" className="input" name="photo" required defaultValue={photo} />
                        </div>
                        <button className="bg-[#D2B48C] rancho-regular text-[#331A15] border-[2px] border-[#331A15] rounded-[5px] py-[2px] w-full mt-6">
                            Update Coffee Details
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;