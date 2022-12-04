import React, { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddSlider = () => {
    const [sliders, setSliders] = React.useState([]);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/sliders')
            .then(res => res.json())
            .then(data => {
                setSliders(data)
            })
    }, [refresh])

    const addSlider = e => {
        e.preventDefault();
        const image = e.target.image.value;
        fetch('http://localhost:5000/slider', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                image,
                email: ""
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                } else {
                    toast.error(data.message)
                }
                setRefresh(pre => !pre)
            })
    }

    const handleDelete = id => {
        const agree = window.confirm('Are Sure Delete This Slider?')
        if (!agree) {
            return
        }


        fetch(`http://localhost:5000/slider?id=${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    setRefresh(pre => !pre)
                } else {
                    toast.error(data.message)
                }
            })
    }


    return (
        <div>
            <form className='flex gap-2 my-5' onSubmit={addSlider}>
                <input name='image' type="text" placeholder="Image link here" className="input input-bordered input-info w-full max-w-xs" required />
                <button type='submit' className='btn bg-rose-400'>ADD</button>
            </form>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    sliders.map(slider => {
                        return <div className=' rounded-lg relative'>
                            <img src={slider.image} alt="" className='w-full rounded-lg h-full object-cover' />
                            <button onClick={() => handleDelete(slider._id)} className='absolute z-50 btn btn-sm btn-secondary bottom-1 right-1'>
                                DELETE
                            </button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AddSlider;