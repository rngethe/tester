import React from 'react';
import { withFormik } from 'formik';
import netlifyIdentity from 'netlify-identity-widget';
export default function Protected() {
  const user = netlifyIdentity.currentUser();
  console.log({ user });
  return (
    <div>
      <h3>Protected Page</h3>
      You are logged in as <b>{user.email}</b>

    
    <form data-netlify="true" hidden name="contact" netlify-honeypot="bot-field">
  <input type="text" name="username" />
  <input type="email" name="email" />
</form>
        </div>
  );
}
