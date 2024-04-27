import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { FormContainer, Label, Input, Select, Button, ErrorMessage, ButtonText } from './StyledComponents';
import FormRow from './FormRow';
import { TrashIcon } from '@heroicons/react/24/outline'


const schema = yup.object().shape({
  cafeName: yup.string().required(),
  cafeAddress: yup.string().required(),
  contact: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      number: yup.string().required(),
      designation: yup.string().required(),
    })
  ),
  iceCreamBrand: yup.string().required(),
  iceCreamVariants: yup.array().of(
    yup.object().shape({
      variant: yup.string().required(),
      quantity: yup.number().required().positive().integer(),
      price: yup.number().required().positive(),
    })
  ),
  cafeAcceptation: yup.string().required(),
});



const CafeForm = () => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields: contactFields, append: appendContact, remove: removeContact } = useFieldArray({
    control,
    name: 'contact',
  });

  const { fields: variantFields, append: appendVariant, remove: removeVariant } = useFieldArray({
    control,
    name: 'iceCreamVariants',
  });

  const watchIceCreamBrand = watch('iceCreamBrand');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl mb-4">Cafe Information</h2>

        <FormRow id="cafeName" label="Cafe Name" error={errors.cafeName}>
          <Input id="cafeName" {...register("cafeName")} />
        </FormRow>

        <FormRow id="cafeAddress" label="Cafe Address" error={errors.cafeAddress}>
          <Input id="cafeAddress" {...register("cafeAddress")} />
        </FormRow>


      <div className="mb-4">
        <Label>Contact</Label>
        {contactFields.map((contact, index) => (
          <div key={contact.id} className="flex items-center mb-3">
              <div className="flex-1 pr-1">
                <Input {...register(`contact.${index}.name`)} placeholder="Name" />
                {errors?.contact?.[index]?.name && <ErrorMessage>{errors.contact[index].name.message}</ErrorMessage>}
              </div>
              <div className="flex-1 px-1">
                <Input {...register(`contact.${index}.number`)} placeholder="Number" />
                {errors?.contact?.[index]?.number && <ErrorMessage>{errors.contact[index].number.message}</ErrorMessage>}
              </div>
            
              <div className="flex-1 px-1">
                <Select {...register(`contact.${index}.designation`)}>
                  <option value="manager">Manager</option>
                  <option value="owner">Owner</option>
                </Select>
              {errors?.contact?.[index]?.designation && <ErrorMessage>{errors.contact[index].designation.message}</ErrorMessage>}
              </div>
              <div className=" pl-1 text-right">
                <ButtonText type="button" onClick={() => removeContact(index)}><TrashIcon className="h-4 w-6" aria-hidden="true" /></ButtonText>
              </div>
          </div>
        ))}
        <ButtonText type="button" onClick={() => appendContact({ name: '', number: '', designation: '' })}>Add Contact</ButtonText>
      </div>

      <h2 className="text-xl mb-4">Cafe Current Ice Cream Consuming</h2>
      <div className="mb-4">
        <Label>Ice Cream Brand</Label>
        <Select {...register('iceCreamBrand')}>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
        </Select>
        {errors.iceCreamBrand && <ErrorMessage>{errors.iceCreamBrand.message}</ErrorMessage>}
        {watchIceCreamBrand === 'other' && (
          <Input {...register('iceCreamBrand')} placeholder="Other Brand" />
        )}
      </div>
      <div className="mb-4">
        <Label>Ice Cream Variants</Label>
        {variantFields.map((variant, index) => (
          <div key={variant.id} className="mb-3 flex items-center">
              <div className="flex-1 pr-1">
                <Select {...register(`iceCreamVariants.${index}.variant`)}>
                  <option value="vanilla">Vanilla</option>
                  <option value="chocolate">Chocolate</option>
                </Select>
                {errors?.iceCreamVariants?.[index]?.variant && <ErrorMessage>{errors.iceCreamVariants[index].variant.message}</ErrorMessage>}
              </div>

              <div className="flex-1 px-1">
                <Input {...register(`iceCreamVariants.${index}.quantity`)} placeholder="Quantity" type="number" />
                {errors?.iceCreamVariants?.[index]?.quantity && <ErrorMessage>{errors.iceCreamVariants[index].quantity.message}</ErrorMessage>}
              </div>

              <div className="flex-1 px-1">            
                <Input {...register(`iceCreamVariants.${index}.price`)} placeholder="Price" type="number" />
                {errors?.iceCreamVariants?.[index]?.price && <ErrorMessage>{errors.iceCreamVariants[index].price.message}</ErrorMessage>}
              </div>

              <div className=" pl-1">
                <ButtonText type="button" onClick={() => removeVariant(index)}><TrashIcon className="h-4 w-6" aria-hidden="true" /></ButtonText>
              </div>
          </div>
        ))}
        <ButtonText type="button" onClick={() => appendVariant({ variant: '', quantity: '', price: '' })}>Add Variant</ButtonText>
      </div>

      <div className="mb-4">
        <Label>Cafe Acceptation</Label>
        <Select {...register('cafeAcceptation')}>
          <option value="price">Price</option>
          <option value="quality">Quality</option>
          <option value="other">Other</option>
        </Select>
        {errors.cafeAcceptation && <ErrorMessage>{errors.cafeAcceptation.message}</ErrorMessage>}
      </div>

      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default CafeForm;
