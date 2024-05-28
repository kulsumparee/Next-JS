import React from 'react'
import * as styled from '@/component/heroSection/form/Styled'

const FormContent = () => {
    return (

        <styled.FormContent className=" class p-8">
            <h1 className=" text-5xl font-bold  mb-6 text-center">Send an Inquiry</h1>
            <form>
                <div className=' lg:flex justify-between gap-5 sm:block'>
                    <div>
                        <label htmlFor="Name">Name: <span className=' text-red-500'>*</span></label>
                        <input
                            type="text"
                            required
                            className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone: <span className=' text-red-500'>*</span></label>
                        <input
                            type="tel"
                            required
                            className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
                        />
                    </div>
                </div>
                <label htmlFor="phone">Message: <span className=' text-red-500'>*</span></label>
                <textarea

                    type="tel"
                    required
                    className="w-full p-4 pb-24 mb-4 border rounded-md shadow-#000000 shadow-md "
                >

                </textarea>

                <div className=' justify-center text-center'>

                <button className=' w-[178px] h-[52px] rounded-md button'>Send Inquiry</button>
                </div>

            </form>
        </styled.FormContent>
    )
}

export default FormContent
