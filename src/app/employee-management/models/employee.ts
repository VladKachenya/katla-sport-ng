export class Employee{
    constructor(
        public id: number,
        public fullName: string,
        public position: string,
        public email: string,
        public photoUrl: string,
        public bossId: number
    ) {
        if(photoUrl == null){
            //photoUrl = './'
        }
    }
}