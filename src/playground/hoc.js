import React from 'react';
import ReactDOM from 'react-dom';

// HOC Advantages:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  // HOC
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="2ez4arteezy" />,
  document.querySelector('#app')
);
// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="2ez4arteezy" />,
//   document.querySelector('#app')
// );
