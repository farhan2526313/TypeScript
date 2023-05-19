interface pong {

    ping() :void;

}


class pong1 implements pong {
    
    ping() {
        console.log("ping and pong");
        
    }
 
}



let piingi = new pong1
piingi.ping();