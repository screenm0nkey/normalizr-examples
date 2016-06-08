import { Schema, arrayOf, normalize } from 'normalizr';
import _user from './github-user.json';
import _users from './github-users.json';
import _singleStarred from './github-starred-single.json';
import _arrayStarred from './github-starred-array.json';


/*
normalizr generates an object which is structured
{
  entities : {}
  result : []
}
*/

/*
 the 'login' property of the user data will be used in the 'result' as the 'idAttribute'
 instead of numeric values. remove the idAttribute and see.
 here we define a simple single schema, which can be applied to a single payload;
 */
const userSchema = new Schema('userz', {
  idAttribute: 'login'
});
export function getUser() {
  return [normalize(_user, userSchema), _user];
}
// same as above but applied to an array of users
export function getUsers() {
  return [normalize(_users, arrayOf(userSchema)), _users];
}


/*
 here we're defining a schema similar to the user schema above but note we're also
 defining a user sub-schema which is being mapped to the owned value of the starred data.
 so if you take a look at the result data you will see the
 data.entities.starred.PaloAltoNetworks.owner has been replaced with a value which maps to
 data.entities.userz
*/
const repoSchema = new Schema('starred', {
  idAttribute: 'full_name' // try changing 'full_name' to 'id'
});
repoSchema.define({
  owner: userSchema
});
export function  getSingleStarred() {
  return [normalize(_singleStarred, repoSchema), _singleStarred];
}
// same as above but used on an array of single starred items
export function  getStarred() {
  return [normalize(_arrayStarred, arrayOf(repoSchema)), _arrayStarred];
}

