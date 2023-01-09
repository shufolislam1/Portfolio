import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-red-600 font-serif mb-4'>Contact Me</h1>
            <div className='flex'>
                <form action="" method="post">
                    <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" /> <br />
                    <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" /> <br />
                    <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" /> <br />
                    <textarea className="textarea textarea-error" placeholder="Bio"></textarea> <br />
                    <button type='submit' className="btn btn-active">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;