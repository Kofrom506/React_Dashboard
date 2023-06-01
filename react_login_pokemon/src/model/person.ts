class Person {
  userID: number;
  userName: string;
  key: number;
  age: number;
  address: string;
  university: string;
  faculty: string;

  constructor(
    userID: number,
    userName: string,
    age: number,
    address: string,
    university: string,
    faculty: string
  ) {
    this.userID = userID;
    this.userName = userName;
    this.age = age;
    this.address = address;
    this.university = university;
    this.faculty = faculty;
    this.key = Math.random();
  }
  
}

var data: Person[] = [
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
];



