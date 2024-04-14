import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label.attrs({
  className: "block text-sm font-medium text-gray-600"
})``;

export const Input = styled.input.attrs({
  className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
})``;

export const Select = styled.select.attrs({
  className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
})``;

export const Button = styled.button.attrs({
  className: "rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
})``;

export const ErrorMessage = styled.span.attrs({
  className: "text-red-500 text-sm"
})``;