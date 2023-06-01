class Person {
    const userID: number;
    const userName: string;
    const age: number;
    const address: string;
    const university: string;
    const faculty: string;
    
    

    constructor(userID: number, userName: String, age: number, address: string, university: string, faculty: string  ) {
        this.userID = userID;
        this.userName = userName;
        this.address = address;
        this.university = university;
        this.faculty = faculty;
        this.age = age;
        

    }
    // move(distanceInMeters: number = 0) {
    //   console.log(`${this.name} moved ${distanceInMeters}m.`);
    // }
  }
   