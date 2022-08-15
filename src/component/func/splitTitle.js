

export const splitTitle = (title, count) =>{
    let arr = title.split(' ');
    let r = [];
    while(arr.length){
      r.push(arr.splice(0,count).join(' '))
    };
    return r ;
}