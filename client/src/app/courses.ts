export interface Course {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const courses = [
    {'id':1, 'name':'Learn Angular', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/angular.png'},
    {'id':2, 'name':'Learn Node Js', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/node.png'},
    {'id':3, 'name':'Learn React Js', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/react.png'},
    {'id':4, 'name':'Learn TypeScript', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/typescript.png'}
  ];
