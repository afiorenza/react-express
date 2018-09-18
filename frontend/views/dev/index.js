require('./_dev.scss');

import React from "react";
import {Link} from 'react-router-dom';

const Dev = () => <div className="dev">
  This is dev page.
  <br />
  <br />
  <Link to='/'>Back to home</Link>
</div>;

export default Dev;
