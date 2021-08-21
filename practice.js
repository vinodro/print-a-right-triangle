
let a = prompt("ender no:")
let b=''
let rcount=0
let count=0
let arr=[]
for(let i=1;i<a;i++){
  if(count<a){
    rcount=count
    count+=i
    arr.push(i)
  }
}
let g=rcount+arr[arr.length-1]
for(let k=arr.length-1;k>=0;k--){
  g=g-arr[k]
  if(count<=a){
    for(let j=g+arr[k];j>g;j--){
      b=j+' '+b
      if(j>10){
        let k=(g+1).toString()
        if(b[0]==k[0] && b[1]==k[1]){
          console.log(b)
          b=''
        }
      }else if(j<=10){
        if(b[0]==g+1){
          console.log(b)
          b=''
        }
      }
    }
  }else{
    for(let j=g;j>g-arr[k-1];j--){
      b=j+' '+b
      if(j>10){
        let h=(g-arr[k-1]+1).toString()
        if(b[0]==h[0] && b[1]==h[1]){
          console.log(b)
          b=''
        }
      }else if(j<=10){
        if(b[0]==g-arr[k-1]+1){
          console.log(b)
          b=''
        }
      }
    }
  }
}