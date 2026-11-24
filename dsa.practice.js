

// // first lets create an array of student names

// studentNames = ["Aishwarya", "Sanjay", "Reshika"]


// function findStudent(studentNames,student){
//     for (let s of studentNames){
//         if (s === student){
//             console.log( `The student named ${student} is present`)
//         }
//         else{
//             console.log("The student is not part of this school")
//         }
//     }
// }


// findStudent(studentNames,"Aishwarya");


class myArray{
    constructor(){
        this.length = 0 ,
        this.data = {}
    }

    push(number){
        this.data[this.length] = number 
        this.length ++
        return this.data
    }

    get(index){
        return this.data[index]
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length]
        this.length --
        return lastItem
    }
    shift(){

        // first we must think about the edge cases 
        // what happens if the length is 0
        if (this.length <= 0){
            return undefined
        }

        const first_item = this.data[0]

        // we dont have to delete the first item cuz when we shift every element to the left then it overwrites and then the first element will be replaced by the element next to it 
        // delete this.data[0]

        // for synthx inside a loop u should use ; and not , 
        for (let i = 0; i <= this.length - 1;i ++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1];
        
        return first_item

        
    }

}

const array1 = new myArray()

console.log(array1.push(5))
console.log(array1.push(7))
console.log(array1.push(10))


// console.log(array1.get(0))


console.log(array1.pop())

console.log(array1.shift())
console.log(array1.length)







