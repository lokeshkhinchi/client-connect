import React from 'react';
import { useForm } from 'react-hook-form';
import { Div, Span } from './StyledComponents';

const FollowUpForm = () => {
  const { register, handleSubmit, formState: { errors }, watch  } = useForm();
  const onSubmit = (data) => {
    console.log(data); // Submitting form data, you can handle it accordingly
  };

  // Watching meetingStatus field for changes
  const watchMeetingStatus  = watch("meetingStatus");

  return (<>
    <Div className="mb-2">
      <Span className="block text-gray-500">Representative</Span>
      <Span className="block text-gray-900">Lokesh Khinchi (Owner)</Span>
      <Span className="block text-gray-900">+91-999999999</Span>
    </Div>

    <Div className="mb-2">
      <Span className="block text-gray-500">Meeting Time</Span>
      <Span className="block text-gray-900">Today First Half</Span>
    </Div>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-2">

      {/* Meeting Status */}
      <div className="mb-4">
        <label className="block text-gray-700">Meeting Status</label>
        <select {...register('meetingStatus', { required: true })} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
          <option value="">Select</option>
          <option value="askForIcecreamSample">Ask for ice cream sample</option>
          <option value="askForOrder">Ask for order</option>
          <option value="notLikeSample">Not like sample</option>
          <option value="rescheduleMeeting">Reschedule meeting</option>
        </select>
        {errors.meetingStatus && <span className="text-red-500">This field is required</span>}
      </div>

      {/* Reschedule Form */}
      {/* Ab yaha par agar meeting ko reschedule karna hai toh woh form dikhaya jaayega */}
      {watchMeetingStatus === "rescheduleMeeting" && (
        <div>
          {/* Reschedule Reason */}
          <div className="mb-4">
            <label className="block text-gray-700">Reschedule Reason</label>
            <select {...register('rescheduleReason')} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
              <option value="notAvailable">Person I was meeting with not available</option>
              <option value="otherPersonNotAvailable">Person coming to the meeting is not available</option>
            </select>
          </div>

          {/* Next Meeting Details */}
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
        </div>
      )}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
    </>
  );
};

export default FollowUpForm;
