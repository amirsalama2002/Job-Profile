import React from 'react';
import HederServer from './HederServer';
import CountactServer from './CountactServer';
import ClockServer from './ClockServer';
const Server = () => {
    return (
        <div>
          <HederServer/>
          <CountactServer/>
          <ClockServer/>
        </div>
    );
}

export default Server;

