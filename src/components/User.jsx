import React from 'react';
import { UserType } from '../types/project.typedefs';

export const User = ({ user }) => (
  <>
    {`(${user.name})`}
  </>
);

User.propTypes = {
  user: UserType.isRequired,
};
