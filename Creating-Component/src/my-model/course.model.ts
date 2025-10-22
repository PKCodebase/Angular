export class CourseModel{
    title!: string;
    duration!: string;
    instructor!: string;
    price?: number;

    constructor(title:string,duration:string,instructor:string,price?:number){
        this.title=title;
        this.duration=duration;
        this.instructor=instructor;
        this.price=price;

    }
}