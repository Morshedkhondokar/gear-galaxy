import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-10 justify-center items-center border h-[400px]'>
            <h2 className='text-4xl'>Page Not Found</h2>
            <Link to='/'><button className='btn'>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;