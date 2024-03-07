function enlargeCard(e, v){
    let cross="#cross"+v;
    document.querySelector(cross).style.color="rgb(255, 232, 51)";
    document.querySelector(cross).style.textShadow="0px 0px 1px black";
    e.classList.add('ExpSp');
    let txt="#txt"+v;
    console.log(txt);
    document.querySelector(txt).style.display="block";
}
function dimCard(e, v){
    let cross="#cross"+v;
    document.querySelector(cross).style.color="white";
    e.classList.remove('ExpSp');
    let txt="#txt"+v;
    console.log(txt);
    document.querySelector(txt).style.display="none";
}
function moreTxt(){
    document.getElementById('more').style.display="block";
}
function lessTxt(){
    document.getElementById('more').style.display="none";
}

let greet=document.querySelector('.greet');
const dropDown=()=>{ 
    greet.classList.add('greetShow');
}
const takeUp=()=>{
    greet.classList.remove('greetShow');
}

const edu=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})
const hidden=document.querySelectorAll('.hidden');
hidden.forEach((el)=>edu.observe(el));

const enlarge=(e)=>{
    e.style.width="60px";
}
const diminish=(e)=>{
    e.style.width="50px";
}


const num=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            let c,d,e,f;
            c=d=e=f=0;
            function count(){
                if(c<108){
                    c++;
                }
                if(d<232){
                    d++;
                }
                if(e<304){
                    e++;
                }
                if(f<32){
                    f++;
                }
                document.querySelector("#c1").innerText=`${c}`;
                document.querySelector("#c2").innerText=`${d}`;
                document.querySelector("#c3").innerText=`${e}`;
                document.querySelector("#c4").innerText=`${f}`;
                if(c==108 && d==232 && e==304 && f==32){
                    window.clearInterval(time);
                }
}
let time=window.setInterval(count, 15);
        }
    })
})
const counter=document.querySelectorAll(".cc");
counter.forEach((el)=>num.observe(el));
