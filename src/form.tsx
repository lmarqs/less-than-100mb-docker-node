import React from 'react';

interface Props {
  email?: string;
  password?: string;
  check?: string;
}

export const Form: React.FunctionComponent<Props> = ({ email, password, check }) => (
  <form autoComplete="off" method="get">
    <div className="form-group">
      <label htmlFor="input-email">Email address</label>
      <input
        aria-describedby="email-help"
        className="form-control"
        defaultValue={email}
        id="input-email"
        name="email"
        placeholder="Enter email"
        type="email"
      />
      <small id="email-help" className="form-text text-muted">
        We&apos;ll never share your email with anyone else.
      </small>
    </div>
    <div className="form-group">
      <label htmlFor="input-password">Password</label>
      <input
        className="form-control"
        defaultValue={password}
        id="input-password"
        name="password"
        placeholder="Password"
        type="password"
      />
    </div>
    <div className="form-check">
      <input
        className="form-check-input"
        defaultChecked={!!check}
        defaultValue="yes"
        id="input-check"
        name="check"
        type="checkbox"
      />
      <label className="form-check-label" htmlFor="input-check">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);
