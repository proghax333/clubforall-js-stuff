// Pure functions

function add(a, b) {
  return a + b;
}

function getUserName(user) {
  return user.name;
}

const db = {
  getUsers() {
    return [
      {
        id: 1,
        name: "Jane"
      },
      {
        id: 2,
        name: "Jack"
      }
    ]      
  }
}

// function getUsersFromDB() {
//   return db.getUsers();
// }

function getUsersFromDB(db) {
  return db.getUsers();
}

function testGetUsersFromDB() {
  const fakeUsers = [
    {
      id: 2,
      name: "Jack"
    }
  ];
  
  const users = getUsersFromDB({
    getUsers() {
      return fakeUsers;
    }
  });

  console.log("is equal: ", fakeUsers === users);
}

testGetUsersFromDB();

// console.log(user);

