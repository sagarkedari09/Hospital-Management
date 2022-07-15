import { ILogin } from "src/app/interface/app.types";

export const backendStudentList = async (): Promise<ILogin[]> => {
    return [
       {email:'admin@gmail.com',password:'123456',role:'admin'},
       {email:'doctor1@gmail.com',password:'123456',role:'doctor'},
       {email:'doctor2@gmail.com',password:'123456',role:'doctor'},
       {email:'nurse1@gmail.com',password:'123456',role:'nurse'},
       {email:'nurse2@gmail.com',password:'123456',role:'nurse'},
       {email:'nurse3@gmail.com',password:'123456',role:'nurse'},
       {email:'nurse5@gmail.com',password:'123456',role:'nurse'},
       {email:'nurse4@gmail.com',password:'123456',role:'nurse'}
    ];
}
