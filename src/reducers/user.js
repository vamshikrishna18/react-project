export default function(state =null,action){
    console.log("iam in reducer---");
    switch(action.type){
        case "REGISTER":
            console.log('action.payload--',action.payload.data);
            if(action.payload.data){
                return true;
            }else {

                return false;
            }

            case "LOGIN":
                console.log('action.payload--',action.payload.data);
                if(action.payload.data){
                    return true;
                }else {

                    return false;
                }

                case "products":
                    console.log('action.payload--',action.payload.data);
                    return action.payload.data
                  default :return state;   
    }
}