import React from 'react';
import './Count.css';

const Count = () => {
    const users = [
        { id: 1, name: 'مبرمجين' , jop : 'جميع' },
        { id: 2, name: 'العمال', jop : 'جميع'},
        { id: 3,name: 'زو الاحتياجات' , jop : 'جميع' },
      ];
    return (
        <div className='car'>
        {users.map(user => (
          <div key={user.id} className="card">
          <div className="card-body">
          <i class="fa-solid fa-users"></i>
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{user.jop}</h6>
          </div>
        </div>
        ))}
      </div>

    );
}

export default Count;
