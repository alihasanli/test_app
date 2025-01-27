import React from 'react'
import { useForm } from "react-hook-form"

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const CustomInput = ({type, name, placeholder}) => {
      return (
        <div className='flex flex-col'>
            <label htmlFor={name} className='text-white mb-1'>{placeholder}</label>
            <input 
                type={type}
                id={name}
                placeholder={placeholder}
                className='rounded-lg border border-[#C8C8C8] bg-[#646464] p-4 focus:outline-none text-white'
                {...register(name, { required: `${name} is required` })}
            />
        </div>
      )
    }


    return (
        <div className=''>
            <div className='w-100 m-4 bg-[#363636] p-4 rounded-lg'>
                <h1 className='text-[#FF7B25] text-[22px] text-center mb-4 font-semibold	'>Registration <span className='text-white'>form</span></h1>
                <h2 className='text-white text-[20px] font-semibold mb-2'>From Invention to Innovation: Commercializing Patented Technologies</h2>
                <div className='text-white font-semibold text-sm mb-4'>
                    <p className=''>Next community event by SABAH.HUB is the workshop in " From Invention to Innovation: <span className='font-medium'>Commercializing Patented Technologies " topic.</span></p>
                    <p>Date & venue: <span className='font-medium'>13 January 19:00</span></p>
                    <p>Address: <span className='font-medium'>SABAH.HUB office, 5 Gurban Abbasov (Bayıl Bay)</span></p>
                    <p>Event details: <span className='font-medium'></span></p>
                    <p>Duration: <span className='font-medium'>Between 1.5 and 2 hours</span></p>
                    <p>Admission: <span className='font-medium'>Free of charge</span></p>
                    <p>Event language: <span className='font-medium'>Azerbaijani</span></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <CustomInput type='text' name='name' placeholder='First name' />
                        <CustomInput type='text' name='surname' placeholder='Surname' />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </form>
            </div>
        </div>
    )
}

export default Form