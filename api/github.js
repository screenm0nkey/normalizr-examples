import { Schema, arrayOf, normalize } from 'normalizr';
import _user from './github-user.json';
import _singleStarred from './github-starred-single.json';
import _arrayStarred from './github-starred-array.json';

// 'login' will be used in the result as the 'idAttribute' instead of numeric values. remove the idAttribute and see.
const userSchema = new Schema('users', {
  idAttribute: 'login'
});

const repoSchema = new Schema('repos', {
  idAttribute: 'full_name'
});

repoSchema.define({
  owner: userSchema
});

export const Schemas = {
  USER: userSchema, // fetchUser()
  USER_ARRAY: arrayOf(userSchema),
  REPO: repoSchema,
  REPO_ARRAY: arrayOf(repoSchema) //fetchStarred()
};

export default {
  getUser() {
    const response = normalize(_user, Schemas.USER);
    return [response, _user];
  },

  getSingleStarred() {
    var response = normalize(_singleStarred, Schemas.REPO)
    return [response, _singleStarred];
  },

  getStarred() {
    var response = normalize(_arrayStarred, Schemas.REPO_ARRAY)
    return [response, _arrayStarred];
  }
}
