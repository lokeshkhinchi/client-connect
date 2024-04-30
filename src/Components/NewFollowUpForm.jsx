import React from 'react';
import { useForm } from 'react-hook-form';

const NewFollowUpForm = () => {
  const { register, handleSubmit, formState: { errors }, watch  } = useForm();
  const onSubmit = (data) => {
    console.log(data); // Submitting form data, you can handle it accordingly
  };

  return (<>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-2">

      <div className="mb-4">
        <label htmlFor="nextMeetingDate" className="block text-gray-700">Next Meeting Date</label>
        <input type="datetime-local" id="nextMeetingDate" {...register('nextMeetingDate', { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        {errors.nextMeetingDate && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="nextMeetingAvailability" className="block text-gray-700">Next Meeting Availability</label>
        <select {...register('nextMeetingAvailability')} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
          <option value="earlyMorning">Early Morning</option>
          <option value="beforeLunch">Before Lunch</option>
          <option value="afterLunch">After Lunch</option>
          <option value="evening">Evening</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="nextMeetingPerson" className="block text-gray-700">Person for Next Meeting</label>
        <input type="text" id="nextMeetingPerson" {...register('nextMeetingPerson', { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        {errors.nextMeetingPerson && <span className="text-red-500">This field is required</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
    </>
  );
};

export default NewFollowUpForm;
