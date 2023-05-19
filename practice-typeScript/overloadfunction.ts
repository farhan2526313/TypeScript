function aslam(  typ1:string, typ2 : string ) : string; 
function aslam(  typ1:number, typ2 : number ) : number;
function aslam(  typ1:boolean, typ2 : boolean ) : boolean; 


function  aslam(  typ1:any, typ2 : any ) : any  {
    return typ1 + typ2 ;
}



console.log(aslam(12,15));
console.log(aslam("A","b"));
console.log(aslam(true,false));




