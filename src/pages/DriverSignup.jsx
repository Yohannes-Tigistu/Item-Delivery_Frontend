import React , {useState , useContext} from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext'
const DriverSignup = () => {
 const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const data = watch(); // Watch all inputs to check for password match
  
   
  const onSubmit = (formData) => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    

    console.log(formData);
    alert('Data has been recorded');
     window.location.href = '/pages/home'; 
  };

  const {serviceProvider} = useContext(AuthContext);
    
  serviceProvider(FormData , data , )
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-8 bg-white rounded-lg shadow-md max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Driver Signup</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="relative z-0 w-full mb-5 group">
           
          </div>
          {/* Phone Number Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              {...register('phone', { required: 'Phone Number is required' })}
              name="phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
          </div>
          {/* Fayda Number Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register('fayda', { required: 'Fayda Number is required' })}
              name="fayda"
              id="floating_fayda"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            {errors.fayda && <p className="text-red-500 text-xs mt-1">{errors.fayda.message}</p>}
            <label htmlFor="floating_fayda" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fayda Number</label>
          </div>
          {/* Bank Account Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              pattern="^1000-\d{3}-\d{4}$"
              {...register('bankAccount', {
                required: 'Bank Account is required',
                pattern: {
                  value: /^1000-\d{3}-\d{4}$/,
                  message: 'Bank account must be in the format 1000-001-0002',
                },
              })}
              name="bankAccount"
              id="floating_bank_account"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            {errors.bankAccount && <p className="text-red-500 text-xs mt-1">{errors.bankAccount.message}</p>}
            <label htmlFor="floating_bank_account" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CBE Bank Account (1000-001-0002)</label>
          </div>
          {/* Submit Button */}
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DriverSignup;
