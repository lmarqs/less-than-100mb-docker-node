import React from 'react';
import { Form } from './form';
import { useSearchParam } from './use-search-param';

export const App: React.FunctionComponent = () => {
  const email = useSearchParam('email');
  const password = useSearchParam('password');
  const check = useSearchParam('check');

  const alertItems = React.useMemo(
    () => Object.entries({ email, password, check })
      .filter(([key, value]) => value)
      .map(([key, value]) => `${key}: ${value}`),
    [email, password, check],
  );

  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col-sm-12 col-md-6">
          <h1>Hello, world!</h1>
          <Card>
            <Form email={email} password={password} check={check} />
          </Card>
          <br />
          {!!alertItems.length && (
            <Card>
              <List items={alertItems} />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

const Card: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="card">
    <div className="card-body">{children}</div>
  </div>
);

const List: React.FunctionComponent<{ items: Array<string> }> = ({ items }) => (
  <ul className="list-group">
    {items.map((item) => (
      <li className="list-group-item" key={item}>
        {item}
      </li>
    ))}
  </ul>
);
