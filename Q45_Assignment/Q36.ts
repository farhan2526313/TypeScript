function make_shirt(size:string = "Small" ,message:string){

    console.log(`A ${size} shirt with the message "${message}" has been created.`);
}
make_shirt("large\n","My best shirt");




make_shirt(" medium\n","My best T-shirt");

export default  make_shirt; 


