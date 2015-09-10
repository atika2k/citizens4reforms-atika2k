/**
 * We will create a new role that will allow
 * not-admin users to edit posts
 */
c4rAdmin = new Roles.Role('c4rAdmin');

/**
 * We will allow users to edit the dictionary
 */
c4rAdmin.allow('dictionary.update', true);

/**
 * This will make users only can edit this fields in the dictionary
 */
c4rAdmin.helper('dictionary.allowedCategories', ['aktivnosti']);