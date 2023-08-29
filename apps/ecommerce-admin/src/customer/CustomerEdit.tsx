import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { OrderTitle } from "../order/OrderTitle";
import { SomeThingTitle } from "../someThing/SomeThingTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <SelectInput
          source="customerType"
          label="customer-type"
          choices={[
            { label: "INDIVIDUAL", value: "Individual" },
            { label: "COMPANY", value: "Company" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceInput
          source="someThing.id"
          reference="SomeThing"
          label="SomeThing"
        >
          <SelectInput optionText={SomeThingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
