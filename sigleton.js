class Singleton{
    static instance;
    constructor(){
        return Singleton.instance;

    }

    static getinstance(){
        if(Singleton.instance==null){
            Singleton.instance=new Singleton();
            return Singleton.instance;
        }

        return Singleton.instance;

    }
}

const obj1=Singleton.getinstance();
const obj2=Singleton.getinstance();

console.log(obj1==obj2);