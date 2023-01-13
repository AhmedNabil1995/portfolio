export const ParentVarient = {
    initial:{
    x:'-100vw'        
    },
    animate:{
        x:0,
        transition:{staggerChildren:0.8,when:'beforeChildren'}
    },
    exit:{
        opacity:0,
        x:'-100vw',
        transition:{duration:1}
    }
}
export const imgVariant = {
    initial:{
        opacity:0,
        scale:0.5
    },
    animate:{
        opacity:1,
        scale:1,
        transition:{delay:0.5,duration:1.5}
    }
}

export const contentVariant = {
    initial:{
        opacity:0,
        x:'100vw'
    },
    animate:{
        opacity:1,
        x:0,
        transition:{delay:1,duration:1.5}
    }
}

export const headerVariant = {
    initial:{
        opacity:0,
        scale:0.3,
        y:'-100vh'
    },
    animate:{
        opacity:1,
        y:0,
        scale:1,
        transition:{delay:0.3,duration:1.5,type:'spring',damping:5,mass:1,stiffness:50}
    }
}

export const childrenVariant = {
    initial:{
        opacity:0,
        y:200
    },
    animate:{
        opacity:1,
        y:0,
        transition:{delay:0.3,duration:1.5,}
    }
}

export const parentNoAnimate = {
    initial:{    
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{staggerChildren:3,when:'beforeChildren'}
    },
}

export const modelVariant = {
    initial:{
        opacity:0,
        scale:0.3
    },
    animate:{
        opacity:1,
        scale:1,
        transition:{duration:0.5}
    },
    exit:{
        opacity:0,
        scale:0.2,
        transition:{
            duration:0.5
        }
    }
}