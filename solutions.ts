const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    else { 
        return value * 2;
    }
}


const processInput = (value: string | number | boolean):string|number => { 
    if (typeof value === 'string') {
        return value.trim().toLowerCase()
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else { 
        return value ===true?'Active':'Inactive'
    }
}


const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]): string => { 
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


const concatenateArrays = <T>(...arrays: T[][]):T[] => { 
    const arr = [];
    for (let x of arrays) { 
        arr.push(...x)
    }
    return arr

}


interface Course { 
    title: string,
    students: number,
    isPublished:boolean
}

const getPopularCourses = (courses: Course[], minStudents: number):Course[] => { 
    return courses.filter(course => { 
        return course.isPublished && course.students >= minStudents    
    })
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K):T[K][] => {
    // console.log(items) 
    return items.map(item =>{
        return item[key]}
    )
}


class Employee { 
    protected name: string;
    private baseSalary: number
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() { 
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee { 
    private department: string;
    constructor(name: string, baseSalary: number,department: string) { 
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() { 
        return `Manager of ${this.department}: ${this.name}`
    }
}
