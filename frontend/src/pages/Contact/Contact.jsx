import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from '../../components';
import { useForm, FormProvider } from "react-hook-form"

const Contact = () => {
    const methods = useForm()
    const notify = () => toast('👻 Message Send!');

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
        notify();
    })

    return (
        <FormProvider {...methods}>
            <form
                id='contact'
                method='post'
                onSubmit={e => e.preventDefault()}
                noValidate>
                <div className="wrapper">
                    <h1>Contact <span>Here</span></h1>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Your name"
                    />
                    <Input
                        type="email"
                        id="email"
                        placeholder="example@gmail.com"
                    />
                    <Input
                        type="phone"
                        id="phone"
                        placeholder="+359"
                    />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Type here...' />
                    <button type='submit' onClick={onSubmit}>Send Message</button>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />

            </form>
        </FormProvider>
    )
}

export default Contact