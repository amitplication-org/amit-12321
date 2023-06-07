import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { NewEntityTitle } from "../newEntity/NewEntityTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="newEntity"
          reference="NewEntity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NewEntityTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="serialNumber" source="serialNumber" />
        <TextInput label="some_field" source="someField" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
