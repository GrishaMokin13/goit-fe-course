class db {
    constructor () {
      this._database = 'https://test-users-api.herokuapp.com/users/',
      this._getBtn = document.querySelector('#get-db'),
      this._getUserBtn = document.querySelector('#get-user'),
      this._addUserBtn = document.querySelector('#add-user'),
      this._updateUserBtn = document.querySelector('#update-user'),
      this._removeUserBtn = document.querySelector('#remove-user'),
      this.getBtn.addEventListener( 'click', this.getAllUsers.bind(this));
      this.getUserBtn.addEventListener( 'click', this.getUserById.bind(this));
      this.addUserBtn.addEventListener( 'click', this.addUser.bind(this));
      this.updateUserBtn.addEventListener( 'click', this.updateUser.bind(this));
      this.removeUserBtn.addEventListener('click', this.removeUser.bind(this));
    }
  
    get database () {return this._database};
    get getBtn () {return this._getBtn};
    get getUserBtn () {return this._getUserBtn};
    get addUserBtn () {return this._addUserBtn};
    get updateUserBtn () {return this._updateUserBtn};
    get removeUserBtn () {return this._removeUserBtn};
  
    getAllUsers () {
  
      fetch(this.database, {
        method: 'GET',
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then( data => {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        const thName = document.createElement('th');
        const thAge = document.createElement('th');
        const thID = document.createElement('th');
  
        thName.textContent = 'Name';
        thAge.textContent = 'Age';
        thID.textContent = 'ID';
  
        tr.append(thName, thAge, thID);
        thead.appendChild(tr);
  
        data.data.map( el => {
          const tr = document.createElement('tr');
          const tdName = document.createElement('td');
          const tdAge = document.createElement('td');
          const tdID = document.createElement('td');
  
          tdName.textContent = el.name;
          tdAge.textContent = el.age;
          tdID.textContent = el.id;
  
          tr.append(tdName, tdAge, tdID);
          tbody.appendChild(tr);
        } );
        table.append(thead, tbody);
        document.body.appendChild(table);
      } )
      .catch(err => console.log(err));
    }
  
    getUserById () {
      const id = prompt('Enter user ID');
      fetch( `${this.database}${id}`, {method: 'GET'} )
      .then( response => response.json() )
      .then(data => {
  
        if ( data.status === 200 && id !== '' ) {
          console.log({data});
        } else console.log('404');
        
      })
      .catch( err => console.log(err) );
    }
  
    addUser () {
      const newUser = {
        name: prompt('Name: '),
        age: prompt('Age: ')
      };
      fetch(this.database, {
        method: 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then( data => data )
    }
  
    removeUser () {
      const id = prompt('ID: ');
      fetch( `${this.database}${id}`, {method: 'DELETE'} )
      .then( response => response.json() )
      .then(data => {
        if ( data.status === 200 && id !== '' ) {
        } else {
          console.log('404');
        }
      })
      .catch( err => console.log(err) );
    }
  
    updateUser () {
      const id = prompt('ID: ');
      const Update = {
        name: prompt('Name: '),
        age: prompt('Age: ')
      };
      
      fetch( `${this.database}${id}`, {
        method: 'PUT',
        body: JSON.stringify(Update),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then( response => response.json())
      .then( data => {
        if ( data.status === 200 && id !== '' ) {
        } else {
          alert('404');
        }
      } )
      .catch( err => console.log(err));
    }
  }
  
  new db();